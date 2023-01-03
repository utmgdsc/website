/** @jsxImportSource @emotion/react */
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";

import Navbar from "./components/Navbar";
import PageNotFound from "./pages/PageNotFound";

import { CssBaseline, ThemeProvider, LinearProgress, Skeleton } from "@mui/material";

import pages from "./pages/pages";

import GoogleTheme from "./theme";

const Footer = React.lazy(() => import("./components/Footer"));

// todo add skip to content button
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
								return <Route path={page[1]} element={page[2]} key={index} />;
							})
						}
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</Suspense>
			</Router>
			<Footer />
		</ThemeProvider>
	);
};

export default App;
