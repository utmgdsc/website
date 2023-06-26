'use client'

import { Skeleton } from '@mui/material';
import Image from "next/image"
/**
 * Loads an image from a given URL or NextJS ImageProps object with a skeleton placeholder. 
 * Extends the NextJS {@link https://nextjs.org/docs/app/api-reference/components/image | Image} component and uses all the same props.
 * @return {JSX.Element} image with a skeleton placeholder
 */
export const SkeletonLoadedImage = (props) => {
	return (
		<div style={{position:"relative"}}>
			<Image
				loading="lazy"
				alt={props?.alt}
				style={{
					...props?.style,
				}}
				{...props}
			/>
			<Skeleton variant="rectangular" {...props} style={{
				zIndex:-1,
				position:"absolute",
				top:0,
				...props?.style,
				left: 0,
				right: 0,
				margin: "0 auto"
			}}/>
		</div>
	)
}
