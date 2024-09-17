import createTheme from '@mui/material/styles/createTheme';

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
	action: {
		light: {
			active: '#000',
			disabled: '#5f6368',
		},
	},
	// Used by `getContrastText()` to maximize the contrast between
	// the background and the text.
	contrastThreshold: 3,
	// Used by the functions below to shift a color's luminance by approximately
	// two indexes within its tonal palette.
	// E.g., shift from Red 500 to Red 300 or Red 700.
	tonalOffset: 0.2,
};

/**
 * Generates a GoogleTheme
 * @property {string} mode the theme mode
 */
export const googleTheme = createTheme({
	cssVariables: true,
	colorSchemes: { dark: true },
	light: sharedPalette,
	dark: sharedPalette,
	typography: {
		fontFamily: `var(--google-sans)`,
		h1: { fontFamily: `var(--google-sans-display)` },
		h2: { fontFamily: `var(--google-sans-display)` },
		h3: { fontFamily: `var(--google-sans-display)` },
		h4: {
			fontFamily: `var(--google-sans-display)`, color: 'text.primary',
			fontWeight: 'bold',
			lineHeight: '2.5em',
		},
		h5: { fontFamily: `var(--google-sans-display)` },
		h6: { fontFamily: `var(--google-sans-display)` },
		subtitle1: { fontFamily: `var(--google-sans-display)` },
		subtitle2: { fontFamily: `var(--google-sans-display)` },
	},
});
