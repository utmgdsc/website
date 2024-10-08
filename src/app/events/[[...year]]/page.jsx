import { ErrorBoundary } from '~/components/client';
import { YearedEventList } from '~/components/server';

/**
 * @param {object} props
 * @param {object} props.params - page slugs
 * @param {string} props.params.year - The year to display events for
 *
 * @return {JSX.Element} Events page component using EventList
 */
const Events = async ({ params }) => {
	/** the current date */
	const today = new Date();

	/** the year to display events for */
	const year = (await params.year) ? Number(await params.year[0]) : today.getFullYear();

	return (
		<ErrorBoundary>
			<YearedEventList
				from={new Date(year, 0, 1)}
				to={year === today.getFullYear() ? today : new Date(year, 11, 31)}
			/>
		</ErrorBoundary>
	);
};

export default Events;
