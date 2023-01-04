import React, { useEffect } from "react";
import "./index.css";
import {
	Box,
	Container,
	Grid,
} from "@mui/material";

import TableOfContents from "../../components/TableOfContents";

import WorkshopWidget from "./WorkshopArchive/Workshop";
import FAQWidget from "./FAQ";

import faq from "../../data/faq.json";
import workshops from "../../data/workshops.json";
import BannerHeader from "../../components/BannerHeader";
import BannerImg from "../../assets/heroes/IMG_3732.jpg"
import ImageLinkCard from "../../components/ImageLinkCard";


/**
 * @returns {JSX.Element} The resources page
 */
const ResourcesPage = () => {
	useEffect(() => {
		document.title = "GDSC UTM - Resources";
	}, []);

	return (
		<>
			<BannerHeader text="Resources" picture={BannerImg} height="15rem" />
			<Container sx={{ py: 4 }} component="main" id="resources">
				<Grid
					container
					spacing={2}
				>
					<Grid item>
						<ImageLinkCard
							title="Workshop Archive"
							description="Check out our past workshops!"
							link="/resources/workshops"
							image={BannerImg}
						/>
					</Grid>
					<Grid item>
						<ImageLinkCard
							title="Logo Download"
							description="Download our bracket logo in crisp quality!"
							link="/resources/logo-download"
							image={BannerImg}
						/>
					</Grid>
					<Grid item>
						<ImageLinkCard
							title="Tech tips"
							description="Linus from Linus Tech Tips is a GDSC UTM member! :) Check out his tips here!"
							link="/resources/tips"
							image={BannerImg}
						/>
					</Grid>
				</Grid>

				{/* opting to keep FAQ in this page to keep it more accessible */}
				<h2 className="resources" id="faq">Frequently Asked Questions</h2>
				{faq.map((item, index) => {
					return (
						<FAQWidget key={index} item={item} />
					);
				})}

			</Container>
		</>
	)
}

export default ResourcesPage;
