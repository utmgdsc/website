import { Typography, Container } from '@mui/material';
import { Parallax } from 'react-parallax';
import "./index.scss";

const BannerHeader = ({ text, picture }) => {
	return (
		<Parallax
			style={{
				height: "30rem",
				maxWidth: "unset !important",
				px: "0"
			}}
			strength={-360}
			className="hero-header-parallax"
			bgImage={picture}
			lazy
		>
			<Container
				sx={{
					height: "30rem",
					display: "flex",
				}} maxWidth="md">
				<Typography
					color="white"
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
