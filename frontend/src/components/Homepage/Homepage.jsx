
import React, { useContext } from 'react';
// import { Container, Col, Row } from "react-bootstrap"
import HeroInfoSesh from "../../assets/infosession.jpg"
import DarkModeContext from "../../context/darkMode/DarkModeContext"
import "./Homepage.css";
import "./Team.css";
import gdscwordmark from "../../assets/gdscwordmark.svg";
import HeroHeader from "./HeroHeader";
import Person from "./Person";

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

import HeroImage from '../../assets/background.jpg';
import HeroTeam from '../../assets/team.png';

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

const GoogleColours = createTheme({
	palette: {
		error: {
			main: '#ea4335',
		},
		warning: {
			main: '#fbbc04',
		},
		info: {
			main: '#4285f4',
		},
		success: {
			main: '#0f9d58',
		},
		// Used by `getContrastText()` to maximize the contrast between
		// the background and the text.
		contrastThreshold: 3,
		// Used by the functions below to shift a color's luminance by approximately
		// two indexes within its tonal palette.
		// E.g., shift from Red 500 to Red 300 or Red 700.
		tonalOffset: 0.2,
	},
	typography: {
		fontFamily: [
			'Google Sans Display',
			'Google Sans',
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif'
		].join(','),
	}
});

const cards = [1, 2, 3, 4, 5, 6];

const Homepage = () => {
	return (
		<ThemeProvider theme={GoogleColours}>
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
					<Grid container spacing={2}>
						{cards.map((card, index) => (
							<Grid item key={card} xs={12} sm={6} md={4}>
								<Card
									sx={{
										height: '100%',
										display: 'flex',
										flexDirection: 'column',
										borderRadius: "2em",
										border: "2px solid " + GoogleColours.palette.success.main
									}}
								>
									<CardContent sx={{ flexGrow: 1, paddingBottom: "0" }}>
										<Typography gutterBottom variant="h6" component="p">
											Date
										</Typography>
										<Typography gutterBottom variant="h5" component="h2">
											Heading
										</Typography>
										<Typography>
											This is a media card. You can use this section to describe the
											content.
										</Typography>
									</CardContent>
									<CardActions sx={{ padding: "16px" }}>
										<Button color="success" variant="contained" size="small" sx={{ borderRadius: "2em" }}>Register</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
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
					<div className='team'>
						<Person name="Ilir" role="Pizza Delivery Man" picture={HeroImage} />
						<Person name="Ilir" role="Pizza Delivery Man" picture={HeroImage} />
						<Person name="Ilir" role="Pizza Delivery Man" picture={HeroImage} />
						<Person name="Ilir" role="Pizza Delivery Man" picture={HeroImage} />
						<Person name="Ilir" role="Pizza Delivery Man" picture={HeroImage} />
						<Person name="Ilir" role="Pizza Delivery Man" picture={HeroImage} />
						<Person name="Ilir" role="Pizza Delivery Man" picture={HeroImage} />
						<Person name="Ilir" role="Pizza Delivery Man" picture={HeroImage} />
						<Person name="Ilir" role="Pizza Delivery Man" picture={HeroImage} />
						<Person name="Ilir" role="Pizza Delivery Man" picture={HeroImage} />
						<Person name="Ilir" role="Pizza Delivery Man" picture={HeroImage} />
						<Person name="Ilir" role="Pizza Delivery Man" picture={HeroImage} />
						<Person name="Ilir" role="Pizza Delivery Man" picture={HeroImage} />
						<Person name="Ilir" role="Pizza Delivery Man" picture={HeroImage} />

					</div>
				</Container>
			</main>
		</ThemeProvider>
	);
	//const { mode, toggleMode } = useContext(DarkModeContext)
	// return (
	//     <div className={mode === true ? "main dark" : "main"}>
	//         <Container className="mt-auto mb-auto">
	//             <Row md={1}>
	//                 <img className='gdsclogo' src={gdscwordmark} alt="Google Developer Student Clubs University of Toronto Mississauga" />
	//                 <p className='gdsclogo'>Creating impact and <b>empowering students</b> through technology.</p>
	//             </Row>
	//             <Col>

	//             </Col>
	//         </Container>
	//     </div>
	// )
};

export default Homepage;