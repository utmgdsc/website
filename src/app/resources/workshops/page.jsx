import { Box, Grid } from '@mui/material';

import { InfoCard, TableOfContents, WorkshopWidget } from '@/components/client';
import { JoinAnd } from '@/components/server';

import workshops from '@/data/workshops.json';

import { ResourceLayout } from '@/layouts/ResourceLayout';

import bannerImage from '@/assets/notgpl/051A6228.jpg';

export const metadata = {
	title: 'Workshop Archive',
};

/**
 * @return {JSX.Element} Workshop page component
 */
const WorkshopArchive = () => {
	return (
		// todo a search bar would be cool
		<ResourceLayout title={metadata.title} picture={bannerImage} id="workshop-archive">
			<Grid container spacing={2}>
				{/* get latest 3 workshops and give them an infocard */}
				{
					Object.keys(workshops).reduce(function (acc, key) {
						return [...acc, ...workshops[key]];
					}, []).sort(function (a, b) {
						return new Date(b.date) - new Date(a.date);
					}).slice(0, 3).map((item, index) => {
						return (
							<Grid item md={4} key={index}>
								<InfoCard
									title={item.name}
									href={item.slides}
									description={item.description}
									lines={2}
								/>
							</Grid>
						);
					})
				}
			</Grid>

			<Grid container spacing={2}>
				<Grid item md={3}>
					<TableOfContents />
				</Grid>
				<Grid item md={9}>
					<h2 className="resources" id="gdsc-workshops">
						GDSC Workshops
					</h2>
					{Object.keys(workshops).map((category, index) => {
						return (
							<Box key={index}>
								<h3 className="resources" id={category.replace(/\s/g, '')}>
									{category}
								</h3>
								{workshops[category]
									.sort(function (a, b) {
										return new Date(b.date) - new Date(a.date);
									})
									.map((item, index) => {
										return <WorkshopWidget key={index} item={item} />;
									})}
							</Box>
						);
					})}
				</Grid>
			</Grid>
		</ResourceLayout>
	);
};

export default WorkshopArchive;
