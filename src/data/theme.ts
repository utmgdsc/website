import { PaletteOptions } from '@mui/material';
import { createTheme } from '@mui/material/styles';

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
		fontFamily: `var(--font-google-sans)`,
		h4: {
			color: 'text.primary',
			fontWeight: 'bold',
			lineHeight: '2.5em',
		},
		h5: {
			fontWeight: 'bold',
		},
		body2: { lineHeight: 2, fontSize: '1rem' },
	},
});
