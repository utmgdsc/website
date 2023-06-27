import {
  IconButton,
  Tooltip,
} from '@mui/material';

/**
 * A icon button with a named label and tooltip.
 * @param {string} href link to the social media profile
 * @param {JSX.Element} icon icon of the social media platform
 * @param {string} tooltip tooltip text
 * @param {string} title title of the social media platform
 * @returns {JSX.Element} social media button
 */
export const NamedIconButton = ({ href, icon, tooltip, title }) => {
	return (
		<Tooltip title={title}>
			<IconButton
				aria-label={tooltip}
				color="default"
				href={href}
				rel="noopener noreferrer"
				size="large"
				target="_blank"
			>
				{icon}
			</IconButton>
		</Tooltip>
	);
};
