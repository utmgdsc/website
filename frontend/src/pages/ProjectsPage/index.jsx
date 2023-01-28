import { useEffect } from 'react';

import {
  Container,
  Grid,
  Typography,
} from '@mui/material';

import {
  HeroHeader,
  InfoCard,
} from '../../components';
import { projects } from '../../data/projects.js';
import BannerImg from '../../assets/website_proprietary/heroes/IMG_4712.jpg';

const ProjectPage = () => {
	useEffect(() => {
		document.title = "GDSC UTM - Projects";
	}, []);

	if (projects.length === 0) {
		return (
			<Grid item xs={12}>
				<Typography variant="h5" component="h2">
					None yet! Check back soon :)
				</Typography>
			</Grid>
		);
	}

	return (
		<>
			<HeroHeader text="GDSC Projects" picture={BannerImg} position="bottom" />

			<Container sx={{ py: 4 }} component="main" id="projects">
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
			</Container>
		</>
	);
}

export default ProjectPage;
