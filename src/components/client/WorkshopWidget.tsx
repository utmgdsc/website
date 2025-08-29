import { Accordion, AccordionSummary, WorkshopButton } from '~/components/client';
import { AccordionDetails, Box, List, Typography } from '@mui/material';
import { Code, ExpandMore, RadioButtonChecked, Slideshow } from '@mui/icons-material';
import { ConvertDate, JoinAnd, workshopHash } from '~/components/server';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { WorkshopItem } from '~/app/api/workshops/workshops';

/**
 * Filters the workshops based on the search term
 */
const filterWorkshop = (workshop: WorkshopItem, search: string): boolean => {
	return (
		workshop.name.toLowerCase().includes(search.toLowerCase()) ||
		workshop.host.some(host => host.toLowerCase().includes(search.toLowerCase())) ||
		workshop.description.toLowerCase().includes(search.toLowerCase())
	);
};

/**
 * A workshop widget
 */
export const WorkshopWidget = ({ item }: { item: WorkshopItem }) => {
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
						<JoinAnd items={item.host} /> on <ConvertDate date={item.date} />.
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

const InternalFilteredWorkshopWidget = ({ item }: { item: WorkshopItem }) => {
	const searchParams = useSearchParams();

	const search = searchParams.get('search') ?? '';
	if (search && filterWorkshop(item, search) === false) {
		return null;
	}

	return <WorkshopWidget item={item} />;
};

/**
 * A workshop widget
 */
export const FilteredWorkshopWidget = ({ item }: { item: WorkshopItem }) => (
	<Suspense fallback={<WorkshopWidget item={item} />}>
		<InternalFilteredWorkshopWidget item={item} />
	</Suspense>
);
