import React from 'react';

import { ErrorOutline } from '@mui/icons-material';
import { Container } from '@mui/material';

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
			<ErrorOutline fontSize="large"/>
			404 ERROR PAGE NOT FOUND {">:("}
		</Container>
	);
};

export default PageNotFound;
