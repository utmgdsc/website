'use client';
/**
 * @fileoverview self-explanatory social media button components
 * Update as needed when adding new social media or removing old ones
 * There is probably a better way to do this but this works for now :)
 */
import { Email, Facebook, GitHub, Google, Instagram, LinkedIn, YouTube } from '@mui/icons-material';
import { createSvgIcon } from '@mui/material';
import { NamedIconButton } from '~/components/server';

/**
 * Discord icon
 * @see https://discord.com/branding
 */
const DiscordIcon = createSvgIcon(
	<path
		d="M19.7,4.9c-1.4-0.7-3-1.1-4.6-1.4c-0.2,0.4-0.4,0.8-0.6,1.2c-1.6-0.2-3.4-0.2-5.2,0C9.2,4.3,9.1,3.9,8.8,3.5
	C7.2,3.8,5.7,4.2,4.1,4.9c-2.9,4.3-3.7,8.6-3.3,12.7l0,0c1.8,1.2,3.6,2.3,5.7,2.9c0.4-0.6,0.8-1.2,1.2-2c-0.6-0.2-1.3-0.5-1.9-0.9
	c0.2-0.1,0.3-0.2,0.5-0.3c3.6,1.6,7.7,1.6,11.3,0c0.1,0.1,0.3,0.2,0.5,0.3c-0.6,0.3-1.2,0.6-2,0.9c0.3,0.7,0.7,1.3,1.2,2
	c2.1-0.6,3.9-1.5,5.7-2.8l0,0C23.5,12.8,22.3,8.7,19.7,4.9z M8.3,15c-1.1,0-2.1-1-2.1-2.3s0.9-2.3,2-2.3s2.1,1,2.1,2.3
	S9.4,15,8.3,15z M15.7,15c-1.1,0-2-1-2-2.3s0.9-2.3,2-2.3s2.1,1,2,2.3S16.8,15,15.7,15z"
	/>,
	'Discord'
);

export const CommunityDevButton = props => (
	<NamedIconButton
		title="Google Developers Student Club page"
		tooltip="Visit our official Google Developers Student Club page"
		icon={<Google />}
		href="https://gdg.community.dev/gdg-on-campus-university-of-toronto-mississauga-canada/"
		{...props}
	/>
);

export const InstagramButton = props => (
	<NamedIconButton
		title="Instagram"
		tooltip="Visit our Instagram"
		icon={<Instagram />}
		href="https://instagram.com/gdscutm"
		{...props}
	/>
);

export const GitHubButton = props => (
	<NamedIconButton
		title="GitHub"
		tooltip="Visit our GitHub organization"
		icon={<GitHub />}
		href="https://github.com/utmgdsc"
		{...props}
	/>
);

export const FacebookButton = props => (
	<NamedIconButton
		title="Facebook"
		tooltip="Visit our Facebook"
		icon={<Facebook />}
		href="https://www.facebook.com/gdscuoftmississauga"
		{...props}
	/>
);

export const LinkedInButton = props => (
	<NamedIconButton
		title="LinkedIn"
		tooltip="Visit our LinkedIn"
		icon={<LinkedIn />}
		href="https://www.linkedin.com/company/google-developer-student-clubs-uoft-mississauga/"
		{...props}
	/>
);

export const YouTubeButton = props => (
	<NamedIconButton
		title="YouTube"
		tooltip="Visit our YouTube"
		icon={<YouTube />}
		href="https://youtube.com/@gdscutm"
		{...props}
	/>
);

export const EmailButton = props => (
	<NamedIconButton title="Email" tooltip="Email us" icon={<Email />} href="mailto:utmdsc@gmail.com" {...props} />
);

export const DiscordButton = props => (
	<NamedIconButton
		title="Discord Server"
		tooltip="Join our Discord Server"
		icon={<DiscordIcon />}
		href="https://discord.gg/AZyYSGbU68"
		{...props}
	/>
);
