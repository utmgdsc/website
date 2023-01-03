import { useState, useEffect } from "react";
import {
	Grid,
	Typography,
} from "@mui/material";
import CustomCard from "../CustomCard";

/**
 * Gets the events from the GDSC (bevy) API.
 * If limit is specified, it will only show that many events.
 * If upcoming is specified, it will only show upcoming events. Otherwise, it will show all events.
 * @param {limit} limit the number of events to show
 * @param {upcoming} upcoming whether to show upcoming events or not
 * @returns {object} event object
 */
const EventList = ({ limit, upcoming }) => {
	const [events, setEvents] = useState([]);
	const [error, setError] = useState(false);

	// i keep getting rate limited for 16+ hours so i disabled this component for development
	// not needed for Description - halting here stops calls to description too
	if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
		throw new Error("Disabled EventList component for development to prevent rate limit");
	}

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
				let eventData = data["results"];
				if (limit) {
					eventData = eventData.slice(0, limit);
				}
				if (upcoming) {
					eventData = eventData.filter(event => new Date(event.end_date) > new Date());
				}
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

	// if error, show error message
	if (error) {
		throw error;
	}

	// if no events, show message rather than empty page
	// TODO: get Estelle to draw a cute image
	else if (events.length === 0) {
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
