import { Box, Grid2 as Grid, Typography } from '@mui/material';
import React from 'react';

/**
 * A section with a header that goes side by side with the children,
 * until the screen is too small, then it stacks.
 */
export const HeaderSection = ({ header, children, ...props }) => {
	return (
		<Grid container spacing={2} component="section" {...props}>
			<Grid size={{ xs: 12, md: 4 }}>{header}</Grid>
			<Grid size={{ xs: 12, md: 8 }}>{children}</Grid>
		</Grid>
	);
};

/**
 * A section for the homepage. Takes a title and children.
 *
 * @param {Object} props - props to pass to the component
 * @param {string} props.title - title of the section
 * @param {React.ReactNode} props.titleAfter - JSX element to render after the title
 * @param {React.ReactNode} props.children - children of the component
 */
export const HomepageSection = ({ title, titleAfter, children }) => (
	<HeaderSection
		sx={{
			margin: '0 auto',
			py: 8,
			px: {
				xs: 2,
				md: 8,
			},
		}}
		maxWidth="xl"
		header={
			<Box
				sx={{
					pb: 4,
					position: 'sticky',
					top: '5rem',
				}}
			>
				{title && (
					<Typography
						component="h2"
						variant="h2"
						sx={{
							fontWeight: 'bold',
							mr: 1,
						}}
						id={title.toLowerCase().replace(/ /g, '-')}
					>
						{title}
					</Typography>
				)}
				{titleAfter}
			</Box>
		}
	>
		{children}
	</HeaderSection>
);
