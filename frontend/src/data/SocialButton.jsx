/**
 * @fileoverview self-explanatory social media button components
 * Update as needed when adding new social media or removing old ones
 * There is probably a better way to do this but this works for now :)
 */
import {
  Email,
  Facebook,
  GitHub,
  Google,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from '@mui/icons-material';
import { SvgIcon } from '@mui/material';

import { ReactComponent as DiscordIcon } from '../assets/graphics/discord.svg';
import { NamedIconButton } from '../components/NamedIconButton/NamedIconButton';

export const CommunityDevButton = (props) => (
	<NamedIconButton
		title="Google Developers Student Club page"
		tooltip="Visit our official Google Developers Student Club page"
		icon={<Google />}
		href="https://gdsc.community.dev/university-of-toronto-mississauga/"
		{...props}
	/>
);

export const InstagramButton = (props) => (
	<NamedIconButton
		title="Instagram"
		tooltip="Visit our Instagram"
		icon={<Instagram />}
		href="https://instagram.com/gdscutm"
		{...props}
	/>);

export const GitHubButton = (props) => (
	<NamedIconButton
		title="Github"
		tooltip="Visit our Github organization"
		icon={<GitHub />}
		href="https://github.com/utmgdsc"
		{...props}
	/>);

export const TwitterButton = (props) => (
	<NamedIconButton
		title="Twitter"
		tooltip="Visit our Twitter"
		icon={<Twitter />}
		href="https://twitter.com/gdscutm"
		{...props}
	/>);

export const FacebookButton = (props) => (
	<NamedIconButton
		title="Facebook"
		tooltip="Visit our Facebook"
		icon={<Facebook />}
		href="https://www.facebook.com/gdscuoftmississauga"
		{...props}
	/>);

export const LinkedInButton = (props) => (
	<NamedIconButton
		title="LinkedIn"
		tooltip="Visit our LinkedIn"
		icon={<LinkedIn />}
		href="https://www.linkedin.com/company/google-developer-student-clubs-uoft-mississauga/"
		{...props}
	/>);

export const YouTubeButton = (props) => (
	<NamedIconButton
		title="YouTube"
		tooltip="Visit our YouTube"
		icon={<YouTube />}
		href="https://youtube.com/@gdscutm"
		{...props}
	/>);

export const EmailButton = (props) => (
	<NamedIconButton
		title="Email"
		tooltip="Email us"
		icon={<Email />}
		href="mailto:utmdsc@gmail.com"
		{...props}
	/>);

export const DiscordButton = (props) => (
	<NamedIconButton
		title="Discord Server"
		tooltip="Join our Discord Server"
		icon={<SvgIcon><DiscordIcon /></SvgIcon>}
		href="https://discord.gg/AZyYSGbU68"
		{...props}
	/>);
