import Image, { getImageProps, ImageProps } from 'next/image';
import { Box, BoxProps } from '@mui/material';
import { HTMLProps } from 'react';

interface ThemedImageProps extends Partial<ImageProps> {
	/** The light mode image */
	srcLight: string;
	/** The dark mode image */
	srcDark: string;
	/** The alt text for the image */
	alt: string;
	/** Bypasses `getImageProps` if true since it breaks SVG */
	isSVG?: boolean;
	/** The props to pass to the picture element */
	pictureProps?: HTMLProps<HTMLPictureElement> & BoxProps;
}

/**
 * An image that changes based on the system theme
 * @see https://stackoverflow.com/a/78375615
 */
export const ThemedImage = ({ srcLight, srcDark, alt, isSVG, pictureProps = {}, ...props }: ThemedImageProps) => {
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
			<Image {...rest} alt={alt} />
		</Box>
	);
};
