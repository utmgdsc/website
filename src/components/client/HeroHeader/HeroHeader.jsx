import { useState, useEffect, useRef } from 'react';
import { Box, Container, Typography } from '@mui/material';

import Image from 'next/image';

/**
 * A hook to calculate the parallax effect on the hero header image.
 */
const useParallax = (position, containerRef) => {
	const [imgOffset, setImgOffset] = useState(0);

	const [imgHeight, setImgHeight] = useState(0);

	const handleScroll = () => setImgOffset(window.scrollY);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		const containerHeight = containerRef.current.clientHeight;

		setImgHeight(containerHeight * 1.4);

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

/**
 * A banner with header text and a background image. It is a hero image style header
 * component, spanning the full width of the page/container.
 * It is recommended to use this component in a container with a max width of 100%.
 * @property {string} text text to display on the header
 * @property {string} picture image to display on the header
 * @property {string} maxWidth max width of the header to pass to the container
 * @property {string} position position of the image, either "top" or "bottom"
 * @property {string} height height of the header
 * @property {string} width width of the header
 * @property {string} headerLevel level of the header, i.e., h1, h2, h3, etc.
 * @returns {JSX.Element} hero image style header component
 */
export const HeroHeader = ({ text, picture, maxWidth, position, height = '30rem', headerLevel = 'h1' }) => {
	const containerRef = useRef(null);

	const { imgOffset, imgHeight, accelSpeedCalc } = useParallax(position, containerRef);

	return (
		<Box
			ref={containerRef}
			sx={{
				height: height,
				maxWidth: 'unset !important',
				position: 'relative',
				width: '100%',
				overflowY: 'hidden',
				overflowX: 'hidden',
				'&:after': {
					content: '""',
					backgroundImage: theme =>
						theme.palette.mode === 'dark'
							? 'linear-gradient(rgba(0, 0, 0, .6) 0%, rgba(0, 0, 0, 0.8) 100%)'
							: 'linear-gradient(rgba(255, 255, 255, .6) 0%, rgba(255, 255, 255, 0.8) 100%)',
					backgroundSize: '18px',
					bottom: 0,
					display: 'block',
					height: '100%',
					position: 'absolute',
					right: 0,
					width: '100%',
					zIndex: 1,
				},
			}}
			className="hero-header-parallax"
		>
			<Image
				placeholder="blur"
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
			/>
			<Container
				maxWidth="unset !important"
				sx={{
					height: height,
					position: 'absolute',
					top: 0,
					display: 'flex',
					alignItems: 'flex-end',
					zIndex: 2,
					width: '100vw',
				}}
			>
				<Container maxWidth={maxWidth}>
					<Typography
						component={headerLevel}
						fontWeight="bold"
						variant="h2"
						pb={4}
						style={{ alignSelf: 'center' }}
					>
						{text}
					</Typography>
				</Container>
			</Container>
		</Box>
	);
};
