import { Tabs, Tab } from '@mui/material';

/**
 * TabChanger component for MUI tabs
 * @param {object} props
 * @param {string[]} props.tabList list of years
 * @param {integer} props.page current page
 * @param {function} props.setPage function to set the page
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
