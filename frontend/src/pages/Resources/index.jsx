import React, { useEffect } from "react";
import "./index.css";
import {
	Container,
	Grid,
} from "@mui/material";

import FAQWidget from "./FAQ";

import faq from "../../data/faq.json";
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
