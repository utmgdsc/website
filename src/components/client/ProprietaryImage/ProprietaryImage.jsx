import Image from 'next/image';

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

/**
 * Fills in the image src attribute with the appropriate image path\
 *
 * @property {string} src - Image path
 * @property {string} alt - Image alt text
 */
export const ProprietaryImage = ({ src, alt, width, height, ...props }) => {
    return <Image
        src={`https://${process.env.proprietary_images_hostname}/${src}`}
        alt={alt}
        width={width}
        height={height}
        {...props}
    />;
}
