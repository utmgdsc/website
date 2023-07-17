'use client';
import { createTheme, useMediaQuery } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import { GoogleTheme, THEME } from './theme';

// This implementation is from https://github.com/mui/material-ui/blob/master/examples/material-next-app-router-ts/src/components/ThemeRegistry/ThemeRegistry.tsx
// export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
export default function ThemeRegistry({ children }) {
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
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
