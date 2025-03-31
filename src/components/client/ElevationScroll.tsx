import React from 'react';

import { Slide, useScrollTrigger } from '@mui/material';

/**
 * Hides children on scroll down, shows on scroll up
 * @param {Object} props
 * @param {React.ReactNode} props.children The children to hide/show
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
			// @ts-expect-error undocumented prop
			elevation={elevationTrigger ? 4 : 0}
			sx={({ vars }) => ({
				background: elevationTrigger ? vars.palette.background.default : 'transparent !important',
			})}
		>
			{children}
		</Slide>
	);
};
