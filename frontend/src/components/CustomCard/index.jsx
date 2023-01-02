import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import './index.scss';

import Description from '../Description';

import TextLink from '../TextLink';

/**
 * Gets the events from the GDSC (bevy) API
 * @param {event} event object
 */
const CustomCard = ({ data }) => {
  const colors = ["success", "error", "warning", "info"];
  const { id, start_date, title, url, description, lines } = data;

  return (
	<Grid key={id} item xs={12} sm={6} md={4}>
	  <Card
		sx={{
		  height: '100%',
		  display: 'flex',
		  flexDirection: 'column',
		  borderRadius: "2em",
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
			  overflow: "hidden",
			  textOverflow: "ellipsis",
			  maxWidth: "100%",
			  display: "-webkit-box",
			  "WebkitLineClamp": lines ? lines : 4,
			  "WebkitBoxOrient": "vertical",
			}}
		  >
			{id ? <Description id={id} /> : description}
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
