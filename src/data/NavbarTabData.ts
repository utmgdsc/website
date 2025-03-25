type NavbarPage = {
	/** The name of the page to be displayed in the navbar */
	name: string;
	/** The path to the page */
	path: string;
	/** The icon to be displayed in the navbar */
	includeInNavbar?: boolean;
};

/**
 * The list of pages that are available on the website.
 *
 * Note the order of the pages is the order they will appear in the navbar.
 * The page will only be included in the navbar by default if there is only one slash in the path.
 * includeInNavbar serves as an override for this.
 */
export const pages: NavbarPage[] = [
	{
		name: 'Home',
		path: '/',
	},
	{
		name: 'Logo Download',
		path: '/brand',
		includeInNavbar: false,
	},
	{
		name: 'Workshops',
		path: '/past-workshops',
	},
	{
		name: 'Projects',
		path: '/projects',
	},
	{
		name: 'Events',
		path: '/events',
	},
];
