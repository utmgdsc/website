import './HeroHeader.scss';
import React, {useState, useEffect, useRef} from "react"
/** @jsxImportSource @emotion/react */
import {
  Container,
  Skeleton,
  Typography,
} from '@mui/material';

import Image from "next/image"
/**
 * A banner with header text and a background image. It is a hero image style header
 * component, spanning the full width of the page/container.
 * It is recommended to use this component in a container with a max width of 100%.
 * @param {string} text text to display on the header
 * @param {string} picture image to display on the header
 * @param {string} maxWidth max width of the header to pass to the container
 * @param {string} position position of the image, either "top" or "bottom"
 * @param {string} height height of the header
 * @returns {JSX.Element} hero image style header component
 */

export const HeroHeader = ({ text, picture, maxWidth, position, height = "30rem" }) => {
	const [imgOffset, setImgOffset] = useState(0);

	const[isLoaded, setIsLoaded] = useState(false)

	const [imgHeight, setImgHeight] = useState(0)

	const handleScroll = () => setImgOffset(window.scrollY);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		const containerHeight = containerRef.current.clientHeight

		setImgHeight(containerHeight*1.4)
		setIsLoaded(true)

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const containerRef = useRef(null)

	const accelSpeedCalc = ()=> {
		if(position === "bottom"){
			return 0.1
		}
		else{
			return -0.1
		}
	}
	return (
		<>
			<Skeleton
				variant="rectangular"
				animation="wave"
				sx={{
					height: height,
					width: "100%",
					position: "absolute",
					zIndex: -1,
				}}
			/>
			<div
				ref={containerRef}
				style={{
					height: height,
					maxWidth: "unset !important",
					position:"relative",
					width:"100%",
					overflowY:"hidden",
					overflowX:"hidden",
				}}
				className="hero-header-parallax"
			>
				{isLoaded ?
				<>
					<Image src={picture}
						sizes='100vw'
						style={{
							height:"auto",
							minHeight:imgHeight,
							width:"100%",
							transform: `translateY(${imgOffset * accelSpeedCalc()}px)`,
							position:"absolute",
							bottom: position === "bottom" ? 0: undefined,
							top: position === "top" ? 0: undefined,
						}}
						loading="lazy"
						alt=""
					/>
					<Container
						maxWidth="unset !important"
						sx={{
							height: height,
							position:"absolute",
							top:0,
							display:"flex",
							alignItems:"flex-end",
							zIndex:2,
							width:"100vw",
						}}>
						<Container maxWidth={maxWidth}>
							<Typography
								component="h2"
								fontWeight="bold"
								variant="h2"
								pb={4}
								style={{alignSelf:"center"}}
							>
								{text}
							</Typography>
						</Container>
					</Container>
				</>
				:
				null
				}
			</div>
		</>
	)
};
