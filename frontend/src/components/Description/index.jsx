import { useState, useEffect } from 'react';

import { Skeleton } from '@mui/material';

/**
 * Gets the description given an event ID from the GDSC (bevy) API
 * @param {string} id id of the event
 * @returns {string} description of the event as a raw string
 */
const Description = ({ id }) => {
  const [description, setDescription] = useState("");

  const getDescription = async () => {
    await fetch( process.env.REACT_APP_EVENT_API_URL + id)
      .then(response => response.json())
      .then(data => {
        setDescription(data["description_short"]);
      })
      .catch(error => {
        console.error(error);
      })
  }

  // empty array means only run once to avoid ratelimit
  useEffect(() => {
    getDescription();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return description ? description : <Skeleton variant="text" sx={{ fontSize: '5rem' }} />;
}

export default Description;
