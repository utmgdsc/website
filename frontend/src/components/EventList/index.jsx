import { useState, useEffect } from 'react';
import {
    Grid,
    Typography,
} from '@mui/material';
import CustomCard from '../CustomCard';

/**
 * Gets the events from the GDSC (bevy) API
 * @param {limit} limit the number of events to show
 * @param {upcoming} upcoming whether to show upcoming events or not
 * @returns {object} event object
 */
const EventList = ({limit, upcoming}) => {
    const [events, setEvents] = useState([]);

    // load external json file from api
    const getEvents = async () => {
        let response = await fetch(process.env.REACT_APP_CHAPTER_API_URL)
            .then(response => response.json())
            .then(data => {
                if (limit === undefined) {
                    return data["results"];
                } else {
                    return data["results"].slice(0, limit);
                }
            }).then(data => {
                if (upcoming === true) {
                    return data.filter(event => new Date(event.end_date) > new Date());
                } else {
                    return data;
                }
            });
        setEvents(response);
    }

    // empty array means only run once to avoid ratelimit
    useEffect(() => {
        getEvents();
        console.log(events);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // if no events, show message rather than empty page
    // TODO: get Estelle to draw a cute image
    if (events.length === 0) {
        return (
            <Grid item xs={12}>
                <Typography variant="h5" component="h2">
                    None yet! Check back soon :)
                </Typography>
            </Grid>
        );
    }

    return (
        <Grid container spacing={2}>
            {events.map((event) => (
                <CustomCard data={ event } key={ event.id } />
            ))}
        </Grid>
    );
}

export default EventList;
