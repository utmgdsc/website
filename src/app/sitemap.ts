import { pages } from '~/data/NavbarTabData';

/**
 * HACK: the baseurl is hardcoded to prod url
 */
const BASE_URL = 'https://gdscutm.com';

type SitemapItem = {
	url: string;
	lastModified: Date;
};

/**
 * Generates the sitemap for the website. URL is hardcoded.
 *
 * Uses the NavbarTabData to generate the sitemap.
 *
 * @returns The sitemap
 */
export default function sitemap(): SitemapItem[] {
	/**
	 * accumulator for the sites defined in NavbarTabData.pages
	 */
	const acc: SitemapItem[] = [];

	pages.forEach(item => {
		acc.push({
			url: `${BASE_URL}${item.path}`,
			lastModified: new Date(),
		});
	});
	return acc;
}
