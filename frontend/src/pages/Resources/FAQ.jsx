import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from "@mui/material";

import {
	ExpandMore,
} from "@mui/icons-material";

/**
 * @returns {JSX.Element} The faq widget
 */
const FAQWidget = ({ item }) => {
	return (
		<Accordion>
			<AccordionSummary
				expandIcon={<ExpandMore />}
				aria-controls="panel1a-content"
				id="panel1a-header"
			>
				<Typography>Q: {item.question}</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>
					A: {item.answer}
				</Typography>
			</AccordionDetails>
		</Accordion>
	);
}

export default FAQWidget;
