import React, { useEffect } from 'react';

import {
  Container,
  Grid,
} from '@mui/material';

import Brand from '../../assets/graphics/logo_clouds.png';
import Workshop from '../../assets/website_proprietary/heroes/IMG_2746.jpg';
import BannerImg from '../../assets/website_proprietary/heroes/IMG_3732.jpg';
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
							alt="A man (Alexander Dean Cybulski) speaks at an event with a projector in the background."
							href="/resources/workshops"
							image={Workshop}
						/>
					</Grid>
					<Grid item>
						<ImageLinkCard
							title="Logo Download"
							description="Download our bracket logo in crisp quality!"
							alt="Google Developer Student Clubs UTM logo over a blue background with clouds"
							href="/resources/logo-download"
							image={Brand}
						/>
					</Grid>
					{/* <Grid item>
						<ImageLinkCard
							title="Tech tips"
							description="Linus from Linus Tech Tips is a GDSC UTM member! :) Check out his tips here!"
							alt="" // todo
							href="/resources/tips"
							image={BannerImg}
						/>
					</Grid> */}
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
