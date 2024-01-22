import { EventList, YearedEventList } from "@/components/server";
import { Typography } from '@mui/material';
import { HeroLayout } from '@/layouts/HeroLayout';

import bannerImage from '@/assets/notgpl/IMG_1045.jpg';

export const metadata = {
	title: 'Events',
};

/**
 * @return {JSX.Element} Events page component using EventList
 */
const Events = () => {
	const today = new Date();

	return (
		<HeroLayout title={"Events"} picture={bannerImage} position="bottom" id="events">
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

				<YearedEventList to={today} />
			</section>
		</HeroLayout>
	);
};

export default Events;
