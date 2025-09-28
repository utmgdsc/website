import { Box, Grid } from '@mui/material';
import { getData, parseWorkshops } from '~/app/api/workshops/getWorkshopData';
import { WorkshopItem } from '~/app/api/workshops/workshops';
import { InfoCard, TableOfContents, WorkshopSearch, FilteredWorkshopWidget } from '~/components/client';
import { ConvertDate, workshopHash } from '~/components/server';

interface LatestWorkshopsProps {
	/** The number of workshops to display */
	limit: number;
	/** Whether to show the date of the workshop */
	showDate?: boolean;
}

interface InternalLatestWorkshopsProps extends LatestWorkshopsProps {
	/** The workshops to display */
	workshops: { [key: string]: WorkshopItem[] };
}

const InternalLatestWorkshops = async ({ workshops, limit, showDate = false }: InternalLatestWorkshopsProps) => (
	<Grid container spacing={2} sx={{ mb: 4 }}>
		{Object.keys(workshops)
			.reduce<WorkshopItem[]>((acc, key) => {
				return [...acc, ...workshops[key]];
			}, [])
			.sort((a, b) => {
				return new Date(b.date).getTime() - new Date(a.date).getTime();
			})
			.slice(0, limit)
			.map(item => {
				return (
					<Grid size={{ md: 4 }} key={JSON.stringify(item)}>
						<InfoCard
							subtitle={showDate ? ConvertDate({ date: item.date }) : undefined}
							title={item.name}
							href={`/past-workshops#${workshopHash(item.name, item.date)}`}
							description={item.description}
							lines={2}
							external={false}
						/>
					</Grid>
				);
			})}
	</Grid>
);

interface WorkshopListProps {
	/** The workshops to display */
	workshops: { [key: string]: WorkshopItem[] };
}

const WorkshopList = async ({ workshops }: WorkshopListProps) => {
	return (
		<Grid container spacing={2}>
			<Grid size={{ md: 3 }}>
				<TableOfContents />
			</Grid>

			<Grid size={{ md: 9 }}>
				<WorkshopSearch />

				{Object.keys(workshops).map(category => {
					return (
						<Box key={category}>
							<h2 className="resources" id={category.replace(/\s/g, '')}>
								{category}
							</h2>
							{workshops[category]
								.sort((a, b) => {
									return new Date(b.date).getTime() - new Date(a.date).getTime();
								})
								.map(item => {
									return <FilteredWorkshopWidget key={`${item.name}${item.date}`} item={item} />;
								})}
						</Box>
					);
				})}
			</Grid>
		</Grid>
	);
};

export const LatestWorkshops = async ({ limit, showDate }: LatestWorkshopsProps) => {
	const workshops = parseWorkshops(await getData());
	return <InternalLatestWorkshops limit={limit} workshops={workshops} showDate={showDate} />;
};

export const WorkshopArchiveInfo = async () => {
	const workshops = parseWorkshops(await getData());

	return (
		<>
			<InternalLatestWorkshops workshops={workshops} limit={3} />
			<WorkshopList workshops={workshops} />
		</>
	);
};
