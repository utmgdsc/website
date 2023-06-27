'use client'

import {
	Grid,
	Typography,
} from '@mui/material';

import {
	InfoCard,
} from '../../components';
import { projects } from '../../data/projects.js';
import BannerImg from '../../assets/website_proprietary/heroes/IMG_4712.jpg';

import { HeroLayout } from '../../layouts/HeroLayout';

const ProjectPage = () => {
	if (projects.length === 0) {
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
			<Grid container spacing={2}>
				{projects.map((project, id) => (
					<Grid key={id} item xs={12} sm={6} md={4}>
						<InfoCard
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
