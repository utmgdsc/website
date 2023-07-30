'use client';
import { createTheme, useMediaQuery } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import { NextAppDirEmotionCacheProvider } from './EmotionCache';
import { GoogleTheme, THEME } from './theme';

/**
 * From MUI Starter Code
 * @param {React.ReactNode} children
 *
 * @see https://github.com/mui/material-ui/blob/master/examples/material-next-app-router-ts/src/components/ThemeRegistry/ThemeRegistry.tsx
 */
export const ThemeRegistry = ({ children }) => {
	const systemTheme = useMediaQuery('(prefers-color-scheme: dark)');

	const theme = React.useMemo(
		() =>
			createTheme(
				GoogleTheme({
					mode: systemTheme ? THEME.DARK : THEME.LIGHT,
				}),
			),
		[systemTheme],
	);

	return (
		<NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
			<ThemeProvider theme={theme}>
				<CssBaseline enableColorScheme />
				{children}
			</ThemeProvider>
		</NextAppDirEmotionCacheProvider>
	);
};
