'use client';
/** @jsxImportSource @emotion/react */
import './App.scss';

import React, { Suspense, useEffect } from 'react';

import { LinearProgress, Skeleton } from '@mui/material';

import { ErrorBoundary, Footer, Navbar, ThemeRegistry } from '../components';

import TagManager from 'react-gtm-module';

// export const metadata = {
//  title: {
//      template: "GDSC UTM - %s",
//      default: "GDSC UTM",
//  },
//  description: "GDSC is a student-led community backed by Google Developers aimed at empowering undergraduate students from all disciplines to grow their knowledge in technology, build solutions for their local communities, and connect with other members from the Google community.",
// }

// TODO add skip to content button
export default function RootLayout({ children }) {
	useEffect(() => {
		const tagManagerArgs = { gtmId: process.env.NEXT_PUBLIC_GTM_ID };

		TagManager.initialize(tagManagerArgs);
	}, []);

	return (
		<html lang="en">
			<body>
				<ThemeRegistry>
					<Navbar pages="pages" />
					<ErrorBoundary fallback={<div></div>} my="25vh">
						<Suspense
							fallback={
								<div css={{ height: '100vh' }}>
									<LinearProgress title="Page loading" />
									<div className="hero-header-parallax">
										<Skeleton variant="rectangular" animation="wave" height="30rem" />
									</div>
								</div>
							}
						>
							{children}
						</Suspense>
					</ErrorBoundary>
					<Footer />
				</ThemeRegistry>
			</body>
		</html>
	);
}
