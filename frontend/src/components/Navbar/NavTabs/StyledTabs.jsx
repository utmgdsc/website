import React from "react";
import { Tabs } from "@mui/material";
import { styled } from "@mui/material/styles";

/**
 * A styled version of the Tabs component. It renders the tabs list for the navbar.
 * It should be responsive to the screen size when used with the Navbar component.
 * @returns {JSX.Element} a styled version of the Tabs component
 */
const StyledTabs = styled((props) => (
	<Tabs
		{...props}
		TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
	/>
))(({ theme }) => ({
	"& .MuiTabs-flexContainer": {
		display: "block",
	},
	"& .MuiTabs-indicator": {
		display: "flex",
		justifyContent: "center",
		backgroundColor: "transparent",
	},
	"& .MuiTabs-indicatorSpan": {
		maxWidth: 50,
		width: "100%",
		backgroundColor: theme.palette.primary.main,
	},
	"& .MuiTabs-scrollButtons.Mui-disabled": {
		opacity: 0.3,
	},
	flexGrow: 1, // so that the arrows don't show up momentarily on page switch
	[theme.breakpoints.down("md")]: {
		"&": {
			// responsive 2 row layout when used with the Navbar component
			order: 3, // after social buttons
			flexBasis: "100%", // take up row
		},
	},
}));


export default StyledTabs;
