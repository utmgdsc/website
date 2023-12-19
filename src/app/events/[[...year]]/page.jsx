import { Typography } from '@mui/material';

import { EventList, getYears } from '@/components/server';
import { LinkBasedTabChanger } from '@/components/client';

import { HeroLayout } from '@/layouts/HeroLayout';

import bannerImage from '@/assets/notgpl/IMG_1045.jpg';

export const metadata = {
	title: 'Events',
};

/**
 * @return {JSX.Element} Events page component using EventList
 */
const Events = async ({ params }) => {
	const today = new Date();

	const year = params?.year?.[0] ?? today.getFullYear();
	const years = await getYears();

	return (
		<HeroLayout title={metadata.title} picture={bannerImage} position="bottom" id="events">
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

				<LinkBasedTabChanger tabList={years} page={years.indexOf(Number(year))} prefix="/events/" />

				<EventList from={new Date(`${year}-01-01`)} to={new Date(`${year}-12-31`)} />
			</section>
		</HeroLayout>
	);
};

export default Events;
