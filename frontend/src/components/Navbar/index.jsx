import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import "./index.scss";
import {
	AppBar,
	Box,
	ButtonGroup,
	Container,
	Fab,
	SvgIcon,
	Toolbar,
} from "@mui/material";

import { ThemeProvider } from "@mui/material/styles";

import {
	Instagram,
	GitHub,
	Google,
} from '@mui/icons-material';

import { ReactComponent as DiscordIcon } from "../../assets/icons/discord.svg";
import gdscBracket from "../../assets/icons/gdscbracket.svg";

import GoogleTheme from "../../theme";

import pages from "../../pages/pages";

import LinkTab from "./NavTabs/LinkTab";
import SocialButton from "../SocialButton";
import ElevationScroll from "./ElevationScroll";
import ElevationScrollReverse from "./ElevationScroll/Reverse";
import StyledTabs from "./NavTabs/StyledTabs";

const Navbar = () => {
	// value required for router but not used in this file
	// eslint-disable-next-line no-unused-vars
	const [value, setValue] = React.useState('one');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<ThemeProvider theme={GoogleTheme}>
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
										src={gdscBracket}
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
								{pages.map((page, index) => (
									<LinkTab
										to={page[1]}
										value={page[1].toLowerCase()}
										label={page[0]}
										key={index}
									/>
								))}
							</StyledTabs>

							{/* spacing */}
							<Box sx={{ flexGrow: 1 }} />

							{/* social media icons */}
							<ButtonGroup sx={{ display: "flex" }}>
								<SocialButton
									title="Google Developers Student Club page"
									tooltip="Visit our official Google Developers Student Club page"
									icon={<Google />}
									href="https://gdsc.community.dev/university-of-toronto-mississauga/"
								/>
								<SocialButton
									title="Instagram"
									tooltip="Visit our Instagram"
									icon={<Instagram />}
									href="https://instagram.com/gdscutm"
								/>
								<SocialButton
									title="Github organization"
									tooltip="Visit our Github organization"
									icon={<GitHub />}
									href="https://github.com/utmgdsc"
								/>
								<SocialButton
									title="Discord Server"
									tooltip="Join our Discord Server"
									icon={<SvgIcon><DiscordIcon /></SvgIcon>}
									href="https://discord.gg/AZyYSGbU68"
								/>
							</ButtonGroup>
						</Toolbar>

					</Container>
				</AppBar>
			</ElevationScroll>
		</ThemeProvider>
	);
};

export default Navbar;
