import { getImageProps } from 'next/image';

/**
 * An image that changes based on the system theme
 * @property {string} srcLight The light mode image
 * @property {string} srcDark The dark mode image
 * @property {string} alt The alt text for the image
 * @property {boolean} isSVG Bypasses `getImageProps` if true since it breaks SVG
 * @property {import('next/image').ImageProps} props The props to pass to the Image component
 * @property {import('react').HTMLProps<HTMLPictureElement>} pictureProps The props to pass to the picture element
 *
 * @see https://stackoverflow.com/a/78375615
 */
export const ThemedImage = ({ srcLight, srcDark, alt, isSVG, pictureProps = {}, ...props }) => {
	const {
		props: { srcSet: dark },
	} = getImageProps({ ...props, alt, src: srcDark });
	const {
		props: { srcSet: light, ...rest },
	} = getImageProps({ ...props, alt, src: srcLight });

	return (
		<picture {...pictureProps}>
			<source media="(prefers-color-scheme: dark)" srcSet={isSVG ? srcDark : dark} />
			<source media="(prefers-color-scheme: light)" srcSet={isSVG ? srcLight : light} />
			<img alt={alt} {...rest} />
		</picture>
	);
};
