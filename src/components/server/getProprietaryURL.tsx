/**
 * @return Whether the proprietary image URL is available
 */
export const proprietaryURLIsAvailable = (): boolean =>
	typeof process.env.PROPRIETARY_IMAGES_HOSTNAME === 'string' && process.env.PROPRIETARY_IMAGES_HOSTNAME.length > 0;

/**
 * Gets the full url of a proprietary image with fallback to placeholder image
 *
 * @param src - The path of the proprietary image
 * @param returnFallback - Whether to return a fallback image if the proprietary image is not available
 *
 * @return The URL of the proprietary image
 */
export const getProprietaryURL = (src: string, returnFallback: boolean = true): string | null => {
	if (!proprietaryURLIsAvailable() && returnFallback) {
		return 'https://picsum.photos/200';
	}
	if (!proprietaryURLIsAvailable()) {
		return null;
	}

	return `https://${process.env.PROPRIETARY_IMAGES_HOSTNAME}/${src}`;
};
