import {
	Slide,
	useScrollTrigger
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

import React from "react";

// roughly based on https://mui.com/material-ui/react-app-bar/#HideAppBar.js

const ElevationScroll = (props) => {
	const { children } = props;

	const elevationTrigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	const slideTrigger = useScrollTrigger({});

	const theme = useTheme();

	return (
		<Slide
			appear={false}
			direction="down"
			in={!slideTrigger}
			elevation={elevationTrigger ? 4 : 0}
			sx={{ background: elevationTrigger ? theme.palette.background.default : "transparent" }}
		>
			{children}
		</Slide>
	);
}

const ElevationScrollReverse = (props) => {
	const { children } = props;

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return React.cloneElement(children, {
		sx: { boxShadow: trigger ? 0 : 4 },
	});
}

export { ElevationScroll, ElevationScrollReverse }
