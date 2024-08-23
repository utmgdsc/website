import { getImageProps } from 'next/image';
import { Box } from '@mui/material';

/**
 * An image that changes based on the system theme
 * @param {Object} props
 * @param {string} props.srcLight The light mode image
 * @param {string} props.srcDark The dark mode image
 * @param {string} props.alt The alt text for the image
 * @param {boolean} props.isSVG Bypasses `getImageProps` if true since it breaks SVG
 * @param {import('next/image').ImageProps} props.props The props to pass to the Image component
 * @param {import('react').HTMLProps<HTMLPictureElement>} props.pictureProps The props to pass to the picture element
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
		<Box component="picture" {...pictureProps}>
			<source media="(prefers-color-scheme: dark)" srcSet={isSVG ? srcDark : dark} />
			<source media="(prefers-color-scheme: light)" srcSet={isSVG ? srcLight : light} />
			<img alt={alt} {...rest} />
		</Box>
	);
};
