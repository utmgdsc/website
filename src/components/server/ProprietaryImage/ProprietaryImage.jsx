import Image from 'next/image';
import { getProprietaryURL } from '@/components/server';

/**
 * Fills in the image src attribute with the appropriate image path
 *
 * @property {string} src - Image path without trailing slashes
 * @property {string} alt - Image alt text
 */
export const ProprietaryImage = ({ src, alt, width, height, ...props }) => {
	return <Image src={getProprietaryURL(src)} alt={alt} width={width} height={height} {...props} />;
};
