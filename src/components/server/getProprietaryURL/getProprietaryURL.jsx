/**
 * Gets the full url of a proprietary image with fallback to placeholder image
 *
 * @param {string} src - The path of the proprietary image
 *
 * @return {string} The URL of the proprietary image
 */
export const getProprietaryURL = (src) => {
    if (!process.env.proprietary_images_hostname) {
        return "https://picsum.photos/200"
    }

    return `https://${process.env.proprietary_images_hostname}/${src}`
}
