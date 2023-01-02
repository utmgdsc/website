import React from "react";
import { Tabs } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTabs = styled((props) => (
	<Tabs
		{...props}
		TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
	/>
))(({ theme }) => ({
	'& .MuiTabs-flexContainer': {
		display: 'block',
	},
	'& .MuiTabs-indicator': {
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: 'transparent',
	},
	'& .MuiTabs-indicatorSpan': {
		maxWidth: 50,
		width: '100%',
		backgroundColor: theme.palette.primary.main,
	},
	'& .MuiTabs-scrollButtons.Mui-disabled': {
		opacity: 0.3,
	},
	[theme.breakpoints.down('md')]: {
		'&': {
			order: 3,
			flexBasis: '100%',
		},
	},
}));


export default StyledTabs;
