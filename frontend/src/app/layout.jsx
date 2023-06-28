'use client'
/** @jsxImportSource @emotion/react */
import './App.scss';

import React, { Suspense, useMemo, useEffect } from 'react';

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
} from '../components';
import { GoogleTheme, THEME } from "./theme";

// import TagManager from 'react-gtm-module'

// TODO add skip to content button
export default function RootLayout({
	children,
}) {
	const systemTheme = useMediaQuery('(prefers-color-scheme: dark)');

	const theme = useMemo(
		() =>
			createTheme(GoogleTheme({
				mode: systemTheme ? THEME.DARK : THEME.LIGHT,
			})),
		[systemTheme],
	);

	useEffect(()=>{
		const tagManagerArgs = { gtmId: process.env.REACT_APP_GTM_ID }

		TagManager.initialize(tagManagerArgs)
	},[])
	
	return (
		<html lang="en">
			<body>
				<ThemeProvider theme={theme}>
					<CssBaseline enableColorScheme />
					<Navbar pages="pages"/>
					<ErrorBoundary fallback={<div></div>} my="25vh">
						<Suspense fallback={
							<div css={{ height: "100vh" }}>
								<LinearProgress title="Page loading" />
								<div className="hero-header-parallax">
									<Skeleton variant="rectangular" animation="wave" height="30rem" />
								</div>
							</div>
						}>
							{children}
						</Suspense>
					</ErrorBoundary>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
  