import { Avatar, Box, Typography } from '@mui/material';
import { ImageFilterProps } from '~/components/client';
import { getProprietaryURL } from '~/components/server';

interface TeamMember {
	/** name of the team member */
	name: string;
	/** role of the team member */
	role: string;
	/** picture of the team member */
	picture?: string;
}

/**
 * A single team member
 */
const Person = ({ name, role, picture }: TeamMember) => {
	return (
		<Box component="figure" sx={{ margin: 0, display: 'inline-block', padding: '1em' }}>
			<Avatar
				src={picture ? getProprietaryURL(picture) : undefined}
				slots={{
					img: ImageFilterProps,
				}}
				slotProps={{
					img: {
						// no alt text needed - picture already sufficiently described by the paragraph,
						// so there is no need to repeat the information
						alt: '',
						width: 110,
						height: 110,
					},
				}}
				draggable="false"
				sx={{
					img: {
						height: 'inherit !important',
						objectFit: 'cover',
						pointerEvents: 'none',
						userSelect: 'none',
						width: 'inherit !important',
					},
					height: '6.9rem',
					width: '6.9rem',
					margin: '0 auto',
				}}
			/>

			<figcaption>
				<Box
					component="span"
					sx={{
						display: 'block',
						fontSize: '1.25rem',
						padding: '0.25em 0',
					}}
					className="introduction"
				>
					<Typography
						component="strong"
						sx={{
							fontSize: '1.5rem',
							fontWeight: 'bold',
						}}
					>
						{name}
					</Typography>
				</Box>
				<Typography
					sx={{
						opacity: 0.9,
						display: 'block',
					}}
				>
					{role}
				</Typography>
			</figcaption>
		</Box>
	);
};

interface TeamProps {
	/** members data from the json file */
	teamInfo: TeamMember[];
	/** title of the team */
	title: string;
}

/**
 * Team component. Displays a team with a title and a list of team members
 */
export const Team = ({ teamInfo, title }: TeamProps) => {
	// do not return anything if there are no team members in the team
	if (teamInfo.length === 0) {
		return null;
	}

	return (
		<section>
			<Typography
				align="center"
				component="h3"
				key={title}
				variant="h4"
				sx={{
					fontWeight: 'bold',
				}}
			>
				{/* auto pluralize the title */}
				{title + (teamInfo.length > 1 ? 's' : '')}
			</Typography>
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'center',
					left: 0,
					margin: 'auto',
					right: 0,
					textAlign: 'center',
				}}
			>
				{teamInfo.map((teamMember, index) => (
					<Person
						key={index}
						name={teamMember.name}
						role={teamMember.role}
						picture={teamMember.picture ? `team/${teamMember.picture}` : undefined}
					/>
				))}
			</Box>
		</section>
	);
};
