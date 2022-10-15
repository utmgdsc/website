import React, { useContext } from "react";
import gdscbracket from "../../assets/gdscbracket.svg";
import DarkMode from "../DarkMode/DarkMode";
import "../DarkMode/DarkMode.css";
import DarkModeContext from "../../context/darkMode/DarkModeContext";
import "./NavbarMenu.css";
import {
	AppBar,
	Toolbar,
	Box,
	ButtonGroup,
	Container,
	IconButton,
	Fab,
	Tabs,
	Tab,
	useScrollTrigger,
} from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { NavLink as RouterLink } from "react-router-dom";

import Tooltip from '@mui/material/Tooltip';

import InstagramIcon from '@mui/icons-material/Instagram';
import DiscordIcon from "./DiscordIcon";
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import Slide from '@mui/material/Slide';

const theme = createTheme({
	typography: {
		tab: {
			textTransform: "none",
			color: "black",
		},
	},
	fab: {
		backgroundColor: "white",
		color: "black",
	},
});

function ElevationScroll(props) {
	const { children } = props;

	const elevationTrigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	const slideTrigger = useScrollTrigger({});

	// return React.cloneElement(children, {
	//  elevation: trigger ? 4 : 0,
	//  sx: { background: trigger ? "white" : "transparent" },
	// });
	return (
		<Slide
			appear={false}
			direction="down"
			in={!slideTrigger}
			elevation={elevationTrigger ? 4 : 0}
			sx={{ background: elevationTrigger ? "white" : "transparent" }}
		>
			{children}
		</Slide>
	);
}

function ElevationScrollReverse(props) {
	const { children } = props;

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return React.cloneElement(children, {
		sx: { boxShadow: trigger ? 0 : 4 },
	});
}

const StyledTabs = styled((props) => (
	<Tabs
		{...props}
		TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
	/>
))({
	'& .MuiTabs-flexContainer': {
		display: 'block',
	},
	'& .MuiTabs-indicator': {
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: 'transparent',
	},
	'& .MuiTabs-indicatorSpan': {
		maxWidth: 50,
		width: '100%',
		backgroundColor: '#4285f4',
	},
	// '&:hover .MuiTabs-indicatorSpan': {
	//  maxWidth: 100,
	// },
});

const LinkTab = styled((props) =>
	<Tab component={RouterLink} {...props} />)(
		({ theme }) => ({
			color: "#5f6368",
			// display: "inline-block !important",
			fontFamily: "inherit",
			fontSize: "1em",
			fontWeight: "normal",
			letterSpacing: "0 !important",
			padding: "1.5em",
			textTransform: 'none',
			whiteSpace: "nowrap",
			'&.Mui-selected': {
				color: 'black',
				fontWeight: 'bold',
			},
		}),
	);

// todo: dynamically generate this
const pages = [["About", "/"],
["Resources", "/resources"],
["Past Projects", "/pastProjects"],
["Events", "/events"]];

const NavbarMenu = () => {
	const [value, setValue] = React.useState('one');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<ThemeProvider theme={theme}>
			<ElevationScroll>
				<AppBar sx={{ bgcolor: "transparent !important" }}>
					<Container maxWidth="xl">
						<Toolbar disableGutters sx={{ minHeight: "auto !important" }}>
							{/* gdsc button logo */}
							<ElevationScrollReverse>
								<Fab
									variant="extended"
									aria-label="Home"
									component={RouterLink}
									onClick={handleChange}
									to="/"
									id="gdsc-home-btn"
								>
									<img
										src={gdscbracket}
										alt="Google Developers Bracket Logo"
										height="16px"
										width="32px"
										sx={{ userSelect: "none" }}
									/>
								</Fab>
							</ElevationScrollReverse>

							{/* tab navigation */}
							<StyledTabs
								aria-label="Main navigation"
								centered
								component="nav"
								id="main-nav"
								indicatorColor="#4285f4"
								onChange={handleChange}
								value={window.location.pathname.toLowerCase()} // fix this
								variant="fullWidth"
							>
								{pages.map((page) => (
									<LinkTab
										to={page[1]}
										value={page[1].toLowerCase()}
										label={page[0]}
										key={page[0]}
									/>
								))}
							</StyledTabs>

							{/* spacing */}
							<Box sx={{ flexGrow: 1 }} />

							{/* social media icons */}
							<ButtonGroup sx={{ display: "flex" }}>
								<Tooltip title="Google Developers Student Club page">
									<IconButton
										aria-label="Visit our official Google Developers Student Club page"
										color="default"
										href="https://gdsc.community.dev/university-of-toronto-mississauga/"
										rel="noopener noreferrer"
										size="large"
										sx={{ marginLeft: ".5em" }}
										target="_blank"
									>
										<GoogleIcon />
									</IconButton>
								</Tooltip>
								<Tooltip title="Instagram">
									<IconButton
										aria-label="Visit our Instagram"
										color="default"
										href="https://instagram.com/gdscutm"
										rel="noopener noreferrer"
										size="large"
										sx={{ marginLeft: ".5em" }}
										target="_blank"
									>
										<InstagramIcon />
									</IconButton>
								</Tooltip>
								<Tooltip title="GitHub organization">
									<IconButton
										aria-label="Visit our GitHub organization"
										color="default"
										href="https://github.com/utmgdsc"
										rel="noopener noreferrer"
										size="large"
										sx={{ marginLeft: ".5em" }}
										target="_blank"
									>
										<GitHubIcon />
									</IconButton>
								</Tooltip>
								<Tooltip title="Discord Server">
									<IconButton
										aria-label="Join our Discord Server"
										color="default"
										href="https://discord.gg/AZyYSGbU68"
										rel="noopener noreferrer"
										size="large"
										sx={{ marginLeft: ".5em" }}
										target="_blank"
									>
										<DiscordIcon />
									</IconButton>
								</Tooltip>
							</ButtonGroup>
						</Toolbar>

					</Container>
				</AppBar>
			</ElevationScroll>
		</ThemeProvider>
	);
};

export default NavbarMenu;
