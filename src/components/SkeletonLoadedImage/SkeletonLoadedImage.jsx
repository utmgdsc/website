import { Skeleton } from '@mui/material';
import Image from 'next/image';
import { Box } from '@mui/material';

/**
 * Loads an image from a given URL or NextJS ImageProps object with a skeleton placeholder.
 * Extends the NextJS {@link https://nextjs.org/docs/app/api-reference/components/image | Image} component and uses all the same props.
 * @param {boolean} fill - if true, the image will fill the parent container
 * @param {string} alt - alt text for the image
 * @param {string} src - URL of the image
 * @param {Object} style - style object for the image
 * @return {JSX.Element} image with a skeleton placeholder
 */
export const SkeletonLoadedImage = (props) => {
	return (
		<Box
			sx={{
				position: 'relative',
				width: props?.fill ? '100%' : undefined,
				height: props?.fill ? '100%' : undefined,
			}}
		>
			<Image
				loading="lazy"
				alt={props?.alt}
				style={{
					...props?.style,
				}}
				{...props}
			/>
			<Skeleton
				variant="rectangular"
				{...props}
				sx={{
					zIndex: -1,
					position: 'absolute',
					top: 0,
					...props?.style,
					left: 0,
					right: 0,
					margin: '0 auto',
				}}
			/>
		</Box>
	);
};
