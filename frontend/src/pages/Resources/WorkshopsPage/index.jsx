/** @jsxImportSource @emotion/react */

import { useEffect } from 'react';

import {
  Box,
  Container,
  Grid,
} from '@mui/material';

import BannerImg from '../../../assets/heroes/IMG_3732.jpg';
import {
  HeroHeader,
  RouterBreadcrumb,
  TableOfContents,
} from '../../../components';
import workshops from '../../../data/workshops.json';
import { WorkshopWidget } from './Workshop';

/**
 * @return {JSX.Element} Workshop page component
 */
const WorkshopArchive = () => {
	useEffect(() => {
		document.title = "GDSC UTM - Workshops";
	}, []);
	return (
		// todo a search bar would be cool
		<>
			<HeroHeader text="Workshop Archive" picture={BannerImg} />
			<Container sx={{ py: 4 }} component="main" id="workshop">
				<RouterBreadcrumb/>
				<Grid
					container
					spacing={2}
				>
					<Grid item md={3}>
						<TableOfContents />
					</Grid>
					<Grid item md={9}>
						<h2 className="resources" id="gdsc-workshops">GDSC Workshops</h2>
						{Object.keys(workshops).map((category, index) => {
							return (
								<Box key={index}>
									<h3 className="resources" id={category.replace(/\s/g, "")}>{category}</h3>
									{workshops[category].map((item, index) => {
										return (
											<WorkshopWidget key={index} item={item} />
										);
									})}
								</Box>
							);
						})}
					</Grid>
				</Grid>
			</Container>
		</>
	);
}

export default WorkshopArchive;
