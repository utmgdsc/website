import NextImage from 'next/image';

/**
 * Reexports NextImage with all the props and filters out props that are not defined by NextImage
 */
export const ImageFilterProps = props => {
	const imageProps = {
		src: props.src,
		alt: props.alt,
		width: props.width,
		height: props.height,
		fill: props.fill,
		loader: props.loader,
		quality: props.quality,
		priority: props.priority,
		loading: props.loading,
		placeholder: props.placeholder,
		blurDataURL: props.blurDataURL,
		unoptimized: props.unoptimized,
		overrideSrc: props.overrideSrc,
		onLoadingComplete: props.onLoadingComplete,
		layout: props.layout,
		objectFit: props.objectFit,
		objectPosition: props.objectPosition,
		lazyBoundary: props.lazyBoundary,
		lazyRoot: props.lazyRoot,
	};

	return <NextImage {...imageProps} />;
};
