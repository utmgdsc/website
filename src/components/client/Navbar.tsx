import {
	AppBar,
	Box,
	ButtonGroup,
	Container,
	Fab,
	Tab,
	Tabs,
	Toolbar,
	useScrollTrigger,
	useTheme,
} from '@mui/material';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import bracket from '~/assets/graphics/bracket.svg';
import bracketDark from '~/assets/graphics/bracket_colourless.svg';
import { ThemedImage, Link } from '~/components/client';
import { pages } from '~/data/NavbarTabData';
import { CommunityDevButton, DiscordButton, GitHubButton, InstagramButton } from '~/data/SocialButton';
import { HideOnScroll } from './ElevationScroll';

/** gdg button logo */
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
				background: ({ vars }) => vars?.palette.background.paper + ' !important',
				boxShadow: trigger ? 0 : 4,
			}}
			href="/"
			id="gdsc-home-btn"
		>
			<ThemedImage
				srcLight={bracket.src}
				srcDark={bracketDark.src}
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
	const tab = useMemo(() => `${pathname.toLowerCase().split('/')[1]}`, [pathname]);

	// use only the first part of the path to determine the tab
	// so that sub pages are also highlighted in the navbar
	const [currentTab, setCurrentTab] = useState(tab);

	useEffect(() => {
		setCurrentTab(tab);
	}, [tab]);

	/** all pages that should be included in the navbar */
	const processedPages = new Set(
		pages.filter(page => page.includeInNavbar !== false).map(page => page.path.replace('/', ''))
	);

	/** check if current tab is in the list of pages */
	const isValidTab = () => processedPages.has(currentTab);

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
					backgroundColor: ({ vars }) => vars?.palette.primary.main,
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
				.map(page => {
					return (
						<Tab
							component={Link}
							href={page.path}
							value={page.path.toLowerCase().split('/')[1]}
							label={page.name}
							key={page.path}
							sx={({ vars }) => ({
								color: vars?.palette.text.secondary,
								fontFamily: 'inherit',
								fontSize: '1em',
								fontWeight: 'normal',
								letterSpacing: '0 !important',
								padding: '1.5em',
								textTransform: 'none',
								whiteSpace: 'nowrap',
								'&.Mui-selected': {
									color: vars?.palette.text.primary,
									fontWeight: 'bold',
								},
							})}
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
