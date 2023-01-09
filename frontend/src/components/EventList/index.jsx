import { useState, useEffect } from "react";
import {
	Grid,
	Typography,
} from "@mui/material";
import DataCard from "../DataCard";
import { EventUpcomingStates } from "../../constants";

/**
 * Gets the events from the GDSC (bevy) API.
 * If limit is specified, it will only show that many events.
 * If upcoming is specified, it will only show upcoming events. Otherwise, it will show all events.
 * @param {integer} limit the number of events to show
 * @param {integer} upcoming: filter events: use the UpcomingStates enum to specify. default shows all
 * @returns {JSX.Element} EventList component
 */
const EventList = ({ limit, upcoming = EventUpcomingStates.ALL }) => {
	const [events, setEvents] = useState([]);

	// needed to show error message as getEvents does not throw error
	const [error, setError] = useState(false);

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
				if (data["detail"] && (data["detail"].includes("throttled") || data["detail"].includes("error"))) {
					throw new Error(data["detail"]);
				}
				// filter only published events
				let eventData = data["results"].filter(event => event["status"] === "Published");

				// slice to limit if specified
				if (limit) {
					eventData = eventData.slice(0, limit);
				}

				// filter only upcoming events if specified
				if (upcoming === EventUpcomingStates.UPCOMING) {
					// upcoming events
					eventData = eventData.filter(event => new Date(event.end_date) >= new Date());
				} else if (upcoming === EventUpcomingStates.PAST) {
					// past events
					eventData = eventData.filter(event => new Date(event.end_date) < new Date());
				}
				// finally set events to eventData
				setEvents(eventData);
			}).catch(error => {
				// if the query has been aborted, do nothing
				if (error.name === "AbortError") return;
				setError(error);
			});
		return () => {
			abortController.abort();
		}
	}

	// empty array means only run once to avoid rate limit
	useEffect(() => {
		getEvents();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// if error, throw an error so that any prospective ErrorBoundary can catch it
	if (error) {
		throw error;
	}

	// if no events, show message rather than empty page
	// TODO: get Estelle to draw a cute image
	else if (events.length === 0) {
		return (
			<Grid item xs={12}>
				<Typography variant="h5" component="p" gutterBottom>
					None yet! Check back soon :)
				</Typography>
			</Grid>
		);
	}

	return (
		<Grid container spacing={2}>
			{events.map((event) => (
				<DataCard data={event} key={event.id} />
			))}
		</Grid>
	);
}

export default EventList;
