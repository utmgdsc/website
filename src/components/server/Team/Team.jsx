import './Team.css';
import { Box, Typography } from '@mui/material';
import DefaultUser from '@/assets/graphics/default_user.svg';
import Image from 'next/image';
import { ProprietaryImage } from '@/components/server';

/**
 * Team component. Displays a team with a title and a list of team members
 * @property {{"key": {"name": string; "role": string; "pronouns": string; "picture": string;}}[]} teamInfo members data from the json file
 * @property {string} title title of the team
 * @returns {JSX.Element} A collection of Person components representing a team
 */
export const Team = ({ teamInfo, title }) => {
	// do not return anything if there are no team members in the team
	if (teamInfo.length === 0) {
		return null;
	}

	return (
		<>
			<Typography align="center" component="h3" fontWeight="bold" key={title} marginTop={8} variant="h4">
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
						picture={teamMember.picture ? `team/${teamMember.picture}` : null}
					/>
				))}
			</Box>
		</>
	);
};

/**
 * A single team member
 * @property {string} name name of the team member
 * @property {string} role role of the team member
 * @property {string} picture picture of the team member
 * @property {string} pronouns pronouns of the team member
 * @returns {JSX.Element} a single team member
 */
const Person = ({ name, role, picture }) => {
	return (
		<Box component="figure" sx={{ margin: 0, display: 'inline-block', padding: '1em' }}>
			{picture === null ? (
				<Image
					src={DefaultUser}
					// no alt text needed - picture already sufficiently described by the paragraph,
					// so there is no need to repeat the information
					alt=""
					draggable="false"
					width={110}
					height={110}
					className="img"
				/>
			) : (
				<ProprietaryImage
					src={picture}
					// no alt text needed - picture already sufficiently described by the paragraph,
					// so there is no need to repeat the information
					alt=""
					draggable="false"
					width={110}
					height={110}
					className="img"
				/>
			)}

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

export default Team;
