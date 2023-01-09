/** @jsxImportSource @emotion/react */
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import { CssBaseline, ThemeProvider, LinearProgress, Skeleton } from "@mui/material";

import GoogleTheme from "./theme";

import pages from "./pages/pages";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

// TODO add skip to content button
const App = () => {
	// detect change of theme and update theme
	// a defense for this controversial feature - when the user changes the theme,
	// since the CSS media query is updated but the MUI theme is not, the theme will
	// appear to have both light and dark mode enabled at the same time, which is
	// not a good user experience. This is a workaround for that, but it is not a
	// good solution.

	// Ideally, the theme should be updated when the user changes the theme, that is,
	// GoogleTheme has to be reimported, since the check for prefersDarkMode() is
	// only done once when the theme is imported, per how the MUI docs did it.

	// MUI is working on a solution for this, which is to switch to a css-variable
	// based-solution; however, it is experimental and breaks everything.
	// Hopefully it will be released soon, see the link below:
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

export default App;
