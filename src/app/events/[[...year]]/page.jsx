import bannerImage from '@/assets/notgpl/IMG_1045.jpg';
import { MyTab } from '@/components/client';
import { EventList, YearedEventList, getYearTabs } from '@/components/server';
import { HeroLayout } from '@/layouts/HeroLayout';
import { Tabs, Typography } from '@mui/material';

export const metadata = {
	title: 'Events',
};

/**
 * @property {string} year - The year to display events for
 *
 * @return {JSX.Element} Events page component using EventList
 */
const Events = async ({ params }) => {
	/** the current date */
	const today = new Date();

	/** the year to display events for */
	const year = params.year ? Number(params.year[0]) : today.getFullYear();

	/** all of the years gdsc has had events */
	const years = await getYearTabs();

	return (
		<HeroLayout title={'Events'} picture={bannerImage} position="bottom" id="events">
			<section>
				<Typography
					color="text.primary"
					component="h2"
					fontWeight="bold"
					lineHeight="2.5em"
					variant="h4"
					id="upcoming-events"
				>
					Upcoming Events
				</Typography>

				<EventList from={today} />
			</section>
			<section>
				<Typography
					color="text.primary"
					component="h2"
					fontWeight="bold"
					lineHeight="2.5em"
					variant="h4"
					id="past-events"
				>
					Past Events
				</Typography>

				<Tabs value={year} sx={{ marginBottom: '1rem' }} variant="scrollable" scrollButtons="auto">
					{years.map(year => {
						return <MyTab key={year} href={`/events/${year}`} value={year} label={year} scroll={false} />;
					})}
				</Tabs>

				<YearedEventList from={new Date(year, 0, 1)} to={new Date(year, 11, 31)} />
			</section>
		</HeroLayout>
	);
};

export default Events;
