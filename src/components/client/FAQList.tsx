import { Box, Typography } from '@mui/material';
import { Faq } from '~/components/client';
import type { FAQItem } from '~/data/faq';

interface FaqListProps {
	/** The frequently asked questions */
	[category: string]: FAQItem[];
}

/**
 * Shows a list of FAQs given a JSON object
 *
 * The JSON object should be structured like this:
 * - keys are the category names
 * - values are arrays of FAQs
 */
export const FaqList = (faq: FaqListProps) => {
	return Object.keys(faq).map(category => {
		return (
			<Box
				sx={{
					mt: 2,
				}}
				key={category}
			>
				<Typography sx={{ marginBottom: 2 }} id={category} component="h3" variant="h6">
					{category}
				</Typography>

				{faq[category].map(q => {
					return <Faq key={q.question} faq={q} />;
				})}
			</Box>
		);
	});
};
