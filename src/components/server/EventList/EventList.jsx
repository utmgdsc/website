import { ConvertDate } from '@/components/server';
import { InfoCard } from '@/components/client';
import { Alert, Grid } from '@mui/material';

const CHAPTER_API_URL = 'https://gdsc.community.dev/api/chapter/615/event';
const EVENT_API_URL = 'https://gdsc.community.dev/api/event/';

/**
 * Minimum date allowed by JavaScript Date object.
 * @type {Date}
 * @see https://262.ecma-international.org/5.1/#sec-15.9.1.1
 */
const MIN_DATE = new Date(-8640000000000000);

/**
 * Maximum date allowed by JavaScript Date object.
 * @type {Date}
 * @see https://262.ecma-international.org/5.1/#sec-15.9.1.1
 */
const MAX_DATE = new Date(8640000000000000);

/**
 * load external json file from api
 * @param {integer} limit the number of events to show
 * @param {Date} from the date to start showing events from (inclusive), based on end_date
 * @param {Date} to the date to stop showing events at (non-inclusive), based on end_date
 * @returns {object} bevy chapter object
 */
const getEvents = async (limit, from, to) => {
	return await fetch(CHAPTER_API_URL, {
		next: { revalidate: 3600 }, // revalidate once an hour
	})
		.then(response => response.json())
		.then(data => {
			if (data['detail'] && (data['detail'].includes('throttled') || data['detail'].includes('error'))) {
				throw new Error(data['detail']);
			}
			// filter only published events
			let eventData = data['results'].filter(event => event['status'] === 'Published');

			// slice to limit if specified
			if (limit) {
				eventData = eventData.slice(0, limit);
			}

			// filter only upcoming events if specified
			eventData = eventData.filter(event => {
				const endDate = new Date(event['end_date']);
				return endDate >= from && endDate < to;
			});

			return eventData;
		})
		.catch(error => {
			return error;
		});
};

/**
 * load external json file from api
 * @param {id} id id of the event
 * @returns {object} bevy event object
 */
const getDescription = async (id) => {
	return await fetch(EVENT_API_URL + id, {
		next: { revalidate: 604800 }, // revalidate once a week
	})
		.then(response => response.json())
		.then(data => {
			return data['description_short'];
		})
		.catch(error => {
			if (error.name === 'AbortError') return;

			return error;
		});
};

const EventInfoCard = ({ event }) => {
	const description = getDescription(event['id']);

	if (!description) {
		return (
			<Alert severity="error">
				{description?.message}
			</Alert>
		)
	}

	return (
		<InfoCard
			subtitle={<ConvertDate date={event['start_date']} />}
			title={event['title']}
			description={description}
			href={event['url']}
		/>
	);
};

/**
 * Gets the events from the GDSC (bevy) API.
 * If limit is specified, it will only show that many events.
 * If upcoming is specified, it will only show upcoming events. Otherwise, it will show all events.
 * @property {integer} limit the number of events to show
 * @property {Date} from the date to start showing events from (inclusive), based on end_date
 * @property {Date} to the date to stop showing events at (non-inclusive), based on end_date
 * @property {number} skeleton number of skeleton cards to show when loading
 * @returns {JSX.Element} EventList component
 */
export const EventList = async ({ limit, from = MIN_DATE, to = MAX_DATE }) => {
	const events = await getEvents(limit, from, to);
	// const years = await getYears();

	if (!Array.isArray(events)) {
		return (
			<Alert severity="error">
				{events?.message}
			</Alert>
		)
	}

	return (
		<Grid container spacing={2}>
			{events.map((event, id) => (
				<Grid key={id} item xs={12} sm={6} md={4}>
					<EventInfoCard event={event} />
				</Grid>
			))}
		</Grid>
	);
};

/**
 * Gets a list of years that have events.
 *
 * @returns {Array} array of years
 */
export const getYears = async () => {
	const events = await getEvents(undefined, MIN_DATE, new Date());

	const years = events.reduce((acc, event) => {
		const year = new Date(event['end_date']).getFullYear();
		if (!acc.includes(year)) {
			acc.push(year);
		}
		return acc;
	}, []);

	return years.sort((a, b) => b - a);
};
