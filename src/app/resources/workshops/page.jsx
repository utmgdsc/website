import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { getData, parseWorkshops } from '~/app/api/workshops/route';
import { ErrorBoundary, InfoCard, TableOfContents, WorkshopWidget } from '~/components/client';
import { ResourceLayout } from '~/layouts/ResourceLayout';
import { getProprietaryURL, workshopHash } from '~/components/server';

export const metadata = {
	title: 'Workshop Archive',
};

const LatestWorkshops = async ({ workshops, limit }) => (
	<Grid container spacing={2} sx={{ mb: 4 }}>
		{/* get latest 3 workshops and give them an infocard */}
		{Object.keys(workshops)
			.reduce((acc, key) => {
				return [...acc, ...workshops[key]];
			}, [])
			.sort((a, b) => {
				return new Date(b.date) - new Date(a.date);
			})
			.slice(0, limit)
			.map((item, index) => {
				return (
					<Grid size={{ md: 4 }} key={index}>
						<InfoCard
							title={item.name}
							href={`#${workshopHash(item.name, item.date)}`}
							description={item.description}
							lines={2}
							external={false}
						/>
					</Grid>
				);
			})}
	</Grid>
);

const WorkshopList = async ({ workshops }) => {
	// todo a search bar would be cool

	return (
		<Grid container spacing={2}>
			<Grid size={{ md: 3 }}>
				<TableOfContents />
			</Grid>
			<Grid size={{ md: 9 }}>
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
								.sort((a, b) => {
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
	);
};

const WorkshopArchiveInfo = async () => {
	const workshops = parseWorkshops(await getData());

	return (
		<>
			<LatestWorkshops workshops={workshops} limit={3} />
			<WorkshopList workshops={workshops} />
		</>
	);
};

/**
 * @return {JSX.Element} Workshop page component
 */
const WorkshopArchive = async () => (
	<ResourceLayout
		title={metadata.title}
		position="bottom"
		picture={getProprietaryURL('heroes/wit-workshop.jpg')}
		imgProps={{
			width: 4608,
			height: 3072,
		}}
		id="workshop-archive"
	>
		<ErrorBoundary>
			<WorkshopArchiveInfo />
		</ErrorBoundary>
	</ResourceLayout>
);

export default WorkshopArchive;
