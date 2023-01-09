import { useEffect } from "react";
import {
	Container,
	Grid,
	Typography,
} from "@mui/material";
import BannerImg from "../../assets/heroes/IMG_4712.jpg";
import projects from "../../data/projects.json";
import DataCard from "../../components/DataCard";
import BannerHeader from "../../components/BannerHeader";

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
			<BannerHeader text="GDSC Projects" picture={BannerImg} position="bottom" />

			<Container sx={{ py: 4 }} component="main" id="projects">
				<Grid container spacing={2}>
					{projects.map((project, id) => (
						<DataCard data={project} key={id} />
					))}
				</Grid>
			</Container>
		</>
	);
}

export default ProjectPage;
