import { Box, Grid } from '@mui/material';

import { InfoCard, TableOfContents, WorkshopWidget } from '@/components/client';
import { workshopHash } from '@/components/server';

import { ResourceLayout } from '@/layouts/ResourceLayout';

import bannerImage from '@/assets/notgpl/051A6228.jpg';

const yaml = require('js-yaml');

export const metadata = {
	title: 'Workshop Archive',
};

/**
 * Get data from the workshops repo, and parse it into a JSON object
 */
async function getData() {
	return fetch(`https://${process.env.WORKSHOPS_HOSTNAME}/all.yml`)
		.then((response) => {
			if (!response.ok) {
				throw new Error(response.statusText);
			}

			return response.text();
		})
		.then((text) => {
			const json = yaml.load(text);

			return json;
		})
		.catch((error) => {
			throw new Error(error);
		});
}

/**
 * parse workshop data into a nested list of headings
 *
 * @param {Object} workshops workshop data
 */
const parseWorkshops = (workshops) => {
	// Iterate through each year
	return Object.entries(workshops).reduce((parsedData, [year, categories]) => {
		// Iterate through each category
		Object.entries(categories).forEach(([category, workshopsList]) => {
			// Get the category name
			const categoryName = Object.keys(workshopsList)[0];
			// Initialise category array
			parsedData[categoryName] = parsedData[categoryName] || [];

			// Iterate through each workshop
			workshopsList[categoryName].forEach((workshop) => {
				// Update the date string
				const newDate = `${year}-${workshop.date}`;

				// Add the workshop data to the category array
				parsedData[categoryName].push({ ...workshop, date: newDate });
			});
		});

		// Return the parsed data
		return parsedData;
	}, {});
}

/**
 * @return {JSX.Element} Workshop page component
 */
const WorkshopArchive = async () => {
	const workshops = parseWorkshops(await getData());

	return (
		// todo a search bar would be cool
		<ResourceLayout title={metadata.title} position="bottom" picture={bannerImage} id="workshop-archive">
			<Grid container spacing={2} sx={{ mb: 4 }}>
				{/* get latest 3 workshops and give them an infocard */}
				{Object.keys(workshops)
					.reduce(function (acc, key) {
						return [...acc, ...workshops[key]];
					}, [])
					.sort(function (a, b) {
						return new Date(b.date) - new Date(a.date);
					})
					.slice(0, 3)
					.map((item, index) => {
						return (
							<Grid item md={4} key={index}>
								<InfoCard
									title={item.name}
									href={`?workshop=${workshopHash(item.name, item.date)}#${workshopHash(
										item.name,
										item.date
									)}`}
									description={item.description}
									lines={2}
									external={false}
								/>
							</Grid>
						);
					})}
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
