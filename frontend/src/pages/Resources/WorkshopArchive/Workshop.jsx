/** @jsxImportSource @emotion/react */
/**
 * Helpers for the Workshops section of the Resources page
 */
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	CardContent,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";

import {
	Code,
	ExpandMore,
	RadioButtonChecked,
	Slideshow,
} from "@mui/icons-material";

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

/**
 * Simple function to join strings with commas and an "and" at the end
 * @param {string[]} items The items to join
 * @returns {string} The JoinAnd(joined items)
 */
const JoinAnd = ({ items }) => {
	const length = items.length;

	if (length === 1) {
		return items[0];
	} else if (length === 2) {
		return items.join(" and ");
	} else {
		return items.slice(0, -1).join(", ") + ", and " + items[length - 1];
	}
}

/**
 * Converts ISP 8601 date string to more unambiguous format
 * @param {string} date The date string in DD-MM-YYYY format
 * @returns {string} The localized date string
 */
const ConvertDate = ({ date }) => {
	const dateObj = Date.parse(date);
	const dateStr = new Date(dateObj).toLocaleDateString(undefined, {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
	return dateStr;
}

/**
 * @param {Object} item The workshop item from the workshops.json JSON file
 * @returns {JSX.Element} The workshop widget
 */
const WorkshopWidget = ({ item }) => {
	return (
		<Accordion>
			<AccordionSummary
				expandIcon={<ExpandMore />}
				aria-controls="panel1a-content"
				id="panel1a-header"
			>
				<CardContent
					sx={{
						flex: '1 0 auto',
						padding: "0 !important",

					}}
				>
					<Typography component="div" variant="h6">
						{item.name ? item.name : "Workshop"}
					</Typography>
					<Typography variant="subtitle1" color="text.secondary" component="div">
						<JoinAnd items={item.host} /> on <ConvertDate date={item.date} />
					</Typography>
				</CardContent>
			</AccordionSummary>

			<AccordionDetails>
				<Typography
					sx={{ whiteSpace: "pre-wrap" }}
				>
					{item.detail}
				</Typography>
				<List>
					{item.code
						?
						<WorkshopButton href={item.code} icon={<Code />} text="Starter code" />
						: null
					}
					{item.slides
						?
						<WorkshopButton href={item.slides} icon={<Slideshow />} text="Slides" />
						: null
					}
					{item.recording
						?
						<WorkshopButton href={item.recording} icon={<RadioButtonChecked />} text="Recording" />
						: null
					}
				</List>
			</AccordionDetails>
		</Accordion>
	);
}

export default WorkshopWidget;
