import { Box, Skeleton } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

/**
 * Loads an image from a given URL or NextJS ImageProps object with a skeleton placeholder.
 * Extends the NextJS {@link https://nextjs.org/docs/app/api-reference/components/image | Image} component and uses all the same props.
 * @param {boolean} fill - if true, the image will fill the parent container
 * @param {string} alt - alt text for the image
 * @param {string} src - URL of the image
 * @param {import('react').CSSProperties} style - style object for the image
 * @return {JSX.Element} image with a skeleton placeholder
 */
export const SkeletonLoadedImage = (props) => {
	const [loaded, setLoaded] = useState(false);

	return (
		<Box
			sx={{
				position: 'relative',
				width: props?.fill ? '100%' : undefined,
				height: props?.fill ? '100%' : undefined,
				...props?.sx,
			}}
		>
			<Image
				loading="lazy"
				alt={props?.alt}
				src={props?.src}
				onLoadingComplete={() => setLoaded(true)}
				style={{
					...props?.style,
				}}
				{...props}
			/>
			{loaded ? null : (
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
			)}
		</Box>
	);
};
