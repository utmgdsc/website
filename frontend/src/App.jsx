import './App.scss';

/** @jsxImportSource @emotion/react */
import React, { Suspense } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import {
  CssBaseline,
  LinearProgress,
  Skeleton,
  ThemeProvider,
} from '@mui/material';

import {
  ErrorBoundary,
  Footer,
  Navbar,
} from './components';
import { pages } from './pages';
import PageNotFound from './pages/PageNotFound';
import { GoogleTheme } from './theme';

// TODO add skip to content button
export const App = () => {
	// HACK: detect change of theme and update theme by reloading the page
	// will be replaced using the following when it is released
	// https://mui.com/material-ui/experimental-api/css-theme-variables/overview/
	window.matchMedia("(prefers-color-scheme: dark)").onchange = () => {
		window.location.reload();
	};

	return (
		<ThemeProvider theme={GoogleTheme}>
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
