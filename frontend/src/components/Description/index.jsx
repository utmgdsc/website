import { useState, useEffect } from "react";
import { Skeleton } from "@mui/material";
import { useLocalStorage, getDescriptionFromStorage } from "./useLocalStorage";

/**
 * Gets the description given an event ID from the GDSC (bevy) API.
 * @param {string} id id of the event
 * @returns {string} description of the event as a raw string
 */
const Description = ({ id }) => {
	const [error, setError] = useState(false);
	const [description, setDescription] = useLocalStorage(id);

	/**
	 * load external json file from api
	 * @returns {object} bevy event object
	 */
	const getDescription = async () => {
		// check if the event is in local storage
		if (!getDescriptionFromStorage(id)) {
			// if not, fetch from api
			const abortController = new AbortController()

			await fetch(process.env.REACT_APP_EVENT_API_URL + id, {
				signal: abortController.signal
			})
				.then(response => response.json())
				.then(data => {
					setDescription(data["description_short"]);
				})
				.catch(error => {
					if (error.name === "AbortError") return;
					// if the query has been aborted, do nothing
					setError(error)
				})

			return () => {
				abortController.abort();
			}
		}
	}

	// empty array means only run once to avoid ratelimit
	useEffect(() => {
		try {
			getDescription();
		} catch (error) {
			setError(error);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (error) {
		throw error;
	} else {
		return description ? description : <Skeleton variant="text" sx={{ fontSize: "5rem" }} />;
	}
}

export default Description;
