import { Button, Card, CardActions, CardContent, Typography, Skeleton } from '@mui/material';
import { ReactNode } from 'react';
import { Link, OpenInNewTabIcon } from '~/components/client';

const CardColors: ('success' | 'error' | 'warning' | 'info')[] = ['success', 'error', 'warning', 'info'];

interface InfoCardProps {
	/** the subtitle of the event appearing above the title */
	subtitle: string | ReactNode;
	/** the title of the event */
	title: string;
	/** the url of the event */
	href: string;
	/** the description of the event */
	description: string;
	/** the number of lines to show in the description */
	lines?: number;
	/** the text to show on the button */
	linkText?: string;
	/** whether the link is external or not, i.e., whether to open in a new tab or not */
	external?: boolean;
}

const cardColorHash = (title: string) => {
	let hash = 0;

	for (let i = 0; i < title.length; i++) {
		hash += title.charCodeAt(i);
	}

	return hash % CardColors.length;
};
/**
 * Gets the events from GDG (bevy) API and displays them in a card format.
 * The card has a clickable button that redirects to the event's page.
 *
 * NOTE: because this component is a Server Component, we pass the <a> tag, so
 * we cannot use Next.js' Link component. Thus we can't use the Next.js router
 */
export const InfoCard = ({
	subtitle,
	title,
	href,
	description,
	lines = 4,
	linkText = 'View Details',
	external = true,
}: InfoCardProps) => {
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
					color={CardColors[cardColorHash(title)]}
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
