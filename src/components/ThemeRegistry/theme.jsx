/**
 * enum for theme types
 * @readonly
 * @enum {string}
 */
export const THEME = {
	/** Light theme
	 * @type {string}
	 */
	LIGHT: 'light',
	/** Dark theme
	 * @type {string}
	 */
	DARK: 'dark',
	/** System default theme
	 * @type {string}
	 */
	DEFAULT: 'default',
};

/**
 * Generates a GoogleTheme
 * @param {string} mode the theme mode
 */
export const GoogleTheme = ({ mode }) => {
	return {
		palette: {
			mode: mode,
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
		},
		typography: {
			fontFamily: `var(--google-sans)`,
			h1: { fontFamily: `var(--google-sans-display)` },
			h2: { fontFamily: `var(--google-sans-display)` },
			h3: { fontFamily: `var(--google-sans-display)` },
			h4: { fontFamily: `var(--google-sans-display)` },
			h5: { fontFamily: `var(--google-sans-display)` },
			h6: { fontFamily: `var(--google-sans-display)` },
			subtitle1: { fontFamily: `var(--google-sans-display)` },
			subtitle2: { fontFamily: `var(--google-sans-display)` },
		},
	};
};
