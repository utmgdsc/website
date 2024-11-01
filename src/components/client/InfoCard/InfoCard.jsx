import { Button, Card, CardActions, CardContent, Typography, Skeleton } from '@mui/material';
import { Link, OpenInNewTabIcon } from '~/components/server';

const CardColors = ['success', 'error', 'warning', 'info'];

/**
 * Gets the events from the GDSC (bevy) API and displays them in a card format.
 * The card has a clickable button that redirects to the event's page.
 *
 * NOTE: because this component is a Server Component, we pass the <a> tag, which means that
 * we cannot use Next.js' Link component. This means that we cannot use the Next.js router
 *
 * @property {string} subtitle the subtitle of the event appearing above the title
 * @property {string} title the title of the event
 * @property {string} href the url of the event
 * @property {string} description the description of the event
 * @property {number} lines the number of lines to show in the description
 * @property {string} linkText the text to show on the button
 * @property {boolean} external whether the link is external or not, i.e., whether to open in a new tab or not
 */
export const InfoCard = ({
	subtitle,
	title,
	href,
	description,
	lines = 4,
	linkText = 'View Details',
	external = true,
}) => {
	return (
		<Card
			sx={{
				borderRadius: '2em',
				display: 'flex',
				flexDirection: 'column',
				height: '100%',
				transition: 'all .3s',
				'&:hover': {
					transform: 'translateY(-5px)',
				},
			}}
		>
			<CardContent sx={{ flexGrow: 1, paddingBottom: '0' }}>
				<Typography gutterBottom variant="h6" component="p">
					{subtitle}
				</Typography>

				<Typography
					gutterBottom
					variant="h5"
					component="h2"
					sx={{
						fontWeight: 'bold',
					}}
				>
					{title}
				</Typography>

				<Typography
					sx={{
						display: '-webkit-box',
						maxWidth: '100%',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						WebkitBoxOrient: 'vertical',
						WebkitLineClamp: lines,
					}}
				>
					{description}
				</Typography>
			</CardContent>
			<CardActions sx={{ padding: '16px' }}>
				<Button
					color={CardColors[Math.floor(Math.random() * CardColors.length)]}
					suppressHydrationWarning
					component={Link}
					href={href}
					rel={external ? 'noopener noreferrer' : undefined}
					size="small"
					sx={{ borderRadius: '2em', textTransform: 'none' }}
					target={external ? '_blank' : undefined}
					variant="contained"
				>
					{linkText}
					<OpenInNewTabIcon />
				</Button>
			</CardActions>
		</Card>
	);
};

/**
 * A skeleton loading variant of the InfoCard component.
 */
export const SkeletonInfoCard = () => {
	return (
		<Card
			sx={{
				borderRadius: '2em',
				display: 'flex',
				flexDirection: 'column',
				height: '100%',
			}}
			className="shadow card-front"
		>
			<CardContent sx={{ flexGrow: 1, paddingBottom: '0' }}>
				<Skeleton variant="text" sx={{ fontSize: '1.25rem' }} />

				<Skeleton variant="text" sx={{ fontSize: '3rem' }} />

				<Skeleton variant="text" sx={{ fontSize: '1rem' }} />
				<Skeleton variant="text" sx={{ fontSize: '1rem' }} />
				<Skeleton variant="text" sx={{ fontSize: '1rem' }} />
			</CardContent>

			<CardActions sx={{ padding: '16px' }}>
				<Skeleton
					sx={{
						height: '4em',
						width: '9em',
						maxWidth: '100%',
					}}
				/>
			</CardActions>
		</Card>
	);
};
