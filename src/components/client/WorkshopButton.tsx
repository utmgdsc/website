import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import type { ReactNode } from 'react';

interface WorkshopButtonProps {
	/** The link to the resource */
	href: string;
	/** The icon to be displayed */
	icon: ReactNode;
	/** The text to be displayed */
	text: string;
}

/**
 * A button that is used in the FAQ section
 */
export const WorkshopButton = ({ href, icon, text }: WorkshopButtonProps) => {
	return (
		<ListItem>
			<ListItemButton component="a" target="_blank" rel="noreferrer" href={href}>
				<ListItemIcon>{icon}</ListItemIcon>
				<ListItemText>
					<Typography
						sx={{
							color: 'text.primary',
						}}
					>
						{text}
					</Typography>
				</ListItemText>
			</ListItemButton>
		</ListItem>
	);
};
