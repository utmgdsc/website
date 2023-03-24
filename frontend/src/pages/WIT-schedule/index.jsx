import { useEffect } from 'react';

import { Typography } from '@mui/material';

import WitBackground from '../../assets/graphics/wit-background.png';
import WitDay1 from '../../assets/graphics/wit_day1.png';
import WitDay2 from '../../assets/graphics/wit_day2.png';

import { ErrorBoundary, FAQ } from '../../components';

import { HeroLayout } from '../../layouts/HeroLayout';

import faq from '../../data/wit-faq.json';

/**
 * @return {JSX.Element} Events page component using EventList
 */
const WitSchedule = () => {
    useEffect(() => {
        document.title = 'GDSC UTM - Events';
    }, []);
    return (
        <HeroLayout
            title="GDSC x Microsoft Women in Tech Conference"
            picture={WitBackground}
            position="bottom"
            id="events"
        >
            <section>
                <Typography
                    color="text.primary"
                    component="h2"
                    fontWeight="bold"
                    lineHeight="2.5em"
                    variant="h4"
                    id="wit-schedule"
                >
                    Schedule
                </Typography>
                <ErrorBoundary>
                    <img src={WitDay1} alt="Day 1 schedule" />
                </ErrorBoundary>
                <ErrorBoundary>
                    <img src={WitDay2} alt="Day 2 schedule" />
                </ErrorBoundary>
            </section>
            <section>
                <Typography
                    color="text.primary"
                    component="h2"
                    fontWeight="bold"
                    lineHeight="2.5em"
                    variant="h4"
                    id="wit-schedule"
                >
                    FAQ
                </Typography>
                <ErrorBoundary>
                    {faq.map((faq, index) => {
                        return <FAQ key={index} faq={faq} />;
                    })}
                </ErrorBoundary>
            </section>
        </HeroLayout>
    );
};

export default WitSchedule;
