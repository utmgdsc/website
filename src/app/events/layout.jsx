import bannerImage from '@/assets/notgpl/IMG_1045.jpg';
import { MyTabs } from '@/components/client';
import { EventList, getYearTabs } from '@/components/server';
import { HeroLayout } from '@/layouts/HeroLayout';
import { Tabs, Typography } from '@mui/material';

export const metadata = {
    title: 'Events',
};

// TODO add skip to content button
export default async function Layout({ children, params }) {
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

                <MyTabs
                    values={years}
                    sx={{ marginBottom: '1rem' }}
                    variant="scrollable"
                    scrollButtons="auto"
                    urlPrepend="/events"
                />
                {children}
            </section>
        </HeroLayout>
    );
}
