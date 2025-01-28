/**
 * The list of pages that are available on the website.
 *
 * Note the order of the pages is the order they will appear in the navbar.
 * The page will only be included in the navbar by default if there is only one slash in the path.
 * includeInNavbar serves as an override for this.
 *
 * @type {Array<{name: string, path: string, includeInNavbar?: boolean}>}
 */
export const pages = [
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
