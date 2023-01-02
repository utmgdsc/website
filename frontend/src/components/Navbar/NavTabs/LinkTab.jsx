import {
	Tab
} from "@mui/material";

import { NavLink as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";

const LinkTab = styled((props) =>
	<Tab component={RouterLink} {...props} />)(
		({ theme }) => ({
			color: theme.palette.text.secondary,
			fontFamily: "inherit",
			fontSize: "1em",
			fontWeight: "normal",
			letterSpacing: "0 !important",
			padding: "1.5em",
			textTransform: 'none',
			whiteSpace: "nowrap",
			'&.Mui-selected': {
				color: theme.palette.text.primary,
				fontWeight: 'bold',
			},
		}),
	);

export default LinkTab;
