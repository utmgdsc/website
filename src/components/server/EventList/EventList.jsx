import { ConvertDate } from '~/components/server';
import { InfoCard } from '~/components/client';
import { Alert, Grid, Typography } from '@mui/material';
import { MIN_DATE, MAX_DATE, getEnrichedEvents, getYears } from '~/app/api/events/route';

const EventInfoCard = ({ event, description }) => {
	return (
		<InfoCard
			subtitle={<ConvertDate date={event['start_date']} />}
			title={event['title']}
			href={event['url']}
			description={description}
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
 * @property {JSX.Element} EmptyComponent component to show when there are no events
 * @returns {JSX.Element} EventList component
 */
export const EventList = async ({ limit, from = MIN_DATE, to = MAX_DATE, EmptyComponent = null }) => {
	const { events, descriptions } = await getEnrichedEvents(limit, from, to);

	if (!Array.isArray(events)) {
		return <Alert severity="error">{events?.message}</Alert>;
	}

	return (
		<>
			{events.length > 0 && (
				<Grid container spacing={2}>
					{events.map((event, id) => (
						<Grid key={id} item xs={12} sm={6} md={4}>
							<EventInfoCard event={event} description={descriptions[id]} />
						</Grid>
					))}
				</Grid>
			)}
			{events.length === 0 && EmptyComponent && <EmptyComponent />}
		</>
	);
};

/**
 * return the min of two dates
 * @param {Date} a the first date
 * @param {Date} b the next date
 */
const dateMin = (a, b) => (a < b ? a : b);

/**
 * return the max of two dates
 * @param {Date} a the first date
 * @param {Date} b the next date
 */
const dateMax = (a, b) => (a > b ? a : b);

/**
 * All events with years as headers.
 */
export const YearedEventList = async ({ from = MIN_DATE, to = MAX_DATE }) => {
	const years = await getYears();

	return (
		<>
			{years
				.filter(year => year >= from.getFullYear() && year <= to.getFullYear())
				.map(year => (
					<section key={year}>
						{from.getFullYear() - to.getFullYear() !== 0 && (
							<Typography
								component="h3"
								variant="h5"
								id={year}
								sx={{
									color: 'text.primary',
									fontWeight: 'bold',
									lineHeight: '2.5em',
								}}
							>
								{year}
							</Typography>
						)}
						<EventList
							from={dateMax(from, new Date(year, 0, 1))}
							to={dateMin(to, new Date(year + 1, 0, 1))}
						/>
					</section>
				))}
		</>
	);
};

/**
 * Get the years for the event tabs.
 */
export const getYearTabs = async () => {
	const years = await getYears();

	return years.map(year => {
		return year;
	});
};
