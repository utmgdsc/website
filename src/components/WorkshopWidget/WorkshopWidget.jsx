import {
  Code,
  ExpandMore,
  RadioButtonChecked,
  Slideshow,
} from '@mui/icons-material';
/** @jsxImportSource @emotion/react */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CardContent,
  List,
  Typography,
} from '@mui/material';

import {
  ConvertDate,
  JoinAnd,
  WorkshopButton,
} from '..';

/**
 * @param {Object} item The workshop item from the workshops.json JSON file
 * @returns {JSX.Element} The workshop widget
 */
export const WorkshopWidget = ({ item }) => {
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
					<Typography component="div" variant="h6" sx={{maxWidth: "60vw"}}>
						{item.name ? item.name : "Workshop"}
					</Typography>
					<Typography variant="subtitle1" color="text.secondary" component="div" sx={{maxWidth: "60vw"}}>
						<JoinAnd items={item.host} /> on <ConvertDate date={item.date} />
					</Typography>
				</CardContent>
			</AccordionSummary>

			<AccordionDetails>
				<Typography
					sx={{ whiteSpace: "pre-wrap" }}
				>
					{item.description}
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
