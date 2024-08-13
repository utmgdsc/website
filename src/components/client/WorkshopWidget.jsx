import { Accordion, AccordionSummary, WorkshopButton } from '~/components/client';
import { ConvertDate, JoinAnd, workshopHash } from '~/components/server';
import { Code, ExpandMore, RadioButtonChecked, Slideshow } from '@mui/icons-material';
import { AccordionDetails, Box, List, Typography } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

/**
 * A workshop item
 * @typedef {Object} WorkshopItem
 * @property {string} name The name of the workshop
 * @property {Date} date The date of the workshop
 * @property {string[]} host The host of the workshop
 * @property {string} description The description of the workshop
 * @property {string} [code] The link to the starter code
 * @property {string} [slides] The link to the slides
 * @property {string} [recording] The link to the recording
 */

/**
 * Filters the workshops based on the search term
 * @param {WorkshopItem} workshop The workshop item
 * @param {string} search The search term
 */
const filterWorkshop = (workshop, search) => {
	return (
		workshop.name.toLowerCase().includes(search.toLowerCase()) ||
		workshop.host.some(host => host.toLowerCase().includes(search.toLowerCase())) ||
		workshop.description.toLowerCase().includes(search.toLowerCase())
	);
};

/**
 * A workshop widget
 *
 * @param {object} props
 * @param {WorkshopItem} props.item The workshop item from the workshops.json JSON file
 * @returns {JSX.Element} The workshop widget
 */
export const WorkshopWidget = ({ item }) => {
	return (
		<Accordion id={workshopHash(item.name, item.date)}>
			<AccordionSummary
				expandIcon={<ExpandMore />}
				sx={{
					width: '100%',
				}}
			>
				<Box
					sx={{
						flex: '1 0 auto',
						padding: '0 !important',
						textAlign: 'left',
					}}
				>
					<Typography component="div" variant="h6" sx={{ maxWidth: '60vw' }}>
						{item.name ? item.name : 'Workshop'}
					</Typography>
					<Typography
						variant="subtitle1"
						component="div"
						sx={{
							color: 'text.secondary',
							maxWidth: '60vw',
						}}
					>
						<JoinAnd items={item.host} /> on <ConvertDate date={item.date} />
					</Typography>
				</Box>
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

const _FilteredWorkshopWidget = ({ item }) => {
	const searchParams = useSearchParams();

	if (searchParams.get('search') && filterWorkshop(item, searchParams.get('search')) === false) {
		return null;
	}

	return <WorkshopWidget item={item} />;
};

/**
 * A workshop widget
 * @param {object} props
 * @param {WorkshopItem} props.item The workshop item from the workshops.json JSON file
 * @param {boolean} [respondToSearchParam=false] Whether to respond to the search parameter
 * @returns {JSX.Element} The workshop widget
 */
export const FilteredWorkshopWidget = ({ item }) => (
	<Suspense fallback={<WorkshopWidget item={item} />}>
		<_FilteredWorkshopWidget item={item} />
	</Suspense>
);
