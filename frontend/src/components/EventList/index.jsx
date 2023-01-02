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
const EventList = ({ limit, upcoming }) => {
	const [events, setEvents] = useState([]);

	/**
	 * load external json file from api
	 * @returns {object} bevy chapter object
	 */
	const getEvents = async () => {
		const abortController = new AbortController()

		await fetch(process.env.REACT_APP_CHAPTER_API_URL, {
			signal: abortController.signal
		})
			.then(response => response.json())
			.then(data => {
				if (data["detail"] && data["detail"].includes("throttled")) {
					throw new Error(data["detail"]);
				}
				let eventData = data["results"];
				if (limit) {
					eventData = eventData.slice(0, limit);
				}
				if (upcoming) {
					eventData = eventData.filter(event => new Date(event.end_date) > new Date());
				}
				setEvents(eventData);
			}).catch(error => {
				if (error.name === 'AbortError') return;
				// if the query has been aborted, do nothing
				throw error;
			});
		return () => {
			abortController.abort();
		}
	}

	// empty array means only run once to avoid ratelimit
	useEffect(() => {
		getEvents();
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
				<CustomCard data={event} key={event.id} />
			))}
		</Grid>
	);
}

export default EventList;
