import React, { useEffect } from 'react';

import {
  Container,
  Grid,
} from '@mui/material';

import BannerImg from '../../assets/webiste_proprietary/heroes/IMG_3732.jpg';
import {
  FAQ,
  HeroHeader,
  ImageLinkCard,
} from '../../components';
import faq from '../../data/faq.json';

/**
 * @returns {JSX.Element} The resources page
 */
const ResourcesPage = () => {
	useEffect(() => {
		document.title = "GDSC UTM - Resources";
	}, []);

	return (
		<>
			<HeroHeader text="Resources" picture={BannerImg} height="15rem" />
			<Container
				sx={{
					py: 4,
				}}
				component="main"
				id="resources"
			>
				<Grid
					container
					justifyContent="space-between"
					spacing={2}
					alignItems="flex-start"
				>
					<Grid item>
						<ImageLinkCard
							title="Workshop Archive"
							description="Check out our past workshops!"
							alt="" // todo
							href="/resources/workshops"
							image={BannerImg}
						/>
					</Grid>
					<Grid item>
						<ImageLinkCard
							title="Logo Download"
							description="Download our bracket logo in crisp quality!"
							alt="" // todo
							href="/resources/logo-download"
							image={BannerImg}
						/>
					</Grid>
					<Grid item>
						<ImageLinkCard
							title="Tech tips"
							description="Linus from Linus Tech Tips is a GDSC UTM member! :) Check out his tips here!"
							alt="" // todo
							href="/resources/tips"
							image={BannerImg}
						/>
					</Grid>
				</Grid>

				{/* opting to keep FAQ in this page to keep it more accessible */}
				<h2 className="resources" id="faq">Frequently Asked Questions</h2>
				{faq.map((faq, index) => {
					return (
						<FAQ key={index} faq={faq} />
					);
				})}

			</Container>
		</>
	)
}


export default ResourcesPage;
