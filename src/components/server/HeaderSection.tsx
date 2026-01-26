import { Box, Grid, GridProps, Typography } from '@mui/material';
import React from 'react';

interface HeaderSectionProps extends GridProps {
	/** The header to display */
	header: React.ReactNode;
	/** The children to display */
	children: React.ReactNode;
}

/**
 * A section with a header that goes side by side with the children,
 * until the screen is too small, then it stacks.
 */
export const HeaderSection = ({ header, children, ...props }: HeaderSectionProps) => {
	return (
		<Grid container spacing={2} component="section" {...props}>
			<Grid size={{ xs: 12, md: 4 }}>{header}</Grid>
			<Grid size={{ xs: 12, md: 8 }}>{children}</Grid>
		</Grid>
	);
};

interface HomepageSectionProps {
	/** The title of the section */
	title?: string;
	/** The title to display after the main title */
	titleAfter?: React.ReactNode;
	/** The children to display */
	children: React.ReactNode;
}

/**
 * A section for the homepage. Takes a title and children.
 */
export const HomepageSection = ({ title, titleAfter, children }: HomepageSectionProps) => (
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
						id={title.toLowerCase().replaceAll(' ', '-')}
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
