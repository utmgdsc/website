import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const HeroHeader = ({text, picture}) => {
	return (
		// todo: add parallax effect
		<Container sx={{
			background: `linear-gradient(rgba(0,0,0,.6) 0%, rgba(0,0,0,0.8) 100%), url(${picture}) no-repeat`,
			backgroundPosition: 0,
			backgroundSize: "cover",
			height: "30rem",
			maxWidth: "unset !important",
			px: "0"
		}} >
			<Container sx={{ height: "inherit" }} maxWidth="md">
				<Typography
					color="white"
					component="h2"
					fontWeight="bold"
					lineHeight="10rem"
					pt="20rem"
					variant="h2"
				>
					{text}
				</Typography>
			</Container>
		</Container>
	)
};

export default HeroHeader;
