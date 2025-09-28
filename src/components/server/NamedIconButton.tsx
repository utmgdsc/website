import { IconButton, Tooltip } from '@mui/material';
import type { ReactNode } from 'react';

interface NamedIconButtonProps {
	/** link to where the icon button should redirect to */
	href: string;
	/** icon to display */
	icon: ReactNode;
	/** tooltip text */
	tooltip: string;
	/** title of the icon button */
	title: string;
}

/**
 * A icon button with a named label and tooltip.
 */
export const NamedIconButton = ({ href, icon, tooltip, title }: NamedIconButtonProps) => {
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
