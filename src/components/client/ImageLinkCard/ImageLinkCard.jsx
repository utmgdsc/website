import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

import { Link } from '@/components/server';
import Image from 'next/image';

/**
 * Given a link, this component will render an image and a title in a card format
 * @property {string} href href of the link
 * @property {string} title title of the card
 * @property {string} image image of the card
 * @property {string} description description of the card if applicable
 * @property {string} alt alt text for the image
 * @property {number} height height of the image
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
					<Typography
						variant="body2"
						sx={{
							color: 'text.secondary',
						}}
					>
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};
