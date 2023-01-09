import {
	Tab
} from "@mui/material";

import { NavLink as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";

/**
 * A styled version of the Tab component. It renders a <RouterLink /> component for the navbar.
 * @returns {JSX.Element} a styled version of the Tab component
 */
const LinkTab = styled((props) =>
	<Tab component={RouterLink} {...props} />)(
		({ theme }) => ({
			color: theme.palette.text.secondary,
			fontFamily: "inherit",
			fontSize: "1em",
			fontWeight: "normal",
			letterSpacing: "0 !important",
			padding: "1.5em",
			textTransform: "none",
			whiteSpace: "nowrap",
			"&.Mui-selected": {
				color: theme.palette.text.primary,
				fontWeight: "bold",
			},
		}),
	);

export default LinkTab;
