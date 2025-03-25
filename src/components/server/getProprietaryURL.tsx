/**
 * @return Whether the proprietary image URL is available
 */
export const proprietaryURLIsAvailable = (): boolean =>
	typeof process.env.PROPRIETARY_IMAGES_HOSTNAME === 'string' && process.env.PROPRIETARY_IMAGES_HOSTNAME.length > 0;

/**
 * Gets the full url of a proprietary image with fallback to placeholder image
 *
 * @param src - The path of the proprietary image
 *
 * @return The URL of the proprietary image
 */
export const getProprietaryURL = (src: string): string => {
	if (!proprietaryURLIsAvailable()) {
		return 'https://picsum.photos/200';
	}

	return `https://${process.env.PROPRIETARY_IMAGES_HOSTNAME}/${src}`;
};
