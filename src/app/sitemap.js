import { pages } from '../data/NavbarTabData';

const BASEURL = 'https://gdscutm.com';

/**
 * Generates the sitemap for the website. Note that a
 * HACK is that the baseurl is hardcoded to prod.
 *
 * Uses the NavbarTabData to generate the sitemap.
 *
 * @returns {Array<{url: string, lastModified: Date}} The sitemap
 */
export default function sitemap() {
	/** accumulator for the sites defined in NavbarTabData.pages */
	let acc = [];
	pages.forEach((item) => {
		acc.push({
			url: `${BASEURL}${item.path}`,
			lastModified: new Date(),
		});
	});
	return acc;
}
