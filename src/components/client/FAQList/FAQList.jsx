import { Box, Typography } from '@mui/material';
import { FAQ } from '@/components/client';

/**
 * Shows a list of FAQs given a JSON object
 *
 * The JSON object should be structured like this:
 * - keys are the category names
 * - values are arrays of FAQs
 *
 * @param {Object} faq The JSON object containing the FAQs
 */
export const FAQList = ({faq}) => {
    return (
        Object.keys(faq).map((category, index) => {
            return (
                <Box
                    sx={{
                        mt: 2,
                    }}
                    key={index}
                >
                    <Typography sx={{ marginBottom: 2 }} id={category}>
                        {category}
                    </Typography>

                    {faq[category].map((faq, index) => {
                        return <FAQ key={index} faq={faq} />;
                    })}
                </Box>
            );
        })
    )
}
