import React from 'react';

import { Slide, useScrollTrigger } from '@mui/material';
import { useTheme } from '@mui/material/styles';

/**
 * Hides children on scroll down, shows on scroll up
 * @param {React.ReactNode} children The children to hide/show
 * @see https://mui.com/material-ui/react-app-bar/#HideAppBar.js
 */
export const HideOnScroll = ({ children }) => {
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
			sx={{ background: elevationTrigger ? theme.palette.background.default : 'transparent' }}
		>
			{children}
		</Slide>
	);
};

/**
 * Adds elevation to children on scroll up
 * @param {React.ReactNode} children The children to add elevation to
 * @see https://mui.com/material-ui/react-app-bar/#HideAppBar.js
 */
export const ElevationScroll = ({ children }) => {
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return React.cloneElement(children, {
		sx: { boxShadow: trigger ? 0 : 4 },
	});
};
