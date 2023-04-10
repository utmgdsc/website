import './App.scss';

/** @jsxImportSource @emotion/react */
import React, { Suspense, useMemo } from 'react';

import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom';

import {
	createTheme,
	CssBaseline,
	LinearProgress,
	Skeleton,
	ThemeProvider,
	useMediaQuery,
} from '@mui/material';

import {
	ErrorBoundary,
	Footer,
	Navbar,
} from './components';
import { pages } from './pages';
import PageNotFound from './pages/PageNotFound';
import { GoogleTheme, THEME } from "./theme";

import TagManager from 'react-gtm-module'

const tagManagerArgs = { gtmId: process.env.REACT_APP_GTM_ID }

TagManager.initialize(tagManagerArgs)

// TODO add skip to content button
export const App = () => {
	const systemTheme = useMediaQuery('(prefers-color-scheme: dark)');

	const theme = useMemo(
		() =>
			createTheme(GoogleTheme({
				mode: systemTheme ? THEME.DARK : THEME.LIGHT,
			})),
		[systemTheme],
	);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline enableColorScheme />
			<Router>
				<Navbar pages="pages" />
				<ErrorBoundary fallback={<PageNotFound />} my="25vh">
					<Suspense fallback={
						<div css={{ height: "100vh" }}>
							<LinearProgress title="Page loading" />
							<div className="hero-header-parallax">
								<Skeleton variant="rectangular" animation="wave" height="30rem" />
							</div>
						</div>
					}>
						<Routes>
							{
								pages.map((page, index) => {
									return <Route exact path={page.path} element={page.component} key={index} />;
								})
							}
							<Route path="*" element={<PageNotFound />} />
						</Routes>
					</Suspense>
				</ErrorBoundary>
				<Footer />
			</Router>
		</ThemeProvider>
	);
};
