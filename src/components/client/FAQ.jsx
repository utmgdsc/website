import { ExpandMore } from '@mui/icons-material';
import { AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { Accordion } from '~/components/client';

/**
 * A single FAQ item.
 * @typedef {object} FAQItem
 * @property {string} question The question
 * @property {string} answer The answer
 */

/**
 * A frequently asked question. Used in the Resources page.
 *
 * @param {object} props
 * @param {FAQItem} props.faq The frequently asked question
 *
 * @returns {JSX.Element} The faq widget
 */
export const FAQ = ({ faq }) => {
	return (
		<Accordion>
			<AccordionSummary
				expandIcon={<ExpandMore />}
				aria-controls="panel1a-content"
				id="panel1a-header"
				component="summary"
			>
				<Typography>Q: {faq.question}</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>A: {faq.answer}</Typography>
			</AccordionDetails>
		</Accordion>
	);
};
