import { ErrorBoundary } from '~/components/client';
import { YearedEventList, getYearTabs } from '~/components/server';

interface EventsProps {
	/** Page slugs */
	params: Promise<{
		/** The year to display events for */
		year: string[];
	}>;
}

/**
 * @return Events page component using EventList
 */
const Events = async ({ params }: EventsProps) => {
	/** the current date */
	const today = new Date();

	/** all years gdsc has had events */
	const years = await getYearTabs();

	/** the year to display events for */
	const year = (await params).year ? Number((await params).year[0]) : years[0];

	return (
		<ErrorBoundary>
			<YearedEventList
				from={new Date(Number(year), 0, 1)}
				to={year === today.getFullYear() ? today : new Date(Number(year), 11, 31)}
			/>
		</ErrorBoundary>
	);
};

export default Events;
