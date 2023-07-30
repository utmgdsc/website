import React from 'react';

import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';

/**
 * A frequently asked question. Used in the Resources page.
 * @returns {JSX.Element} The faq widget
 */
export const FAQ = ({ faq }) => {
	return (
		<Accordion>
			<AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
				<Typography>Q: {faq.question}</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>A: {faq.answer}</Typography>
			</AccordionDetails>
		</Accordion>
	);
};
