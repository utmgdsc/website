import {
  useEffect,
  useState,
} from 'react';

import {
  Grid,
  Skeleton,
  Typography,
} from '@mui/material';

import { EventUpcomingStates } from '../../constants';
import { ConvertDate } from '../ConvertDate/ConvertDate';
import { InfoCard } from '../InfoCard';
import {
  getDescriptionFromStorage,
  useLocalStorage,
} from './useLocalStorage';

const CHAPTER_API_URL = "https://gdsc.community.dev/api/chapter/615/event";
const EVENT_API_URL = "https://gdsc.community.dev/api/event/";

/**
 * Gets the events from the GDSC (bevy) API.
 * If limit is specified, it will only show that many events.
 * If upcoming is specified, it will only show upcoming events. Otherwise, it will show all events.
 * @param {integer} limit the number of events to show
 * @param {integer} upcoming: filter events: use the UpcomingStates enum to specify. default shows all
 * @returns {JSX.Element} EventList component
 */
export const EventList = ({ limit, upcoming = EventUpcomingStates.ALL }) => {
	const [events, setEvents] = useState([]);

	// needed to show error message as getEvents does not throw error
	const [error, setError] = useState(false);

	/**
	 * load external json file from api
	 * @returns {object} bevy chapter object
	 */
	const getEvents = async () => {
		const abortController = new AbortController()

		await fetch(CHAPTER_API_URL, {
			signal: abortController.signal
		})
			.then(response => response.json())
			.then(data => {
				if (data["detail"] && (data["detail"].includes("throttled") || data["detail"].includes("error"))) {
					throw new Error(data["detail"]);
				}
				// filter only published events
				let eventData = data["results"].filter(event => event["status"] === "Published");

				// slice to limit if specified
				if (limit) {
					eventData = eventData.slice(0, limit);
				}

				// filter only upcoming events if specified
				if (upcoming === EventUpcomingStates.UPCOMING) {
					// upcoming events
					eventData = eventData.filter(event => new Date(event.end_date) >= new Date());
				} else if (upcoming === EventUpcomingStates.PAST) {
					// past events
					eventData = eventData.filter(event => new Date(event.end_date) < new Date());
				}
				// finally set events to eventData
				setEvents(eventData);
			}).catch(error => {
				// if the query has been aborted, do nothing
				if (error.name === "AbortError") return;
				setError(error);
			});
		return () => {
			abortController.abort();
		}
	}

	// empty array means only run once to avoid rate limit
	useEffect(() => {
		getEvents();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// if error, throw an error so that any prospective ErrorBoundary can catch it
	if (error) {
		throw error;
	}

	// if no events, show message rather than empty page
	else if (events.length === 0) {
		return (
			<Grid item xs={12}>
				<Typography variant="h5" component="p" gutterBottom>
					None yet! Check back soon :)
				</Typography>
			</Grid>
		);
	}

	return (
		<Grid container spacing={2}>
			{events.map((event) => (
				<Grid key={event["id"]} item xs={12} sm={6} md={4}>
					<InfoCard
						subtitle={<ConvertDate date={event["start_date"]} />}
						title={event["title"]}
						description={<Description id={event["id"]} />}
						link={event["url"]}
					/>
				</Grid>
			))}
		</Grid>
	);
}

/**
 * Gets the description given an event ID from the GDSC (bevy) API.
 * @param {string} id id of the event
 * @returns {string} description of the event as a raw string
 */
const Description = ({ id }) => {
	const [error, setError] = useState(false);
	const [description, setDescription] = useLocalStorage(id);

	/**
	 * load external json file from api
	 * @returns {object} bevy event object
	 */
	const getDescription = async () => {
		// check if the event is in local storage
		if (!getDescriptionFromStorage(id)) {
			// if not, fetch from api
			const abortController = new AbortController()

			await fetch(EVENT_API_URL + id, {
				signal: abortController.signal
			})
				.then(response => response.json())
				.then(data => {
					setDescription(data["description_short"]);
				})
				.catch(error => {
					if (error.name === "AbortError") return;
					// if the query has been aborted, do nothing
					setError(error)
				})

			return () => {
				abortController.abort();
			}
		}
	}

	// empty array means only run once to avoid rate limit
	useEffect(() => {
		try {
			getDescription();
		} catch (error) {
			setError(error);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (error) {
		throw error;
	} else {
		return description ? description : <Skeleton variant="text" sx={{ fontSize: "5rem" }} />;
	}
}
