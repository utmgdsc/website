import React, { useEffect } from 'react';
import './index.css';
import { Box, Container, Typography, Grid, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from "@mui/material";
import { ExpandMore, Code, Slideshow, RadioButtonChecked } from '@mui/icons-material';
import TableOfContents from '../../components/TableOfContents';

import faq from '../../data/faq.json';
import workshops from '../../data/workshops.json';
import BannerHeader from "../../components/BannerHeader";
import BannerImg from "../../assets/lena_giang.png"

const ResourcesPage = () => {
	useEffect(() => {
		document.title = 'GDSC UTM - Resources';
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
						<h2 className='resources' id="workshop">GDSC Workshops</h2>
						{Object.keys(workshops).map((category, index) => {
							return (
								<Box key={index}>
									<h3 className='resources' id={category.replace(/\s/g, '')}>{category}</h3>
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
													<Typography className='workshop-detail'>{item.detail}</Typography>
													<List>
														{item.code
															? <a target="_blank" rel="noreferrer" href={item.code}>
																<ListItem>
																	<ListItemButton>
																		<ListItemIcon>
																			<Code />
																		</ListItemIcon>
																		<Typography color="text.primary">Starter code</Typography>
																	</ListItemButton>
																</ListItem>
															</a>
															: null
														}
														{item.slide
															? <a target="_blank" rel="noreferrer" href={item.slide}>
																<ListItem>
																	<ListItemButton>
																		<ListItemIcon>
																			<Slideshow />
																		</ListItemIcon>
																		<Typography color="text.primary">Slide</Typography>
																	</ListItemButton>
																</ListItem>
															</a>
															: null
														}
														{item.recording
															? <a target="_blank" rel="noreferrer" href={item.recording}>
																<ListItem>
																	<ListItemButton>
																		<ListItemIcon>
																			<RadioButtonChecked />
																		</ListItemIcon>
																		<Typography color="text.primary">Recording</Typography>
																	</ListItemButton>
																</ListItem>
															</a>
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
						<h2 className='resources' id="faq">GDSC FAQ</h2>
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
						<h2 className='resources' id="tips">GDSC Tech tips</h2>
						{/* // TODO: Implement this when we have tech tip posts on IG */}
						<Typography>Coming soon</Typography>
					</Grid>
				</Grid>
			</Container>
		</>
	)
}

export default ResourcesPage;
