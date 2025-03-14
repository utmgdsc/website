/**
 * @return {boolean} Whether the proprietary image URL is available
 */
export const proprietaryURLIsAvailable = () => !!process.env.PROPRIETARY_IMAGES_HOSTNAME;

/**
 * Gets the full url of a proprietary image with fallback to placeholder image
 *
 * @param {string} src - The path of the proprietary image
 * @param {boolean} returnFallback - Whether to return a fallback image if the proprietary image is not available
 *
 * @return {string?} The URL of the proprietary image
 */
export const getProprietaryURL = (src, returnFallback = true) => {
	if (!proprietaryURLIsAvailable && returnFallback) {
		return 'https://picsum.photos/200';
	}
	if (!proprietaryURLIsAvailable) {
		return null;
	}

	return `https://${process.env.PROPRIETARY_IMAGES_HOSTNAME}/${src}`;
};
