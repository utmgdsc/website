import { PaletteOptions } from '@mui/material';
import createTheme from '@mui/material/styles/createTheme';
import { GoogleSansVariable, GoogleSansDisplayVariable } from '~/assets/fonts/fonts';

export const GoogleBlue = '#4285F4';
export const GoogleRed = '#EA4335';
export const GoogleYellow = '#F9AB00';
export const GoogleGreen = '#34A853';
export const GoogleGrey = '#5F6368';

const palette: PaletteOptions = {
	primary: {
		main: GoogleBlue,
	},
	error: {
		main: GoogleRed,
	},
	warning: {
		main: GoogleYellow,
	},
	info: {
		main: GoogleBlue,
	},
	success: {
		main: GoogleGreen,
	},
	grey: {
		500: GoogleGrey,
	},
};

/**
 * Generates a GoogleTheme
 */
export const googleTheme = createTheme({
	cssVariables: true,
	colorSchemes: {
		light: { palette },
		dark: { palette },
	},
	typography: {
		fontFamily: `var(${GoogleSansVariable})`,
		h1: { fontFamily: `var(${GoogleSansDisplayVariable})` },
		h2: { fontFamily: `var(${GoogleSansDisplayVariable})` },
		h3: { fontFamily: `var(${GoogleSansDisplayVariable})` },
		h4: {
			fontFamily: `var(${GoogleSansDisplayVariable})`,
			color: 'text.primary',
			fontWeight: 'bold',
			lineHeight: '2.5em',
		},
		h5: {
			fontFamily: `var(${GoogleSansDisplayVariable})`,
			fontWeight: 'bold',
		},
		h6: { fontFamily: `var(${GoogleSansDisplayVariable})` },
		subtitle1: { fontFamily: `var(${GoogleSansDisplayVariable})` },
		subtitle2: { fontFamily: `var(${GoogleSansDisplayVariable})` },
		body2: { lineHeight: 2, fontSize: '1rem' },
	},
});
