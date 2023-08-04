import './App.scss';

import React from 'react';

import { ErrorBoundary, Footer, Navbar, TagManager, ThemeRegistry } from '../components';

export const metadata = {
	title: {
		default: "GDSC UTM",
		template: "%s - GDSC UTM",
	},
	description: "GDSC is a student-led community backed by Google Developers aimed at empowering undergraduate students from all disciplines to grow their knowledge in technology, build solutions for their local communities, and connect with other members from the Google community.",
}

// TODO add skip to content button
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<TagManager>
					<ThemeRegistry>
						<Navbar pages="pages" />
						<ErrorBoundary fallback={<div></div>} my="25vh">
							{children}
						</ErrorBoundary>
						<Footer />
					</ThemeRegistry>
				</TagManager>
			</body>
		</html>
	);
}
