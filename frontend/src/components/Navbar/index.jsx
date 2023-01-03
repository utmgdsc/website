/** @jsxImportSource @emotion/react */
import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import "./index.scss";
import {
	AppBar,
	Box,
	ButtonGroup,
	Container,
	Fab,
	Toolbar,
	useTheme,
} from "@mui/material";

import {
	CommunityDevButton,
	InstagramButton,
	GitHubButton,
	DiscordButton
} from "../SocialButton/buttons";

import bracket from "../../assets/icons/bracket.svg";
import bracketDark from "../../assets/icons/bracket_colourless.svg";

import pages from "../../pages/pages";

import { ElevationScroll, ElevationScrollReverse } from "./ElevationScroll";
import LinkTab from "./NavTabs/LinkTab";
import StyledTabs from "./NavTabs/StyledTabs";

/**
 * TODO - add a way to programmatically change the tab outside of Navbar.jsx
 * @param {int} newValue - the value of the tab to change to
 */
const changeTab = (newValue) => {
	const value = newValue[1];
	// call handleChange the same way as in Navbar.jsx
	this.handleChange(null, value);
};

/**
 * Site navbar component. Contains the logo, social buttons, and navigation tabs.
 * Responsive: 1 row on mobile, 2 rows on desktop. The tabs scroll when there are too many to fit.
 * Navbar goes up and down on scroll.
 * @returns {JSX.Element} the navbar component
 */
const Navbar = () => {
	// value required for router but not used in this file
	// eslint-disable-next-line no-unused-vars
	const [value, setValue] = React.useState("one");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const theme = useTheme();

	return (
		<ElevationScroll>
			<AppBar sx={{ bgcolor: "transparent !important" }}>
				<Container maxWidth="xl">
					<Toolbar
						disableGutters
						sx={{
							flexWrap: "wrap",
							minHeight: "auto !important",
							paddingTop: {
								// since two-row version lacks top padding, add it here
								xs: "1rem",
								sm: "1rem",
								md: "0",
							}
						}}
					>
						{/* gdsc button logo */}
						<ElevationScrollReverse>
							<Fab
								variant="extended"
								aria-label="Home"
								style={{
									background: theme.palette.background.paper
								}}
								component={RouterLink}
								onClick={handleChange}
								to="/"
								id="gdsc-home-btn"
							>
								<picture id="nav-bracket-logo">
									<source srcSet={bracketDark} media="(prefers-color-scheme: dark)" />
									<img src={bracket} alt="Google Developers Bracket Logo"
										height="48px"
										width="48px"
										draggable="false"
										css={{ userSelect: "none" }}
									/>
								</picture>
							</Fab>
						</ElevationScrollReverse>

						{/* tab navigation */}
						<StyledTabs
							aria-label="Main navigation"
							component="nav"
							allowScrollButtonsMobile
							id="main-nav"
							indicatorColor={theme.palette.primary.main}
							onChange={handleChange}
							value={
								// use only the first part of the path to determine the tab
								// so that sub pages are also highlighted in the navbar
								window.location.pathname.toLowerCase().split("/")[1]
							}
							variant="scrollable"
						>
							{pages.filter(
								// filter out empty pages
								(page) => page[0] !== ""
							).map((page, index) => (
								<LinkTab
									to={page[1]}
									value={page[1].toLowerCase().split("/")[1]}
									label={page[0]}
									key={page[1]}
								/>
							))}
						</StyledTabs>

						{/* spacing */}
						<Box sx={{ flexGrow: 1 }} />

						{/* social media icons */}
						<ButtonGroup
							sx={{
								display: {
									// xs: "none",
									sm: "flex",
								}
							}}>
							<CommunityDevButton />
							<InstagramButton />
							<GitHubButton />
							<DiscordButton />
						</ButtonGroup>
					</Toolbar>

				</Container>
			</AppBar>
		</ElevationScroll>
	);
};

export default Navbar;
export { changeTab, Navbar };
