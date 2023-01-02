import React from "react";
import { Container } from "@mui/material";

const PageNotFound = () => {
	return (
		<Container
			component="main"
			id="404"
			sx={{
				alignItems: "center",
				display: "flex",
				flexDirection: "column",
				fontSize: "50px",
				height: "100vh",
				justifyContent: "center",
				textAlign: "center",
			}}
		>
			<div>404 ERROR PAGE NOT FOUND {">:("}</div>
		</Container>
	);
};

export default PageNotFound;
