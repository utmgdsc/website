import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

import { Link } from '~/components/server';
import Image from 'next/image';

/**
 * Given a link, this component will render an image and a title in a card format
 * @param {Object} props
 * @param {string} props.href href of the link
 * @param {string} props.title title of the card
 * @param {string} props.image image of the card
 * @param {string} props.description description of the card if applicable
 * @param {string} props.alt alt text for the image
 * @param {number} props.height height of the image
 * @param {Object} props.imgProps props for the image
 */
export const ImageLinkCard = ({ href, title, image, description, alt, height = 140, imgProps }) => {
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
							src={image}
							alt={alt}
							className="MuiCardMedia-img MuiCardMedia-media"
							{...imgProps}
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
