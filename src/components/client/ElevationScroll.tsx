import { Slide, Theme, useScrollTrigger } from '@mui/material';
import type { ReactElement } from 'react';

/**
 * Hides children on scroll down, shows on scroll up
 * @see https://mui.com/material-ui/react-app-bar/#HideAppBar.js
 */
export const HideOnScroll = ({
	children,
}: {
	/** the children will be hidden/shown based on scroll */
	children: ReactElement;
}) => {
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
			sx={({ vars }: Theme) => ({
				background: elevationTrigger ? vars.palette.background.default : 'transparent !important',
			})}
		>
			{children}
		</Slide>
	);
};
