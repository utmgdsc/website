import { useState, useEffect, useRef } from 'react';
import { Box, Container, Typography } from '@mui/material';
import Image, { ImageProps } from 'next/image';

/**
 * A hook to calculate the parallax effect on the hero header image.
 */
const useParallax = (position: string, containerRef: React.RefObject<HTMLDivElement>) => {
	const [imgOffset, setImgOffset] = useState(0);

	const [imgHeight, setImgHeight] = useState(0);

	const handleScroll = () => setImgOffset(window.scrollY);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		if (containerRef.current !== null) {
			setImgHeight(containerRef.current.clientHeight * 1.4);
		}

		return () => window.removeEventListener('scroll', handleScroll);
	}, [containerRef]);

	const accelSpeedCalc = () => {
		if (position === 'bottom') {
			return 0.1;
		} else {
			return -0.1;
		}
	};

	return { imgOffset, imgHeight, accelSpeedCalc };
};

export interface HeroHeaderProps {
	/** text to display on the header */
	text: string;
	/** image to display on the header */
	picture: ImageProps['src'];
	/** max width of the header to pass to the container */
	maxWidth?: string;
	/** position of the image, either "top" or "bottom" */
	position: 'top' | 'bottom';
	/** height of the header */
	height?: string;
	/** width of the header */
	width?: string;
	/** level of the header, i.e., h1, h2, h3, etc. */
	headerLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	/** props to pass to the image component */
	imgProps?: Partial<ImageProps>;
}

/**
 * A banner with header text and a background image. It is a hero image style header
 * component, spanning the full width of the page/container.
 * It is recommended to use this component in a container with a max width of 100%.
 */
export const HeroHeader = ({
	text,
	picture,
	maxWidth = '100%',
	position,
	height = '20rem',
	headerLevel = 'h1',
	imgProps,
}: HeroHeaderProps) => {
	const containerRef = useRef(null);

	const { imgOffset, imgHeight, accelSpeedCalc } = useParallax(position, containerRef);

	return (
		<Box
			ref={containerRef}
			sx={theme => ({
				height: height,
				maxWidth: 'unset !important',
				position: 'relative',
				width: '100%',
				overflowY: 'hidden',
				overflowX: 'hidden',
				'&:after': {
					content: '""',
					backgroundImage: 'linear-gradient(rgba(255, 255, 255, .6) 0%, rgba(255, 255, 255, 0.8) 100%)',
					backgroundSize: '18px',
					bottom: 0,
					display: 'block',
					height: '100%',
					position: 'absolute',
					right: 0,
					width: '100%',
					zIndex: 1,
				},
				...theme.applyStyles('dark', {
					'&:after': {
						backgroundImage: 'linear-gradient(rgba(0, 0, 0, .6) 0%, rgba(0, 0, 0, 0.8) 100%)',
					},
				}),
			})}
			className="hero-header-parallax"
		>
			<Image
				src={picture}
				sizes="100vw"
				style={{
					height: 'auto',
					minHeight: imgHeight,
					width: '100%',
					transform: `translateY(${imgOffset * accelSpeedCalc()}px)`,
					position: 'absolute',
					bottom: position === 'bottom' ? 0 : undefined,
					top: position === 'top' ? 0 : undefined,
					objectFit: 'cover',
				}}
				loading="lazy"
				alt=""
				{...imgProps}
			/>
			<Container
				sx={{
					alignItems: 'flex-end',
					display: 'flex',
					height: height,
					maxWidth: 'unset !important',
					position: 'absolute',
					top: 0,
					width: '100vw',
					zIndex: 2,
				}}
			>
				<Container sx={{ maxWidth }}>
					<Typography
						component={headerLevel}
						variant="h2"
						sx={{
							fontWeight: 'bold',
							pb: 4,
						}}
					>
						{text}
					</Typography>
				</Container>
			</Container>
		</Box>
	);
};
