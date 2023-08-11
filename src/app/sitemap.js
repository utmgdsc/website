import { pages } from '@/data/NavbarTabData';

const BASE_URL = 'https://gdscutm.com';

/**
 * Generates the sitemap for the website. Note that a
 * HACK: the baseurl is hardcoded to prod url
 *
 * Uses the NavbarTabData to generate the sitemap.
 *
 * @returns {Array<{url: string, lastModified: Date}} The sitemap
 */
export default function sitemap() {
	/**
	 * accumulator for the sites defined in NavbarTabData.pages
	 * @type {Array<{url: string, lastModified: Date}}>
	 */
	let acc = [];
	pages.forEach((item) => {
		acc.push({
			url: `${BASE_URL}${item.path}`,
			lastModified: new Date(),
		});
	});
	return acc;
}
