'use client'
import React from 'react';

import {
	Grid,
} from '@mui/material';

import Brand from '../../assets/graphics/logo_clouds.png';
import Workshop from '../../assets/website_proprietary/heroes/IMG_2746.jpg';
import BannerImg from '../../assets/website_proprietary/heroes/IMG_3721.png';
import {
	FAQ,
	ImageLinkCard,
} from '../../components';
import faq from '../../data/faq.json';

import { HeroLayout } from '../../layouts/HeroLayout';

/**
 * @returns {JSX.Element} The resources page
 */
const ResourcesPage = () => {
	console.log(BannerImg)
	return (
		<HeroLayout title="Resources" picture={BannerImg?.src} height="15rem" position="bottom" id="resources">
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
						height="auto"
						image={Workshop}
					/>
				</Grid>
				<Grid item>
					<ImageLinkCard
						title="Logo Download"
						description="Download our bracket logo in crisp quality!"
						alt="Google Developer Student Clubs UTM logo over a blue background with clouds"
						href="/resources/logo-download"
						height="auto"
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

			{/* opting to keep FAQ in this page to keep it more visible */}
			<h2 className="resources" id="faq">Frequently Asked Questions</h2>
			{
				faq.map((faq, index) => {
					return (
						<FAQ key={index} faq={faq} />
					);
				})
			}
		</HeroLayout>
	)
}

export default ResourcesPage;
