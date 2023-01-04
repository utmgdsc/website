/** @jsxImportSource @emotion/react */
import { Typography, Container } from "@mui/material";
import { Parallax } from "react-parallax";
import { Skeleton } from "@mui/material";
import "./index.scss";

/**
 * Hero image style header component, spanning the full width of the page/container.
 * It is recommended to use this component in a container with a max width of 100%.
 * @param {string} text text to display on the header
 * @param {string} picture image to display on the header
 * @param {string} maxWidth max width of the header to pass to the container
 * @param {string} position position of the image, either "top" or "bottom"
 * @param {string} height height of the header
 * @returns {JSX.Element} hero image style header component
 */
const BannerHeader = ({ text, picture, maxWidth, position, height = "30rem" }) => {
	return (
		<>
			{/* skeleton animation bcs it looks cool */}
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

export default BannerHeader;
