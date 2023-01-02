import { Typography, Container } from '@mui/material';
import { Parallax } from 'react-parallax';
import "./index.scss";

/**
 * Hero image style header component, spanning the full width of the page/container.
 * It is recommended to use this component in a container with a max width of 100%.
 * @param {string} text text to display on the header
 * @param {string} picture image to display on the header
 * @param {string} maxWidth max width of the header to pass to the container
 * @returns {JSX.Element} hero image style header component
 */
const BannerHeader = ({ text, picture, maxWidth }) => {
	return (
		<Parallax
			style={{
				height: "30rem",
				maxWidth: "unset !important",
				px: "0"
			}}
			className="hero-header-parallax"
			bgImage={picture}
			lazy
		>
			<Container
				sx={{
					height: "30rem",
					display: "flex",
				}} maxWidth={maxWidth}>
				<Typography
					// color="white"
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
	)
};

export default BannerHeader;
