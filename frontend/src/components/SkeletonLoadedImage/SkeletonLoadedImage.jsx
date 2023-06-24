'use client'
import { useState } from 'react';

import { Skeleton } from '@mui/material';
import Image from "next/image"
/**
 * Loads an image from the given URL or NextJS {@link ImageProps} object with a skeleton placeholder. Extends the NextJS {@link https://nextjs.org/docs/app/api-reference/components/image | Image} component.
 * @param {string | ImageProps} src URL of the image or NextJS {@link ImageProps} object
 * @param {string} alt alt text of the image
 * @return {JSX.Element} image with a skeleton placeholder
 */
export const SkeletonLoadedImage = (props) => {
	const [loaded, setLoaded] = useState(false);
	return (
		<>
			<Image
				loading="lazy"
				alt={props?.alt}
				style={{
					visibility: loaded ? undefined : 'hidden',
					...props?.style,
				}}
				onLoad={() => { setLoaded(true) }}
				{...props}
			/>

			{!loaded && <Skeleton variant="rectangular" {...props} />}
		</>
	)
}
