import { ErrorBoundary, PathnameTabs } from '~/components/client';
import { EventList, getProprietaryURL, getYearTabs } from '~/components/server';
import { HeroLayout } from '~/layouts/HeroLayout';
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

	/** all years gdsc has had events */
	const years = await getYearTabs();

	return (
		<HeroLayout
			title={'Events'}
			picture={getProprietaryURL('heroes/pizza-workshop.jpg')}
			position="bottom"
			id="events"
			headerProps={{
				imgProps: {
					width: 4032,
					height: 3024,
				},
			}}
		>
			<section>
				<Typography component="h2" variant="h4" id="upcoming-events">
					Upcoming Events
				</Typography>

				<ErrorBoundary>
					<EventList
						from={today}
						EmptyComponent={() => (
							<Typography variant="h5" component="p" gutterBottom>
								None yet! Check back soon or follow us on social media to stay updated! 🤗
							</Typography>
						)}
					/>
				</ErrorBoundary>
			</section>
			<section>
				<Typography component="h2" variant="h4" id="past-events">
					Past Events
				</Typography>

				<ErrorBoundary>
					<PathnameTabs
						values={years}
						sx={{ marginBottom: '1rem' }}
						slice={2}
						variant="scrollable"
						scrollButtons="auto"
						defaultValue={years[0]}
						urlPrepend="/events"
					/>
				</ErrorBoundary>
				{children}
			</section>
		</HeroLayout>
	);
}
