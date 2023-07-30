'use client';
import React from 'react';

import { Container, Typography } from '@mui/material';

import { useMediaQuery } from '@mui/material';
import estelle from '../assets/graphics/sad_mascot.png';
import estelle_dark from '../assets/graphics/sad_mascot_dark.png';

import Image from 'next/image';

const PageNotFound = () => {
	const systemTheme = useMediaQuery('(prefers-color-scheme: dark)');
	return (
		<Container
			component="main"
			id="404"
			sx={{
				alignItems: 'center',
				display: 'flex',
				flexDirection: 'column',
				fontSize: '50px',
				height: '100vh',
				justifyContent: 'center',
				textAlign: 'center',
			}}
		>
			<Image alt="Sad GDSC Mascot" src={systemTheme ? estelle_dark.src : estelle.src} height={600} width={600} />
			<Typography variant="h1" component="h1" gutterBottom>
				404
			</Typography>
			<Typography variant="h4" component="p" gutterBottom>
				We couldn't find the page you were looking for.
			</Typography>
		</Container>
	);
};

export default PageNotFound;
