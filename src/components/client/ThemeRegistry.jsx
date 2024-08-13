import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { googleTheme } from '../../data/theme';

/**
 * From MUI Starter Code
 * @param {object} props
 * @param {React.ReactNode} props.children
 *
 * @see https://github.com/mui/material-ui/blob/master/examples/material-ui-nextjs/src/app/layout.js
 */
export const ThemeRegistry = ({ children }) => {
	return (
		<AppRouterCacheProvider options={{ enableCssLayer: true }}>
			<ThemeProvider theme={googleTheme}>
				<CssBaseline enableColorScheme />
				{children}
			</ThemeProvider>
		</AppRouterCacheProvider>
	);
};
