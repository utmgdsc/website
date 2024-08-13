/**
 * Gets the full url of a proprietary image with fallback to placeholder image
 *
 * @param {string} src - The path of the proprietary image
 * @param {boolean} returnFallback - Whether to return a fallback image if the proprietary image is not available
 *
 * @return {string?} The URL of the proprietary image
 */
export const getProprietaryURL = (src, returnFallback = true) => {
	if (!process.env.PROPRIETARY_IMAGES_HOSTNAME && returnFallback) {
		return 'https://picsum.photos/200';
	}
	if (!process.env.PROPRIETARY_IMAGES_HOSTNAME) {
		return null;
	}

	return `https://${process.env.PROPRIETARY_IMAGES_HOSTNAME}/${src}`;
};
