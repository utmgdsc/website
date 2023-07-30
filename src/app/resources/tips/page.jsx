'use client';
import { Typography } from '@mui/material';

import { ResourceLayout } from '../../../layouts/ResourcesSubPageLayout';

// export const metadata = {
//  title: 'Tech Tips',
// }

/**
 * @returns {JSX.Element} The tech tips widget
 */
const TechTips = () => {
	return (
		<ResourceLayout title="Tech Tips" id="tech-tips">
			<Typography variant="h2" component="h2" gutterBottom>
				Coming Soon!
			</Typography>
		</ResourceLayout>
	);
};

export default TechTips;
