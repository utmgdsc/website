import {
	Email,
	Facebook,
	GitHub,
	Google,
	Instagram,
	LinkedIn,
	Twitter,
	YouTube,
} from "@mui/icons-material";

import SocialButton from "./";

import {
	SvgIcon,
} from "@mui/material";

import { ReactComponent as DiscordIcon } from "../../assets/icons/discord.svg";

// self-explanatory social media button components

export const CommunityDevButton = (props) => (
	<SocialButton
		title="Google Developers Student Club page"
		tooltip="Visit our official Google Developers Student Club page"
		icon={<Google />}
		href="https://gdsc.community.dev/university-of-toronto-mississauga/"
		{...props}
	/>
);

export const InstagramButton = (props) => (
	<SocialButton
		title="Instagram"
		tooltip="Visit our Instagram"
		icon={<Instagram />}
		href="https://instagram.com/gdscutm"
		{...props}
	/>);

export const GitHubButton = (props) => (
	<SocialButton
		title="Github"
		tooltip="Visit our Github organization"
		icon={<GitHub />}
		href="https://github.com/utmgdsc"
		{...props}
	/>);

export const TwitterButton = (props) => (
	<SocialButton
		title="Twitter"
		tooltip="Visit our Twitter"
		icon={<Twitter />}
		href="https://twitter.com/gdscutm"
		{...props}
	/>);

export const FacebookButton = (props) => (
	<SocialButton
		title="Facebook"
		tooltip="Visit our Facebook"
		icon={<Facebook />}
		href="https://www.facebook.com/gdscuoftmississauga"
		{...props}
	/>);

export const LinkedInButton = (props) => (
	<SocialButton
		title="LinkedIn"
		tooltip="Visit our LinkedIn"
		icon={<LinkedIn />}
		href="https://www.linkedin.com/company/google-developer-student-clubs-uoft-mississauga/"
		{...props}
	/>);

export const YouTubeButton = (props) => (
	<SocialButton
		title="YouTube"
		tooltip="Visit our YouTube"
		icon={<YouTube />}
		href="https://youtube.com/@gdscutm"
		{...props}
	/>);

export const EmailButton = (props) => (
	<SocialButton
		title="Email"
		tooltip="Email us"
		icon={<Email />}
		href="mailto:utmdsc@gmail.com"
		{...props}
	/>);

export const DiscordButton = (props) => (
	<SocialButton
		title="Discord Server"
		tooltip="Join our Discord Server"
		icon={<SvgIcon><DiscordIcon /></SvgIcon>}
		href="https://discord.gg/AZyYSGbU68"
		{...props}
	/>);
