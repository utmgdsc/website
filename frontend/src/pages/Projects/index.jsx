import { useEffect } from 'react';
import {
	Container,
	Grid,
	Typography,
} from '@mui/material';
import CustomCard from '../../components/CustomCard';
import projects from '../../data/projects.json';


const ProjectPage = () => {
	useEffect(() => {
		document.title = 'GDSC UTM - Past Projects';
	}, []);
	return (
		<Container sx={{ py: 16 }} component="main" id="projects">
			<Typography
				fontWeight="bold"
				color="text.primary"
				component="h2"
				variant="h4"
				lineHeight="2.5em"
			>
				Past Projects by GDSC team
			</Typography>
			{projects.length === 0
				? <Grid item xs={12}>
					<Typography variant="h5" component="h2">
						None yet! Check back soon :)
					</Typography>
				</Grid>
				: <Grid container spacing={2}>
					{projects.map((project, id) => (
						<CustomCard data={project} key={id} />
					))}
				</Grid>
			}
		</Container>
	);
}

export default ProjectPage;
