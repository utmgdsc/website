import { Alert, Typography } from '@mui/material';

import BannerImg from '../../assets/website_proprietary/heroes/IMG_1045.png';
import { ErrorBoundary, EventList, Link } from '../../components';

import { HeroLayout } from '../../layouts/HeroLayout';

export const metadata = {
	title: 'Events',
}

/**
 * @return {JSX.Element} Events page component using EventList
 */
const Events = () => {
	return (
		<HeroLayout title={metadata.title} picture={BannerImg} position="bottom" id="events">
			<noscript>
				<Alert severity="warning">
					You need JavaScript to view events. You may view previous events at the <Link external href="https://gdsc.community.dev/university-of-toronto-mississauga/">
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
				<ErrorBoundary>
					<EventList from={new Date()} />
				</ErrorBoundary>
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
				<ErrorBoundary>
					<EventList to={new Date()} skeleton={9} />
				</ErrorBoundary>
			</section>
		</HeroLayout>
	);
};

export default Events;
