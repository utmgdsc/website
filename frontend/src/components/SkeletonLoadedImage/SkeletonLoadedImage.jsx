import { useState } from 'react';

import { Skeleton } from '@mui/material';

/**
 * Loads an image from the given URL with a skeleton placeholder
 * @param {string} src URL of the image
 * @param {string} alt alt text of the image
 * @return {JSX.Element} image with a skeleton placeholder
 */
export const SkeletonLoadedImage = (props) => {
	const [loaded, setLoaded] = useState(false);

	return (
		<>
			<img
				loading="lazy"
				// hide the image until it's loaded and load other style props
				style={{
					visibility: loaded ? undefined : 'hidden',
					width: loaded ? undefined : '0',
					height: loaded ? undefined : '0',
					...props?.style,
				}}
				onLoad={() => { setLoaded(true) }}
				src={props?.src}
				alt={props?.alt}
				{...props}
			/>

			{!loaded && <Skeleton variant="rectangular" {...props} />}
		</>
	)
}
