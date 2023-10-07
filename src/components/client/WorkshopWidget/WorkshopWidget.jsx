import { WorkshopButton } from '@/components/client';
import { ConvertDate, JoinAnd, Link, workshopHash } from '@/components/server';
import { Code, ExpandMore, RadioButtonChecked, Slideshow } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, CardContent, List, Typography } from '@mui/material';
import { useSearchParams } from 'next/navigation'

/**
 * @property {{"key": {name: string; date: Date; host: string[]; description: string; code?: string; slides?: string; recording?: string;}[]}[]} item The workshop item from the workshops.json JSON file
 * @returns {JSX.Element} The workshop widget
 */
export const WorkshopWidget = ({ item }) => {
	const searchParams = useSearchParams();

	return (
		<Accordion
			id={workshopHash(item.name, item.date)}
			expanded={ searchParams.get('workshop') === workshopHash(item.name, item.date) }
		>
			<AccordionSummary
				expandIcon={<ExpandMore />}
				aria-controls="panel1a-content"
				id="panel1a-header"
				component={Link}
				scroll={false}
				href={
					(workshopHash(item.name, item.date) === searchParams.get('workshop')) ? `?` : `?workshop=${workshopHash(item.name, item.date)}`
				}
			>
				<CardContent
					sx={{
						flex: '1 0 auto',
						padding: '0 !important',
					}}
				>
					<Typography component="div" variant="h6" sx={{ maxWidth: '60vw' }}>
						{item.name ? item.name : 'Workshop'}
					</Typography>
					<Typography variant="subtitle1" color="text.secondary" component="div" sx={{ maxWidth: '60vw' }}>
						<JoinAnd items={item.host} /> on <ConvertDate date={item.date} />
					</Typography>
				</CardContent>
			</AccordionSummary>

			<AccordionDetails>
				<Typography sx={{ whiteSpace: 'pre-wrap' }}>{item.description}</Typography>
				<List>
					{item.code ? <WorkshopButton href={item.code} icon={<Code />} text="Starter code" /> : null}
					{item.slides ? <WorkshopButton href={item.slides} icon={<Slideshow />} text="Slides" /> : null}
					{item.recording ? (
						<WorkshopButton href={item.recording} icon={<RadioButtonChecked />} text="Recording" />
					) : null}
				</List>
			</AccordionDetails>
		</Accordion>
	);
};
