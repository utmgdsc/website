import { Tabs, Tab } from '@mui/material';
import { Link } from '@/components/server';

/**
 * TabChanger component for MUI tabs
 * @property {string[]} tabList list of years
 * @property {integer} page current page
 * @property {function} setPage function to set the page
 * @property {JSX.Element} TabComponent component to use for tabs
 * @property {object} tabProps props to pass to the Tab component
 * @returns {JSX.Element} TabChanger component
 */
export const TabChanger = ({ tabList, page, setPage }) => {
	// if there is only one tab, don't show tabs
	if (tabList.length <= 1) {
		return <></>;
	}

	return (
		<Tabs
			value={page}
			onChange={(_, index) => {
				setPage(index);
			}}
			sx={{
				my: '1rem',
			}}
		>
			{tabList.map((year, id) => (
				<Tab key={id} label={year} />
			))}
		</Tabs>
	);
};

/**
 * TabChanger component for MUI tabs
 * @property {string[]} tabList list of years
 * @property {integer} page current page
 * @property {string} prefix prefix to add to the href
 * @returns {JSX.Element} TabChanger component
 */
export const LinkBasedTabChanger = ({ tabList, page, prefix }) => {
	// if there is only one tab, don't show tabs
	if (tabList.length <= 1) {
		return <></>;
	}

	return (
		<Tabs
			value={page}
			sx={{
				my: '1rem',
			}}
		>
			{tabList.map((year, id) => (
				<Tab key={id} label={year} component={Link} href={`${prefix}/${year}`} scroll={false} />
			))}
		</Tabs>
	);
};
