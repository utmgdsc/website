
'use client'
/** @jsxImportSource @emotion/react */
import './App.scss';

import React, { Suspense, useEffect, useMemo } from 'react';

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
//import PageNotFound from './pages/PageNotFound';
import { GoogleTheme, THEME } from "./theme";

import TagManager from 'react-gtm-module'

const tagManagerArgs = { gtmId: process.env.REACT_APP_GTM_ID }

// TODO add skip to content button
export default function RootLayout({
	children,
  }) {
	const systemTheme = useMediaQuery('(prefers-color-scheme: dark)');
	
	useEffect(()=>{
		console.log("hio")
		let test = window
		console.log(window)
	},[])

	const theme = useMemo(
		() =>
			createTheme(GoogleTheme({
				mode: systemTheme ? THEME.DARK : THEME.LIGHT,
			})),
		[systemTheme],
	);
	console.log("hello")
	console.log(systemTheme)
	console.log(theme.palette.background)
	return (
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
		</ThemeProvider>
	);
  }