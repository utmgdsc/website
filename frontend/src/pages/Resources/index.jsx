import React, { useEffect } from "react";
import "./index.css";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Container,
	Grid,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";
import {
	Code,
	ExpandMore,
	RadioButtonChecked,
	Slideshow,
} from "@mui/icons-material";
import TableOfContents from "../../components/TableOfContents";

import faq from "../../data/faq.json";
import workshops from "../../data/workshops.json";
import BannerHeader from "../../components/BannerHeader";
import BannerImg from "../../assets/heroes/IMG_3732.jpg"

const ResourcesPage = () => {
	useEffect(() => {
		document.title = "GDSC UTM - Resources";
	}, []);

	return (
		<>
			<BannerHeader text="Resources" picture={BannerImg} />
			<Container sx={{ py: 4 }} component="main" id="resources">

				<Grid
					container
					spacing={2}
				>
					<Grid item md={3}>
						<TableOfContents />
					</Grid>
					<Grid item md={9}>
						<h2 className="resources" id="workshop">GDSC Workshops</h2>
						{Object.keys(workshops).map((category, index) => {
							return (
								<Box key={index}>
									<h3 className="resources" id={category.replace(/\s/g, "")}>{category}</h3>
									{workshops[category].map((item, index) => {
										return (
											<Accordion key={index}>
												<AccordionSummary
													expandIcon={<ExpandMore />}
													aria-controls="panel1a-content"
													id="panel1a-header"
												>
													<Typography>Workshop by {item.host.join(", ")} on {item.date}</Typography>
												</AccordionSummary>
												<AccordionDetails>
													<Typography className="workshop-detail">{item.detail}</Typography>
													<List>
														{item.code
															? <ListItem>
																<ListItemButton component="a" target="_blank" rel="noreferrer" href={item.code}>
																	<ListItemIcon>
																		<Code />
																	</ListItemIcon>
																	<ListItemText>
																		<Typography color="text.primary">Starter code</Typography>
																	</ListItemText>
																</ListItemButton>
															</ListItem>
															: null
														}
														{item.slide
															? <ListItem>
																<ListItemButton component="a" target="_blank" rel="noreferrer" href={item.slide}>
																	<ListItemIcon>
																		<Slideshow />
																	</ListItemIcon>
																	<ListItemText>
																		<Typography color="text.primary">Slides</Typography>
																	</ListItemText>
																</ListItemButton>
															</ListItem>
															: null
														}
														{item.recording
															? <ListItem>
																<ListItemButton component="a" target="_blank" rel="noreferrer" href={item.recording}>
																	<ListItemIcon>
																		<RadioButtonChecked />
																	</ListItemIcon>
																	<ListItemText>
																		<Typography color="text.primary">Recording</Typography>
																	</ListItemText>
																</ListItemButton>
															</ListItem>
															: null
														}
													</List>
												</AccordionDetails>
											</Accordion>
										);
									})}
								</Box>
							);
						})}
						<h2 className="resources" id="faq">GDSC FAQ</h2>
						{faq.map((item, index) => {
							return (
								<Accordion key={index}>
									<AccordionSummary
										expandIcon={<ExpandMore />}
										aria-controls="panel1a-content"
										id="panel1a-header"
									>
										<Typography>Q: {item.question}</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Typography>
											A: {item.answer}
										</Typography>
									</AccordionDetails>
								</Accordion>
							);
						})}
						<h2 className="resources" id="tips">GDSC Tech tips</h2>
						{/* // TODO: Implement this when we have tech tip posts on IG */}
						<Typography>Coming soon</Typography>
					</Grid>
				</Grid>
			</Container>
		</>
	)
}

export default ResourcesPage;
