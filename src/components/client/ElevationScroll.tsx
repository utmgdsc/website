import React from 'react';
import type {} from '@mui/material/themeCssVarsAugmentation';
import type { SlideProps, Theme } from '@mui/material';
import { Slide, useScrollTrigger } from '@mui/material';

/**
 * Hides children on scroll down, shows on scroll up
 * @see https://mui.com/material-ui/react-app-bar/#HideAppBar.js
 */
export const HideOnScroll = ({ children }: { children: SlideProps['children'] }) => {
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
			sx={(theme: Theme) => ({
				background: elevationTrigger ? theme.vars.palette.background.default : 'transparent !important',
			})}
		>
			{children}
		</Slide>
	);
};
