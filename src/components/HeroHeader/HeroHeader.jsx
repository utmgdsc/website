import './HeroHeader.scss';
import React, { useState, useEffect, useRef } from 'react';
import { Container, Typography } from '@mui/material';

import Image from 'next/image';

/**
 * A banner with header text and a background image. It is a hero image style header
 * component, spanning the full width of the page/container.
 * It is recommended to use this component in a container with a max width of 100%.
 * @property {string} text text to display on the header
 * @property {string} picture image to display on the header
 * @property {string} maxWidth max width of the header to pass to the container
 * @property {string} position position of the image, either "top" or "bottom"
 * @property {string} height height of the header
 * @returns {JSX.Element} hero image style header component
 */
export const HeroHeader = ({ text, picture, maxWidth, position, height = '30rem' }) => {
	const [imgOffset, setImgOffset] = useState(0);

	const [imgHeight, setImgHeight] = useState(0);

	const handleScroll = () => setImgOffset(window.scrollY);

	const containerRef = useRef(null);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		const containerHeight = containerRef.current.clientHeight;

		setImgHeight(containerHeight * 1.4);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const accelSpeedCalc = () => {
		if (position === 'bottom') {
			return 0.1;
		} else {
			return -0.1;
		}
	};

	return (
		<div
			ref={containerRef}
			style={{
				height: height,
				maxWidth: 'unset !important',
				position: 'relative',
				width: '100%',
				overflowY: 'hidden',
				overflowX: 'hidden',
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
					<Typography component="h1" fontWeight="bold" variant="h2" pb={4} style={{ alignSelf: 'center' }}>
						{text}
					</Typography>
				</Container>
			</Container>
		</div>
	);
};
