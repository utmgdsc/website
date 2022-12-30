// import React, { useContext } from "react";
import "./index.css";
import { Container, Typography } from "@mui/material";

const Footer = () => {
	return (
		<footer>
			<Container sx={{ display: "flex" }} maxWidth="xl">
				<Typography
					component="h2"
					fontWeight="bold"
					alignSelf="flex-end"
					marginBottom="2.5rem"
					variant="h2"
				>
					gdsc
				</Typography>
			</Container>
		</footer>
	);
};

export default Footer;
