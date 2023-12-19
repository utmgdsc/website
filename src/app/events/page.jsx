import { EventList, Link } from "@/components/server";
import { Alert, Typography } from '@mui/material';

import { HeroLayout } from '@/layouts/HeroLayout';

import bannerImage from '@/assets/notgpl/IMG_1045.jpg';

export const metadata = {
	title: 'Events',
};

/**
 * @return {JSX.Element} Events page component using EventList
 */
const Events = async () => {
	const today = new Date();

	return (
		<HeroLayout title={metadata.title} picture={bannerImage} position="bottom" id="events">
			<noscript>
				<Alert severity="warning">
					You need JavaScript to view events. You may view previous events at the{' '}
					<Link external href="https://gdsc.community.dev/university-of-toronto-mississauga/">
						GDSC UTM Community page
					</Link>
				</Alert>
			</noscript>

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

				<EventList to={today} />
			</section>
		</HeroLayout>
	);
};

export default Events;
