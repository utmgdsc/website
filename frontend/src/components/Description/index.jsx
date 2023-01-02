import { useState, useEffect } from 'react';

import { Skeleton } from '@mui/material';

/**
 * Gets the description given an event ID from the GDSC (bevy) API
 * @param {string} id id of the event
 * @returns {string} description of the event as a raw string
 */
const Description = ({ id }) => {
	const [description, setDescription] = useState("");

	/**
     * load external json file from api
     * @returns {object} bevy event object
     */
	const getDescription = async () => {
		const abortController = new AbortController()

		await fetch(process.env.REACT_APP_EVENT_API_URL + id, {
			signal: abortController.signal
		})
			.then(response => response.json())
			.then(data => {
				setDescription(data["description_short"]);
			})
			.catch(error => {
				if (error.name === 'AbortError') return;
				// if the query has been aborted, do nothing
				throw error;
			})

		return () => {
			abortController.abort();
		}
	}

	// empty array means only run once to avoid ratelimit
	useEffect(() => {
		getDescription();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return description ? description : <Skeleton variant="text" sx={{ fontSize: '5rem' }} />;
}

export default Description;
