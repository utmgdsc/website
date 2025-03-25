import { AppBar, Box, ButtonGroup, Container, Fab, Tabs, Toolbar, useScrollTrigger, useTheme } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import bracket from '~/assets/graphics/bracket.svg';
import bracketDark from '~/assets/graphics/bracket_colourless.svg';
import { ThemedImage } from '~/components/client';
import { pages } from '~/data/NavbarTabData';
import { CommunityDevButton, DiscordButton, GitHubButton, InstagramButton } from '~/data/SocialButton';
import { HideOnScroll } from './ElevationScroll';
import { LinkTab } from './LinkTab';

/** gdsc button logo */
const ButtonLogo = () => {
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return (
		<Fab
			variant="extended"
			aria-label="Home"
			style={{
				minHeight: '30px',
				minWidth: '94px',
			}}
			component={Link}
			sx={{
				background: theme => theme.vars.palette.background.paper + ' !important',
				boxShadow: trigger ? 0 : 4,
			}}
			href="/"
			id="gdsc-home-btn"
		>
			<ThemedImage
				srcLight={bracket}
				srcDark={bracketDark}
				isSVG={true}
				alt="Google Developers Bracket Logo"
				pictureProps={{
					sx: {
						display: 'flex',
						'@media (prefers-color-scheme: dark)': {
							filter: 'invert(1)',
						},
					},
				}}
				height={48}
				width={48}
				draggable="false"
				style={{
					userSelect: 'none',
				}}
				id="gdsc-home-btn-bracket-logo"
				className="invert-on-dark"
			/>
		</Fab>
	);
};

/** Use the current pathname to determine the current tab */
const useNavbarTabs = () => {
	/* update navbar tabs on path change */
	const pathname = usePathname();

	/** get current tab or default to empty string */
	const getTab = () => `${pathname.toLowerCase().split('/')[1]}`;

	// use only the first part of the path to determine the tab
	// so that sub pages are also highlighted in the navbar
	const [currentTab, setCurrentTab] = useState(getTab());

	useEffect(() => {
		setCurrentTab(getTab());
	}, [pathname]);

	/** all pages that should be included in the navbar */
	const processedPages = pages.filter(page => page.includeInNavbar !== false).map(page => page.path.replace('/', ''));

	/** check if current tab is in the list of pages */
	const isValidTab = () => processedPages.includes(currentTab);

	return isValidTab() ? currentTab : '';
};

const NavbarTabs = () => {
	const theme = useTheme();
	const currentTab = useNavbarTabs();

	return (
		<Tabs
			aria-label="Main navigation"
			component="nav"
			id="main-nav"
			TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
			value={currentTab}
			variant="scrollable"
			sx={{
				'& .MuiTabs-flexContainer': {
					display: 'block',
				},
				'& .MuiTabs-indicator': {
					display: 'flex',
					justifyContent: 'center',
					backgroundColor: 'transparent',
				},
				'& .MuiTabs-indicatorSpan': {
					maxWidth: 50,
					width: '100%',
					backgroundColor: theme => theme.vars.palette.primary.main,
				},
				'& .MuiTabs-scrollButtons.Mui-disabled': {
					opacity: 0.3,
				},
				flexGrow: 1, // so that the arrows don't show up momentarily on page switch
				[theme.breakpoints.down('md')]: {
					'&': {
						// responsive 2 row layout when used with the Navbar component
						order: 3, // after social buttons
						flexBasis: '100%', // take up row
					},
				},
			}}
		>
			{pages
				.filter(
					// filter out pages that should not be in the navbar
					// i.e., only one slash, or includeInNavbar is true
					page =>
						(page['path'].split('/').length === 2 && page['includeInNavbar'] !== false) ||
						page['includeInNavbar'] === true
				)
				.map((page, index) => {
					return (
						<LinkTab
							href={page.path}
							value={page.path.toLowerCase().split('/')[1]}
							label={page.name}
							key={index}
						/>
					);
				})}
		</Tabs>
	);
};

/**
 * Site navbar component. Contains the logo, social buttons, and navigation tabs.
 * Responsive: 1 row on mobile, 2 rows on desktop. The tabs scroll when there are too many to fit.
 * Navbar goes up and down on scroll.
 * @returns {JSX.Element} the navbar component
 */
export const Navbar = () => {
	return (
		<HideOnScroll>
			<AppBar sx={{ bgcolor: 'transparent !important' }}>
				<Container maxWidth="xl">
					<Toolbar
						disableGutters
						sx={{
							flexWrap: 'wrap',
							paddingTop: {
								// since two-row version lacks top padding, add it here
								xs: '1rem',
								sm: '1rem',
								md: '0',
							},
						}}
					>
						<ButtonLogo />

						<NavbarTabs />

						{/* spacing */}
						<Box sx={{ flexGrow: 1 }} />

						{/* social media icons */}
						<ButtonGroup sx={{ display: 'flex' }}>
							<CommunityDevButton />
							<InstagramButton />
							<GitHubButton />
							<DiscordButton />
						</ButtonGroup>
					</Toolbar>
				</Container>
			</AppBar>
		</HideOnScroll>
	);
};
