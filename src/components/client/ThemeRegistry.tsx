import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { googleTheme } from '../../data/theme';

/**
 * From MUI Starter Code
 *
 * @see https://github.com/mui/material-ui/blob/master/examples/material-ui-nextjs-ts/src/app/layout.tsx
 */
export const ThemeRegistry = ({ children }: { children: React.ReactNode }) => {
	return (
		<AppRouterCacheProvider options={{ enableCssLayer: true }}>
			<ThemeProvider theme={googleTheme}>
				<CssBaseline enableColorScheme />
				{children}
			</ThemeProvider>
		</AppRouterCacheProvider>
	);
};
