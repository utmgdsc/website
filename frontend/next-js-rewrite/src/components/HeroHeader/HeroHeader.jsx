import './HeroHeader.scss';

import { Parallax } from 'react-parallax';

/** @jsxImportSource @emotion/react */
import {
  Container,
  Skeleton,
  Typography,
} from '@mui/material';

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
			<Parallax
				style={{
					height: height,
					maxWidth: "unset !important",
					paddingLeft: 0,
					paddingRight: 0,
				}}
				className="hero-header-parallax"
				bgImage={picture}
				bgImageStyle={{
					bottom: position === "bottom" ? 0 : "unset",
					top: position === "top" ? 0 : "unset",
				}}
				lazy
			>
				<Container
					sx={{
						display: "flex",
						height: height,
					}} maxWidth={maxWidth}>
					<Typography
						component="h2"
						fontWeight="bold"
						pb={4}
						variant="h2"
						sx={{
							alignSelf: "flex-end",
						}}
					>
						{text}
					</Typography>
				</Container>
			</Parallax>
		</>
	)
};
