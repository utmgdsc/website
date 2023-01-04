import React from 'react';
import SkeletonLoadedImage from '../SkeletonLoadedImage';
import TextLink from '../TextLink';
import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography
} from '@mui/material';


/**
 * Given a link, this component will render an image and a title in a card format
 * @param {link} link object
 * @param {title} title of the link
 * @param {image} image of the link
 * @param {description} description of the link if applicable
 * @param {alt} alt text for the image
 */
const ImageLinkCard = ({ link, title, image, description, alt }) => {
	/**
	 * Unfortunately needed as a separate component to pass props to the skeleton
	 * @returns {JSX.Element} The skeleton loaded image
	 */
	const SkeletonLoadedImageLinkCard = () => {
		return (
			<SkeletonLoadedImage
				src={image}
				alt={alt}
			/>
		);
	};

	// todo for UX add an arrow

	return (
		<Card
			sx={{
				maxWidth: 345,
				borderRadius: 1,
				boxShadow: 1,
				transition: '0.3s',
				'&:hover': {
					boxShadow: 3,
				},
			}}
		>
			<CardActionArea component={TextLink} href={link}>
				<CardMedia
					component={SkeletonLoadedImageLinkCard}
					height="140"
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

export default ImageLinkCard;
