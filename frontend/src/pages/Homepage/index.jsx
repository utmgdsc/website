import React, { useEffect } from 'react';
import "./index.css";
import {
	Typography,
	Container,
	alpha,
	Box
} from '@mui/material';

import teamMembers from "../../data/team.json";

import HeroInfoSesh from "../../assets/infosession.jpg"
import wordmark from "../../assets/icons/gdscwordmark.svg";
import HeroImage from '../../assets/background.jpg';
import HeroImageDark from '../../assets/background_dark.jpg';
import HeroTeam from '../../assets/team.png';

import { prefersDarkMode } from "../../theme";

import Team from "./Team";
import EventList from "../../components/EventList";
import SkeletonLoadedImage from "../../components/SkeletonLoadedImage";
import BannerHeader from "../../components/BannerHeader";

import { useTheme } from '@mui/material/styles';

const Homepage = () => {
	useEffect(() => {
		document.title = 'GDSC UTM';
	}, []);

	const theme = useTheme();

	return (
		<main id="home">
			<section>
				<Box
					sx={{
						background: 'linear-gradient(' + theme.palette.background.default + ' 0%,'
							+ alpha(theme.palette.background.default, 0.8) + '69%,' + theme.palette.background.default + ' 100%), url("'
							+ (prefersDarkMode() ? HeroImageDark : HeroImage) + '") no-repeat',
						backgroundSize: 'cover',
						marginBottom: "-15vh",
						pb: 6,
						pt: 8,
					}}
				>
					<Container maxWidth="sm" sx={{ height: "50vh" }}>
						<Typography
							align="center"
							color="text.primary"
							component="h1"
							gutterBottom
							sx={{
								display: "flex",
								height: "50vh",
								userSelect: "none",
								justifyContent: "center",
								alignItems: "center",
								margin: "auto",
								flexDirection: "column",
							}}
							variant="h2"
						>
							<SkeletonLoadedImage
								alt="Google Developer Student Clubs University of Toronto Mississauga"
								id='gdsc-wordmark'
								src={wordmark}
								style={{ textAlign: "center", width: "100%" }}
							/>
						</Typography>
					</Container>
				</Box>
			</section>

			<section id="upcoming-events">
				<Container sx={{ py: 8 }} maxWidth="md">
					<Typography
						fontWeight="bold"
						color="text.primary"
						component="h2"
						variant="h4"
						lineHeight="2.5em"
					>
						Upcoming events
					</Typography>
					<EventList upcoming={false} limit="6" />
				</Container>
			</section>

			<section id="who-are-we">
				<BannerHeader text="Who are we?" picture={HeroInfoSesh} maxWidth="md" />
				<Container sx={{ py: 8, lineHeight: "2em" }} maxWidth="md">
					<div className='lead'>
						Google Developer Student Clubs (GDSC) is a student-led community backed by Google Developers aimed at empowering undergraduate students from all disciplines to grow their knowledge in technology, build solutions for their local communities, and connect with other members from the Google community.
					</div>
					<h3>Creating impact and empowering students through technology</h3>
					<div className='lead'>
						Whether you are new to software development or you've been developing for quite a while, GDSC is a place where you can learn new technologies, make your ideas a reality, and collaborate to solve real-world problems. In addition to solving problems, GDSC will allow you to connect with other technology enthusiasts from other GDSC chapters and the Google Developer Community. We will be hosting events and activities for all students throughout the academic year. We hope to see you there!
					</div>
				</Container>
			</section>

			<section id="meet-the-team">
				<BannerHeader text="Meet the team" picture={HeroTeam} maxWidth="md" />
				<Container sx={{ py: 8, px: 0 }} maxWidth="md">
					<Team data={teamMembers} subTeam="pres" title="President" />
					<Team data={teamMembers} subTeam="lead,coordinator" title="Team Lead" />
					<Team data={teamMembers} subTeam="associate" title="Associate" />
					<Team data={teamMembers} subTeam="advisor" title="Advisor" />
				</Container>
			</section>
		</main>
	);
};

export default Homepage;
