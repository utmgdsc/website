import './InfoCard.scss';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

import { Link } from '../Link/Link';

const CardColors = ["success", "error", "warning", "info"];

/**
 * Gets the events from the GDSC (bevy) API and displays them in a card format.
 * The card has a clickable button that redirects to the event's page.
 * @param {string} subtitle the subtitle of the event appearing above the title
 * @param {string} title the title of the event
 * @param {string} url the url of the event
 * @param {string} description the description of the event
 * @param {integer} lines the number of lines to show in the description
 * @param {string} linkText the text to show on the button
 */
export const InfoCard = ({ subtitle, title, url, description, lines = 4, linkText = "View Details" }) => {
	return (
		<Card
			sx={{
				borderRadius: "2em",
				display: "flex",
				flexDirection: "column",
				height: "100%",
			}}
			className="shadow card-front"
		>
			<CardContent sx={{ flexGrow: 1, paddingBottom: "0" }}>
				<Typography gutterBottom variant="h6" component="p">
					{subtitle}
				</Typography>

				<Typography gutterBottom variant="h5" component="h2" fontWeight="bold">
					{title}
				</Typography>

				<Typography
					sx={{
						display: "-webkit-box",
						maxWidth: "100%",
						overflow: "hidden",
						textOverflow: "ellipsis",
						"WebkitBoxOrient": "vertical",
						"WebkitLineClamp": lines,
					}}
				>
					{description}
				</Typography>

			</CardContent>

			<CardActions sx={{ padding: "16px" }}>
				<Button
					color={CardColors[Math.floor(Math.random() * CardColors.length)]}
					component={Link}
					href={url}
					size="small"
					external
					sx={{ borderRadius: "2em", textTransform: "none" }}
					variant="contained"
				>
					{ linkText }
				</Button>
			</CardActions>
		</Card>
	);
}
