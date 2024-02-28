import { YearedEventList } from '@/components/server';

/**
 * @property {string} year - The year to display events for
 *
 * @return {JSX.Element} Events page component using EventList
 */
const Events = async ({ params }) => {
	/** the current date */
	const today = new Date();

	/** the year to display events for */
	const year = params.year ? Number(params.year[0]) : today.getFullYear();

	return (
		<YearedEventList from={new Date(year, 0, 1)} to={new Date(year, 11, 31)} />
	);
};

export default Events;
