import { Alert, Typography } from '@mui/material';

import { EventList, Link, getYears } from '@/components/server';

import { HeroLayout } from '@/layouts/HeroLayout';

import bannerImage from '@/assets/notgpl/IMG_1045.jpg';
import { Tabs, Tab } from '@mui/material';

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

				<Tabs
					value={years.indexOf(Number(year))}
					sx={{ mb: '1rem' }}
				>
					{years.map((year, id) => (
						<Tab
							key={id}
							label={year}
							component="a"
							href={`/events/${year}`}
						/>
					))}
				</Tabs>

				<EventList from={new Date(`${year}-01-01`)} to={new Date(`${year}-12-31`)} />
			</section>
		</HeroLayout>
	);
};

export default Events;
