import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';

/**
 * A button that is used in the FAQ section
 * @param {string} href The link to the resource
 * @param {mui.material.Icon} icon The icon to be displayed
 * @param {string} text The text to be displayed
 * @return {JSX.Element} The button
 */
export const WorkshopButton = ({ href, icon, text }) => {
    return (
        <ListItem>
            <ListItemButton component="a" target="_blank" rel="noreferrer" href={href}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText>
                    <Typography color="text.primary">{text}</Typography>
                </ListItemText>
            </ListItemButton>
        </ListItem>

    );
}
