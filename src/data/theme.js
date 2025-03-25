import createTheme from '@mui/material/styles/createTheme';
import { GoogleSansVariable, GoogleSansDisplayVariable } from '~/assets/fonts/fonts';

const sharedPalette = {
	primary: {
		main: '#4285f4',
	},
	error: {
		main: '#ea4335',
	},
	warning: {
		main: '#fbbc04',
	},
	info: {
		main: '#4285f4',
	},
	success: {
		main: '#0f9d58',
	},
	// Used by `getContrastText()` to maximize the contrast between
	// the background and the text.
	// contrastThreshold: 3,
	// Used by the functions below to shift a color's luminance by approximately
	// two indexes within its tonal palette.
	// E.g., shift from Red 500 to Red 300 or Red 700.
	// tonalOffset: 0.2,
};

/**
 * Generates a GoogleTheme
 */
export const googleTheme = createTheme({
	cssVariables: true,
	colorSchemes: { dark: true },
	light: sharedPalette,
	dark: sharedPalette,
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
		h5: { fontFamily: `var(${GoogleSansDisplayVariable})` },
		h6: { fontFamily: `var(${GoogleSansDisplayVariable})` },
		subtitle1: { fontFamily: `var(${GoogleSansDisplayVariable})` },
		subtitle2: { fontFamily: `var(${GoogleSansDisplayVariable})` },
		body2: { lineHeight: 2, fontSize: '1rem' },
	},
});
