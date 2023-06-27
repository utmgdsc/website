'use client'
/** @jsxImportSource @emotion/react */
import React from 'react';

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

import { Link } from '../Link/Link';
import {
  SkeletonLoadedImage,
} from '../SkeletonLoadedImage/SkeletonLoadedImage';

/**
 * Given a link, this component will render an image and a title in a card format
 * @param {string} link href of the link
 * @param {string} title of the card
 * @param {string} image of the card
 * @param {string} description of the card if applicable
 * @param {string} alt text for the image
 * @param {string} height of the image
 */
export const ImageLinkCard = ({ href, title, image, description, alt, height = 140 }) => {
	// todo for UX add an arrow

	return (
		<Card
			sx={{
				borderRadius: 1,
				boxShadow: 1,
				transition: '0.3s',
				'&:hover': {
					boxShadow: 3,
				},
				maxWidth:  345,
			}}
		>
			<CardActionArea
				component={Link}
				href={href}
			>
				<CardMedia
					component={() =>
						<SkeletonLoadedImage
							height={height}
							src={image}
							alt={alt}
							className="MuiCardMedia-img MuiCardMedia-media"
						/>
					}
					height={height}
					image={image}
					alt={title}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};
