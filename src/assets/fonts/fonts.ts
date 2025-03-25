import localFont from 'next/font/local';

/**
 * The variable name for the Google Sans font.
 */
// ! Keep this in sync the `variable` property in the `GoogleSans` object.
export const GoogleSansVariable = '--google-sans';

/**
 * The variable name for the Google Sans Display font.
 */
// ! Keep this in sync the `variable` property in the `GoogleSansDisplay` object.
export const GoogleSansDisplayVariable = '--google-sans-display';

/**
 * Display fonts are for headings and titles and is generally
 * for 14 point or larger.
 */
export const GoogleSansDisplay = localFont({
	src: [
		{
			path: './GoogleSansDisplay-v1.27/GoogleSansDisplay-Bold.woff2',
			weight: 'bold',
			style: 'normal',
		},
		{
			path: './GoogleSansDisplay-v1.27/GoogleSansDisplay-BoldItalic.woff2',
			weight: 'bold',
			style: 'italic',
		},
		{
			path: './GoogleSansDisplay-v1.27/GoogleSansDisplay-Italic.woff2',
			weight: 'normal',
			style: 'italic',
		},
		{
			path: './GoogleSansDisplay-v1.27/GoogleSansDisplay-Regular.woff2',
			weight: 'normal',
			style: 'normal',
		},
		{
			path: './GoogleSansDisplay-v1.27/GoogleSansDisplay-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: './GoogleSansDisplay-v1.27/GoogleSansDisplay-MediumItalic.woff2',
			weight: '500',
			style: 'italic',
		},
	],
	variable: '--google-sans-display',
	adjustFontFallback: 'Arial',
});

/**
 * Text fonts are for body text and is generally for 13 point
 */
export const GoogleSans = localFont({
	src: [
		{
			path: './GoogleSans-v1.27/GoogleSans-Bold.woff2',
			weight: 'bold',
			style: 'normal',
		},
		{
			path: './GoogleSans-v1.27/GoogleSans-BoldItalic.woff2',
			weight: 'bold',
			style: 'italic',
		},
		{
			path: './GoogleSans-v1.27/GoogleSans-Italic.woff2',
			weight: 'normal',
			style: 'italic',
		},
		{
			path: './GoogleSans-v1.27/GoogleSans-Regular.woff2',
			weight: 'normal',
			style: 'normal',
		},
		{
			path: './GoogleSans-v1.27/GoogleSans-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: './GoogleSans-v1.27/GoogleSans-MediumItalic.woff2',
			weight: '500',
			style: 'italic',
		},
	],
	variable: '--google-sans',
	adjustFontFallback: 'Arial',
});
