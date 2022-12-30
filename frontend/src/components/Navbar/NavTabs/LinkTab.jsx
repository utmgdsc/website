import {
    Tab
} from "@mui/material";

import { NavLink as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";

const LinkTab = styled((props) =>
    <Tab component={RouterLink} {...props} />)(
        ({ theme }) => ({
            color: "#5f6368",
            // display: "inline-block !important",
            fontFamily: "inherit",
            fontSize: "1em",
            fontWeight: "normal",
            letterSpacing: "0 !important",
            padding: "1.5em",
            textTransform: 'none',
            whiteSpace: "nowrap",
            '&.Mui-selected': {
                color: 'black',
                fontWeight: 'bold',
            },
        }),
    );

export default LinkTab;
