import { ExpandMore } from '@mui/icons-material';
import { AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { Accordion } from '~/components/client';

/**
 * A single FAQ item.
 */
export interface FAQItem {
	/** The question */
	question: string;
	/** The answer */
	answer: string;
}

interface FAQProps {
	/** The frequently asked question */
	faq: FAQItem;
}

/**
 * A single frequently asked question. Used in the Resources page.
 * @returns The faq widget
 */
export const FAQ = ({ faq }: FAQProps) => {
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
