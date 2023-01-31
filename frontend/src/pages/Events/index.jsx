import { useEffect } from 'react';

import {
	Typography,
} from '@mui/material';

import BannerImg from '../../assets/website_proprietary/heroes/IMG_1045.png';
import {
	ErrorBoundary,
	EventList,
} from '../../components';

import { HeroLayout } from '../../layouts/HeroLayout';

/**
 * @return {JSX.Element} Events page component using EventList
 */
const Events = () => {
	useEffect(() => {
		document.title = "GDSC UTM - Events";
	}, []);
	return (
		<HeroLayout title="Events" picture={BannerImg} position="bottom" id="events">
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
					<EventList to={new Date()} />
				</ErrorBoundary>
			</section>
		</HeroLayout>
	);
}

export default Events;
