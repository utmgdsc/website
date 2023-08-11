import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

import { Link } from '@/components';
import Image from 'next/image'

/**
 * Given a link, this component will render an image and a title in a card format
 * @param {string} href href of the link
 * @param {string} title title of the card
 * @param {string} image image of the card
 * @param {string} description description of the card if applicable
 * @param {string} alt alt text for the image
 * @param {number} height height of the image
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
				maxWidth: 345,
			}}
		>
			<CardActionArea component={Link} href={href}>
				<CardMedia
					component={() => (
						<Image
							height={height}
							placeholder="blur"
							src={image}
							alt={alt}
							className="MuiCardMedia-img MuiCardMedia-media"
						/>
					)}
					height={height}
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
