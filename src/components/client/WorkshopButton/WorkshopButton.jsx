import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';

/**
 * A button that is used in the FAQ section
 * @param {Object} props
 * @param {string} props.href The link to the resource
 * @param {React.ReactNode} props.icon The icon to be displayed
 * @param {string} props.text The text to be displayed
 * @return {JSX.Element} The button
 */
export const WorkshopButton = ({ href, icon, text }) => {
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
