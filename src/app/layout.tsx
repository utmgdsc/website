import { ErrorBoundary, Footer, Navbar, TagManager, ThemeRegistry } from '~/components/client';

import { Google_Sans_Flex } from 'next/font/google';
import type { ReactNode } from 'react';

const googleSans = Google_Sans_Flex({
	variable: '--font-google-sans',
	subsets: ['latin'],
	axes: ['wdth'],
	display: 'swap',
	fallback: ['sans-serif'],
});

export const metadata = {
	title: {
		default: 'GDG UTM',
		template: '%s - GDG UTM',
	},
	description:
		'GDG is a student-led community backed by Google Developers aimed at empowering undergraduate students from all disciplines to grow their knowledge in technology, build solutions for their local communities, and connect with other members from the Google community.',
};

// TODO add skip to content button
export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={googleSans.variable}>
			<body>
				<TagManager>
					<ThemeRegistry>
						<Navbar />
						<ErrorBoundary my="25vh">{children}</ErrorBoundary>
						<Footer />
					</ThemeRegistry>
				</TagManager>
			</body>
		</html>
	);
}
