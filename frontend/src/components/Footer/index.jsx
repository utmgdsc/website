/** @jsxImportSource @emotion/react */
// import React, { useContext } from "react";
import "./index.scss";
import { Container, Typography, Box, ButtonGroup } from "@mui/material";
import bracket_colourless from "../../assets/icons/bracket_colourless.svg";
import Link from "../TextLink";
import footerLinks from "../../data/footer.json";

import {
	CommunityDevButton,
	InstagramButton,
	GitHubButton,
	TwitterButton,
	FacebookButton,
	LinkedInButton,
	YouTubeButton,
	EmailButton,
	DiscordButton
} from "../SocialButton/buttons";

import { styled } from "@mui/material/styles";

import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

/**
 * A link for footer-flex. Takes the same props as "a".
 * @param {Object} props - props to pass to the link, same as "a" element
 * @return {JSX.Element} Footer link
 */
const FooterLink = styled((props) =>
	<li><Link {...props} className={"link"} css={{ color: "inherit" }} {...props} /></li>)(
		({ theme }) => ({
			color: theme.palette.text.secondary,
			opacity: 0.7,
			"&:hover": {
				opacity: 1,
			},
		}),
	);

/**
 * iterate through top level keys in footerLinks
 *   must only iterate through keys as forEach does not return anything
 *   and thus cannot be used for react purposes
 * key name is used as the header text
 * @param {Object} data - footer links from footer.json
 * @returns {JSX.Element} Footer links
 */
const FooterLinks = ({ data }) => {
	return Object.keys(data).map(function (header) {
		return (
			<div className="flex-item links-flex" key={header} >
				<Typography variant="h6" component="h6">{header}</Typography>
				<ul>
					{
						// iterate through the links in each header
						// using the keys as the link text
						Object.keys(data[header]).map(function (link) {
							return (
								<FooterLink
									key={link}
									href={data[header][link].URL}
									external={data[header][link].external}>
									{link}
								</FooterLink>
							) // return
						}) // map
					}
				</ul>
			</div>
		) // return
	}) // map
}

/**
 * @returns {JSX.Element} Footer component
 */
const Footer = () => {
	return (
		<Box
			component="footer"
			sx={{
				backgroundColor: theme => theme.palette.action.hover,
				borderColor: theme => theme.palette.divider,
			}}
		>
			<Container
				maxWidth="xl"
			>
				<div id="footer">
					<div className="logo-group flex-item">
						<a href="/">
							<img
								src={bracket_colourless}
								className="logo"
								height="64"
								width="64"
								draggable="false"
								alt="UTM GDSC logo" />
						</a>
					</div>

					{/* just so that proper heading hierarchy is maintained */}
					<Typography variant="h5" component="h5" className="vox-only">Footer</Typography>

					<div className="footer-flex">
						<ErrorBoundary>
							<FooterLinks data={footerLinks} />
						</ErrorBoundary>
					</div>
				</div>

				<div className="footer-text">
					<ul className="links-flex" css={{ paddingTop: "1em", flexGrow: 1 }}>
						<FooterLink className="link" href="https://github.com/utmgdsc/website/issues/new/choose" external>Improve this page on GitHub</FooterLink>
					</ul>
					<ButtonGroup
						className={"flex-item"}
						id="social"
					>
						<CommunityDevButton />
						<InstagramButton />
						<GitHubButton />
						<TwitterButton />
						<FacebookButton />
						<LinkedInButton />
						<YouTubeButton />
						<EmailButton />
						<DiscordButton />
					</ButtonGroup>
				</div>
			</Container>
		</Box >
	);
};

export default Footer;
