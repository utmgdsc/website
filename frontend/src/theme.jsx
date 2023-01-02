import { createTheme } from '@mui/material/styles';

/**
 * @return {boolean} true if the user has set their OS to dark mode
 */
const prefersDarkMode = () => {
	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		return true;
	}
	return false;
}

const GoogleTheme = createTheme({
	palette: {
		mode: prefersDarkMode() ? "dark" : "light",
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
			}
		},
		// Used by `getContrastText()` to maximize the contrast between
		// the background and the text.
		contrastThreshold: 3,
		// Used by the functions below to shift a color's luminance by approximately
		// two indexes within its tonal palette.
		// E.g., shift from Red 500 to Red 300 or Red 700.
		tonalOffset: 0.2,
	},
	typography: {
		fontFamily: [
			'Google Sans Display',
			'Google Sans',
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif'
		].join(','),
	}
});

export default GoogleTheme;
export { prefersDarkMode };
