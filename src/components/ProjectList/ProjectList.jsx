import {
	Grid,
	Typography,
	Tab,
	Tabs
} from '@mui/material';

import {
	InfoCard,
} from '@/components';
import { projects } from '../../data/projects.js';
import BannerImg from '../../assets/website_proprietary/heroes/IMG_4712.jpg';
import { useEffect, useState, Fragment } from 'react';


export const ProjectList = () => {
	const [page, setPage] = useState(0)
	const [yearList, setYearList] = useState()
	const [projectList, setProjectList] = useState()

	// Represents a list of filtered projects based on the current MUI tab selected
	const filteredProjects = (
		projectList ? projectList.filter(project => {
			if (yearList) {
				return (
					project.date.getFullYear() == yearList[page]
				);
			}
			return true;
		}) : []
	)
	
	// fetch data from API and cache in localstorage
	const getProjectInfo = async () => {
		// if the localstorage cache doesn't already exist, or the github API was called over an hour ago, fetch the data from API
		// because time is measured in milliseconds, I divide the difference in time from last call time and current time by 3600000 to convert to hours

		// Added date property to projects.js, if there is no github link, a hardcoded date will be used instead
		if ((!localStorage.getItem('time_stamp')) || (((localStorage.getItem('time_stamp') - new Date()) / 3600000) > 1)) {
			localStorage.setItem('time_stamp', new Date())
			var projectResults = {}
			for (const project of projects) {
				if (!project.date) {
					await fetch('https://api.github.com/repos/' + project.url.slice(19) + '/commits')
					.then(response => response.json())
					.then(response => projectResults[project.title] = response[0].commit.committer.date)
				}
				
			}

			// store API data in a dictionary in localstorage
			localStorage.setItem('projects', JSON.stringify(projectResults))


		}
		var fetchedProjects = JSON.parse(localStorage.getItem('projects'))

		// join results from api with hardcoded projects list
		if (fetchedProjects) {
			setProjectList(projects.map((project) => ({
				title: project.title,
				url: project.url,
				description: project.description,
				date: project.date ? new Date(project.date) : new Date(fetchedProjects[project.title])
			})).sort((e1, e2) => {
				return e2.date - e1.date
			}))

			// get all unique years in projects list
			setYearList(projects.map(project => (new Date(fetchedProjects[project.title])).getFullYear()).filter((value, index, self) => self.indexOf(value) === index).sort((e1, e2) => {
				return e2 - e1
			}))
		}

	}

	/**
	 * Returns the term given a date object
	 * @param {Date} date to convert
	 * @returns {string} the term as a string
	 */
	function getTerm(date) {
		if (date.getMonth() < 4) {
			return ("Winter")
		} else if (date.getMonth() < 8) {
			return ("Summer")
		} else if (date.getMonth() < 12) {
			return ("Fall")
		}

	}
	useEffect(() => {
		getProjectInfo();

	}, []);

	if (filteredProjects.length === 0) {
		return (
			<Fragment>
				<Grid item xs={12}>
					<Typography variant="h5" component="h2">
						None yet! Check back soon :)
					</Typography>
				</Grid>
            </Fragment>
		);
	}

	return (
		<Fragment>
			<Tabs value={page} onChange={(e, index) => { setPage(index) }}>
				{yearList.map((year) => (
					<Tab label={year} />
				))}
			</Tabs>
			<Grid container spacing={2}>
				{filteredProjects.map((project, id) => (
					<Grid key={id} item xs={12} sm={6} md={4}>
						<InfoCard
							subtitle={getTerm(project.date) + " " + String(project.date.getFullYear())}
							title={project.title}
							description={project.description}
							href={project.url}
						/>
					</Grid>
				))}
			</Grid>
        </Fragment>
	);
}

