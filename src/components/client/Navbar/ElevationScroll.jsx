import React from 'react';

import { Slide, useScrollTrigger } from '@mui/material';

/**
 * Hides children on scroll down, shows on scroll up
 * @property {React.ReactNode} children The children to hide/show
 * @see https://mui.com/material-ui/react-app-bar/#HideAppBar.js
 */
export const HideOnScroll = ({ children }) => {
	const elevationTrigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	const slideTrigger = useScrollTrigger({});

	return (
		<Slide
			appear={false}
			direction="down"
			in={!slideTrigger}
			elevation={elevationTrigger ? 4 : 0}
			sx={{ background: theme => elevationTrigger ? theme.palette.background.default : 'transparent' }}
		>
			{children}
		</Slide>
	);
};

/**
 * Adds elevation to children on scroll up
 * @property {React.ReactNode} children The children to add elevation to
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
