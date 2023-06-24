'use client'
import { useState } from 'react';

import { Skeleton } from '@mui/material';
import Image from "next/image"
/**
 * Loads an image from a given URL or NextJS ImageProps object with a skeleton placeholder. 
 * Extends the NextJS {@link https://nextjs.org/docs/app/api-reference/components/image | Image} component and uses all the same props.
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
