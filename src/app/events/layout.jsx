import bannerImage from '@/assets/notgpl/IMG_1045.jpg';
import { PathnameTabs } from '@/components/client';
import { EventList, getYearTabs } from '@/components/server';
import { HeroLayout } from '@/layouts/HeroLayout';
import { Typography } from '@mui/material';

export const metadata = {
	title: 'Events',
};

/**
 * This is a layout so that the current tab state is shared which makes it
 * smoother
 */
export default async function EventsLayout({ children }) {
	/** the current date */
	const today = new Date();

	/** all of the years gdsc has had events */
	const years = await getYearTabs();

	return (
		<HeroLayout title={'Events'} picture={bannerImage} position="bottom" id="events">
			<section>
				<Typography
					component="h2"
					variant="h4"
					id="upcoming-events"
					sx={{
						color: 'text.primary',
						fontWeight: 'bold',
						lineHeight: '2.5em',
					}}
				>
					Upcoming Events
				</Typography>

				<EventList
					from={today}
					EmptyComponent={() => (
						<Typography variant="h5" component="p" gutterBottom>
							None yet! Check back soon or follow us on social media to stay updated! 🤗
						</Typography>
					)}
				/>
			</section>
			<section>
				<Typography
					component="h2"
					variant="h4"
					id="past-events"
					sx={{
						color: 'text.primary',
						fontWeight: 'bold',
						lineHeight: '2.5em',
					}}
				>
					Past Events
				</Typography>

				<PathnameTabs
					values={years.map(year => year.toString())}
					sx={{ marginBottom: '1rem' }}
					slice={2}
					variant="scrollable"
					scrollButtons="auto"
					defaultValue={today.getFullYear().toString()}
					urlPrepend="/events"
				/>
				{children}
			</section>
		</HeroLayout>
	);
}
