/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import "./index.css";
import {
	Typography,
	Container,
	alpha,
	Box
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import HeroInfoSesh from "../../assets/heroes/infosession.jpg"
import wordmark from "../../assets/icons/gdscwordmark.svg";
import HeroImage from "../../assets/background.jpg";
import HeroImageDark from "../../assets/background_dark.jpg";
import HeroTeam from "../../assets/heroes/team.png";

import { prefersDarkMode } from "../../theme";
import { EventUpcomingStates } from "../../constants";
import teamMembers from "../../data/team.json";

import EventList from "../../components/EventList";
import SkeletonLoadedImage from "../../components/SkeletonLoadedImage";
import BannerHeader from "../../components/BannerHeader";
import ErrorBoundary from "../../components/ErrorBoundary";


const HeroWidget = ({ theme }) => {
	return (
		<section>
			<Box
				sx={{
					background: "linear-gradient(" + theme.palette.background.default + " 0%,"
						+ alpha(theme.palette.background.default, 0.8) + "69%,"
						+ theme.palette.background.default + " 100%), url("
						+ (prefersDarkMode() ? HeroImageDark : HeroImage) + ") no-repeat",
					backgroundSize: "cover",
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
							alignItems: "center",
							display: "flex",
							flexDirection: "column",
							height: "50vh",
							justifyContent: "center",
							margin: "auto",
							userSelect: "none",
						}}
						variant="h2"
					>
						<SkeletonLoadedImage
							alt="Google Developer Student Clubs University of Toronto Mississauga"
							id="gdsc-wordmark"
							src={wordmark}
							css={{ textAlign: "center", width: "100%" }}
						/>
					</Typography>
				</Container>
			</Box>
		</section>
	);
}

const AboutUsWidget = () => {
	return (
		<section id="who-are-we">
			<BannerHeader text="Who are we?" picture={HeroInfoSesh} maxWidth="md" />
			<Container sx={{ py: 8, lineHeight: "2em" }} maxWidth="md">
				<div className="lead">
					<defn id="gsdc">Google Developer Student Clubs</defn> (<abbr>GDSC</abbr>) is a student-led community backed by Google
					Developers aimed at empowering undergraduate students from all disciplines to grow
					their knowledge in technology, build solutions for their local communities, and
					connect with other members from the Google community.
				</div>
				<h3>Creating impact and empowering students through technology</h3>
				<div className="lead">
					Whether you are new to software development or you"ve been developing for quite a
					while, GDSC is a place where you can learn new technologies, make your ideas a reality,
					and collaborate to solve real-world problems. In addition to solving problems, GDSC
					will allow you to connect with other technology enthusiasts from other GDSC chapters
					and the Google Developer Community. We will be hosting events and activities for all
					students throughout the academic year. We hope to see you there!
				</div>
			</Container>
		</section>
	);
}

const Team = React.lazy(() => import("../../components/Team"));

const Homepage = () => {
	useEffect(() => {
		document.title = "GDSC UTM";
	}, []);

	const theme = useTheme();

	return (
		<main id="home">
			{/* hero */}
			<HeroWidget theme={theme} />

			{/* upcoming events */}
			<section id="upcoming-events">
				<Container sx={{ py: 8 }} maxWidth="md">
					<Typography
						color="text.primary"
						component="h2"
						fontWeight="bold"
						lineHeight="2.5em"
						variant="h4"
					>
						Upcoming Events
					</Typography>
					<ErrorBoundary>
						<EventList upcoming={ EventUpcomingStates.UPCOMING } />
					</ErrorBoundary>
				</Container>
			</section>

			{/* about / who are we */}
			<AboutUsWidget />

			{/* team list */}
			<section id="meet-the-team">
				<BannerHeader text="Meet the team" picture={HeroTeam} maxWidth="md" />
				<Container sx={{ py: 8, px: 0 }} maxWidth="md">
					<ErrorBoundary>
						<Team data={teamMembers} subTeam="pres" title="President" />
						<Team data={teamMembers} subTeam="lead,coordinator" title="Team Lead" removeLast="1" />
						<Team data={teamMembers} subTeam="associate" title="Associate" removeLast="1" />
						<Team data={teamMembers} subTeam="advisor" title="Advisor" />
					</ErrorBoundary>
				</Container>
			</section>
		</main>
	);
};

export default Homepage;
