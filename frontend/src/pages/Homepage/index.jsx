import React from 'react';
import HeroInfoSesh from "../../assets/infosession.jpg"
import "./index.css";
import gdscwordmark from "../../assets/icons/gdscwordmark.svg";
import HeroHeader from "./HeroHeader";
import Team from "./Team/Team";
import {
	Typography,
	Container,
	Box
} from '@mui/material';

import teamMembers from "../../data/team.json";

import HeroImage from '../../assets/background.jpg';
import HeroTeam from '../../assets/team.png';



import EventList from "../../components/EventList";


const Homepage = () => {
	return (
		<main>
			{/* Hero unit */}
			<Box
				sx={{
					background: 'linear-gradient(rgba(255,255,255,1) 0%, rgba(255,255,255,0.80) 69%, rgba(255,255,255,1) 100%), url("' + HeroImage + '") no-repeat',
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
						lineHeight="50vh"
						sx={{ userSelect: "none", userDrag: "none" }}
						variant="h2"
					>
						<img
							alt="Google Developer Student Clubs University of Toronto Mississauga"
							id='gdsc-wordmark'
							src={gdscwordmark}
							sx={{ display: "inline", textAlign: "center" }}
						/>
					</Typography>
				</Container>
			</Box>
			{/* End hero unit */}
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
			<HeroHeader text="Who are we?" picture={HeroInfoSesh} />
			<Container sx={{ py: 8, lineHeight: "2em" }} maxWidth="md">
				<div className='lead'>
					Google Developer Student Clubs (GDSC) is a student-led community backed by Google Developers aimed at empowering undergraduate students from all disciplines to grow their knowledge in technology, build solutions for their local communities, and connect with other members from the Google community.
				</div>
				<h3>Creating impact and empowering students through technology</h3>
				<div className='lead'>
					Whether you are new to software development or you've been developing for quite a while, GDSC is a place where you can learn new technologies, make your ideas a reality, and collaborate to solve real-world problems. In addition to solving problems, GDSC will allow you to connect with other technology enthusiasts from other GDSC chapters and the Google Developer Community. We will be hosting events and activities for all students throughout the academic year. We hope to see you there!
				</div>
			</Container>
			<HeroHeader text="Meet the team" picture={HeroTeam} />
			<Container sx={{ py: 8, px: 0 }} maxWidth="md">
				<Team data={teamMembers} />
			</Container>
		</main>
	);
};

export default Homepage;
