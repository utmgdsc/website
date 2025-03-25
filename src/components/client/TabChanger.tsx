import { Tabs, Tab } from '@mui/material';

interface TabChangerProps {
	/** List of years to display in the tabs */
	tabList: string[];
	/** Current page index */
	page: number;
	/** Function to set the current page index */
	setPage: (page: number) => void;
}

/**
 * TabChanger component for MUI tabs
 */
export const TabChanger = ({ tabList, page, setPage }: TabChangerProps) => {
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
