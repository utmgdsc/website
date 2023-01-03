import { useEffect } from "react";
import {
	Container,
	Grid,
	Typography,
} from "@mui/material";
import CustomCard from "../../components/CustomCard";
import projects from "../../data/projects.json";
import BannerHeader from "../../components/BannerHeader";
import BannerImg from "../../assets/heroes/IMG_4712.jpg"

const ProjectPage = () => {
	useEffect(() => {
		document.title = "GDSC UTM - Past Projects";
	}, []);
	return (
		<>
			<BannerHeader text="Past GDSC Projects" picture={BannerImg} position="bottom" />

			<Container sx={{ py: 4 }} component="main" id="projects">
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
		</>
	);
}

export default ProjectPage;
