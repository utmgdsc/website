import { Grid, Typography } from '@mui/material';
import { InfoCard, TabChanger } from '@/components/client';
import { projects } from '@/data/projects.js';
import { useEffect, useState } from 'react';

/**
 * A list of all the community projects filtered by year with tabs
 */
export const ProjectList = () => {
	/** @type {number} current tab */
	const [page, setPage] = useState(0);
	/** @type {number[]} list of unique years that projects exist*/
	const [yearList, setYearList] = useState([]);
	/** @type {{title: string; url: string; description: string;}[]} list of all projects */
	const [projectList, setProjectList] = useState([]);

	// set yearList
	useEffect(() => {
		const years = projects.reduce((acc, project) => {
			if (!acc.includes(project.year)) {
				acc.push(project.year);
			}
			return acc;
		}, []);

		setYearList(years.sort((a, b) => b - a));
	}, []);

	// set projectList
	useEffect(() => {
		setProjectList(projects);
	}, []);

	return (
		// todo, make these tabs change the url
		<>
			<TabChanger tabList={yearList} page={page} setPage={setPage} />
			<Grid container spacing={2}>
				{projectList.filter(project => project.year === yearList[page]).length <= 0 && (
					<Grid item xs={12}>
						<Typography variant="h5" component="p">
							None yet! Check back soon :)
						</Typography>
					</Grid>
				)}
				{projectList
					.filter(project => project.year === yearList[page])
					.map((project, id) => (
						<Grid key={id} item xs={12} sm={6} md={4}>
							<InfoCard
								subtitle={`${project.session} ${project.year}`}
								title={project.title}
								description={project.description}
								href={project.url}
							/>
						</Grid>
					))}
			</Grid>
		</>
	);
};
