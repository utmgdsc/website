'use client'

import {
	Grid,
	Typography,
	Pagination
} from '@mui/material';

import {
	InfoCard,
} from '../../components';
import { projects } from '../../data/projects.js';
import BannerImg from '../../assets/website_proprietary/heroes/IMG_4712.jpg';
import { useEffect, useState } from 'react';
import { HeroLayout } from '../../layouts/HeroLayout';
import { ConvertDate } from '../../components/ConvertDate/ConvertDate';

const ProjectPage = () => {
	
	const [projectList, setProjectList] = useState()
	const currYear = parseInt(new Date().getFullYear())
	const [page, setPage] = useState(currYear)
	const filteredProjects = (
		projectList ? projectList.filter(project => {
			if (page) {
				return (
					project.date.getFullYear() == page
				);
			}
			return true;
		}) : []
	)

	const getProjectInfo = async () => {
			//check if the localstorage cache exists
		if ((!localStorage.getItem('time_stamp')) || (((localStorage.getItem('time_stamp') - new Date()) / 3600000) > 1)) {
			localStorage.setItem('time_stamp', new Date())
			var projectResults = {}


			for (const project of projects) {
				await fetch('https://api.github.com/repos/utmgdsc/' + project.url.slice(27) + '/commits')
					.then(response => response.json())
					.then(response => projectResults[project.title] = response[0].commit.committer.date)
					.then(localStorage.setItem('projects', JSON.stringify(projectResults)))
			}


		}
		var fetchedProjects = JSON.parse(localStorage.getItem('projects'))

		//join results from api with hardcoded projects list
		setProjectList(projects.map((project) => ({
			title: project.title,
			url: project.url,
			description: project.description,
			date: new Date(fetchedProjects[project.title])
		}
		)).sort((e1, e2) => {
			return e2.date - e1.date
		}))

	}


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
			<HeroLayout title="GDSC Projects" picture={BannerImg} position="bottom" id="projects">
				<Grid item xs={12}>
					<Typography variant="h5" component="h2">
						None yet! Check back soon :)
					</Typography>
				</Grid>
			</HeroLayout>
		);
	}

	return (
		<HeroLayout title="GDSC Projects" picture={BannerImg} position="bottom" id="projects">
			<Pagination count={currYear - 2020} onChange={(e, val) => { setPage(currYear + 1 - val) }} />
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
		</HeroLayout>
	);
}

export default ProjectPage;