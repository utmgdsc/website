import {
	Button,
	Card,
	CardActions,
	CardContent,
	Grid,
	Typography,
} from "@mui/material";
import "./index.scss";

import Description from "../Description";

import TextLink from "../TextLink";

import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

/**
 * Gets the events from the GDSC (bevy) API and displays them in a card format.
 * The card has a clickable button that redirects to the event's page.
 * @param {event} event object
 */
const CustomCard = ({ data }) => {
	const colors = ["success", "error", "warning", "info"];
	const { id, start_date, title, url, description, lines } = data;

	return (
		<Grid key={id} item xs={12} sm={6} md={4}>
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
						{start_date ? new Date(start_date).toLocaleString(undefined, { month: "long", day: "numeric", year: "numeric" }) : null}
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
							"WebkitLineClamp": lines ? lines : 4,
						}}
					>
						<ErrorBoundary>
							{id ? <Description id={id} /> : description}
						</ErrorBoundary>
					</Typography>

				</CardContent>

				<CardActions sx={{ padding: "16px" }}>
					<Button
						color={colors[Math.floor(Math.random() * colors.length)]}
						component={TextLink}
						href={url}
						size="small"
						external
						sx={{ borderRadius: "2em", textTransform: "none" }}
						variant="contained"
					>
						View Details
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
}

export default CustomCard;
