import { Grid, Typography, Tab, Tabs } from '@mui/material';
import { InfoCard } from '@/components';
import { projects } from '../../data/projects.js';
import { useEffect, useState } from 'react';

/**
 * Returns the term given a date object
 * @param {Date} date to convert
 * @returns {string} the term as a string
 */
const getTerm = date => {
	const month = date.getMonth();
	if (month < 4) {
		return 'Winter';
	} else if (month < 8) {
		return 'Summer';
	} else if (month < 12) {
		return 'Fall';
	}
	return ''; // should never happen but you never know ;)
};

export const ProjectList = () => {
	/** @type {number} current tab */
	const [page, setPage] = useState(0);
	/** @type {number[]} list of unique years that projects exist*/
	const [yearList, setYearList] = useState([]);
	/** @type {{title: string; url: string; description: string;}[]} list of all projects */
	const [projectList, setProjectList] = useState([]);

	// fetch data from API and cache in localstorage
	const getProjectInfo = async () => {
		/* if the localstorage cache doesn't already exist,
		   or the github API was called over an hour ago, fetch the data from API */

		// 3600000 === 1 hour
		const invalidCache =
			!localStorage.getItem('projects') || localStorage.getItem('time_stamp') - new Date() > 3600000;
		if (invalidCache) {
			localStorage.removeItem('projects');
			localStorage.removeItem('time_stamp');
			localStorage.setItem('time_stamp', new Date());
		}

		if (invalidCache) {
			/** @type {{[key: string]: string}} accumulator */
			var projectResults = {};
			for (const project of projects) {
				/* there is a date property to projects.js, if there is no
				   hardcoded date, the last commit date will be fetched from the
				   GitHub API */
				if (!project.date && project.url.startsWith('https://github.com/')) {
					// 19 === len("https://github.com/")
					await fetch('https://api.github.com/repos/' + project.url.slice(19) + '/commits')
						.then(response => response.json())
						.then(response => (projectResults[project.title] = response[0].commit.committer.date));
				}
			}

			// store API data in a dictionary in localstorage
			localStorage.setItem('projects', JSON.stringify(projectResults));
		}

		var fetchedProjects = JSON.parse(localStorage.getItem('projects'));

		// join results from api with hardcoded projects list
		if (fetchedProjects) {
			setProjectList(
				projects
					.map(project => ({
						title: project.title,
						url: project.url,
						description: project.description,
						date: project.date ? new Date(project.date) : new Date(fetchedProjects[project.title]),
					}))
					.sort((e1, e2) => {
						return e2.date - e1.date;
					})
			);

			// get all unique years in projects list
			setYearList(
				projects
					.map(project => new Date(fetchedProjects[project.title]).getFullYear())
					.filter((value, index, self) => self.indexOf(value) === index)
					.sort((e1, e2) => {
						return e2 - e1;
					})
			);
		}
	};

	useEffect(() => {
		(async () => {
			getProjectInfo();
		})();
	}, []);

	return (
		// todo, make these tabs change the url
		<>
			<Tabs
				value={page}
				onChange={(_, index) => {
					setPage(index);
				}}
				sx={{
					marginBottom: '1rem',
				}}
			>
				{yearList.map(year => (
					<Tab key={year} label={year} />
				))}
			</Tabs>
			<Grid container spacing={2}>
				{projectList.filter(project => new Date(project.date).getFullYear() === yearList[page]).length <= 0 && (
					<Grid item xs={12}>
						<Typography variant="h5" component="p">
							None yet! Check back soon :)
						</Typography>
					</Grid>
				)}
				{projectList
					.filter(project => new Date(project.date).getFullYear() === yearList[page])
					.map((project, id) => (
						<Grid key={id} item xs={12} sm={6} md={4}>
							<InfoCard
								subtitle={`${getTerm(project.date)} ${project.date.getFullYear()}`}
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
