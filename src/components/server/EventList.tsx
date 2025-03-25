import { ConvertDate } from '~/components/server';
import { InfoCard } from '~/components/client';
import { Alert, Grid2 as Grid, Typography } from '@mui/material';
import { MIN_DATE, MAX_DATE, getEnrichedEvents, getYears } from '~/app/api/events/getEventData';
import { ReactNode } from 'react';

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

interface EventListProps {
	/** The number of events to show */
	limit?: number;
	/** The date to start showing events from (inclusive), based on end_date */
	from?: Date;
	/** The date to stop showing events at (non-inclusive), based on end_date */
	to?: Date;
	/** Number of skeleton cards to show when loading */
	skeleton?: number;
	/** Component to show when there are no events */
	EmptyComponent?: React.ElementType | null;
	/** Children to show when there are events */
	children?: ReactNode;
}

/**
 * Gets the events from the GDSC (bevy) API.
 * If limit is specified, it will only show that many events.
 * If upcoming is specified, it will only show upcoming events. Otherwise, it will show all events.
 */
export const EventList = async ({
	limit,
	from = MIN_DATE,
	to = MAX_DATE,
	EmptyComponent = null,
	children,
}: EventListProps) => {
	const { events, descriptions } = await getEnrichedEvents(limit, from, to);

	if (!Array.isArray(events)) {
		return <Alert severity="error">{events?.message}</Alert>;
	}

	return (
		<>
			{events.length > 0 && (
				<>
					{children}
					<Grid container spacing={2}>
						{events.map((event, id) => (
							<Grid key={id} size={{ xs: 12, sm: 6, md: 4 }}>
								<EventInfoCard event={event} description={descriptions[id]} />
							</Grid>
						))}
					</Grid>
				</>
			)}
			{events.length === 0 && EmptyComponent && <EmptyComponent />}
		</>
	);
};

/**
 * return the min of two dates
 * @param a the first date
 * @param b the next date
 */
const dateMin = (a: Date, b: Date) => (a < b ? a : b);

/**
 * return the max of two dates
 * @param a the first date
 * @param b the next date
 */
const dateMax = (a: Date, b: Date) => (a > b ? a : b);

interface YearedEventListProps {
	/** The date to start showing events from (inclusive), based on end_date */
	from?: Date;
	/** The date to stop showing events at (non-inclusive), based on end_date */
	to?: Date;
}

/**
 * All events with years as headers.
 */
export const YearedEventList = async ({ from = MIN_DATE, to = MAX_DATE }: YearedEventListProps) => {
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
								id={`${year}`}
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
		return year.toString();
	});
};
