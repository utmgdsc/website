import './Team.scss';

import { Typography } from '@mui/material';

import DefaultUser from '@/assets/graphics/default_user.svg';
// import { ProprietaryImage, SkeletonLoadedImage } from '@/components/client';
import Image from 'next/image';
import { getProprietaryURL } from '@/components/server';
import { ProprietaryImage } from '@/components/client';

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

			<div className="team">
				{teamInfo.map((teamMember, index) => (
					<Person
						key={index}
						name={teamMember.name}
						role={teamMember.role}
						picture={
							teamMember.picture ? `team/${teamMember.picture}` : null
						}
					/>
				))}
			</div>
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
		<figure className="member">
			{
				(picture === null) ?
					<Image
						src={DefaultUser}
						// no alt text needed - picture already sufficiently described by the paragraph,
						// so there is no need to repeat the information
						alt=""
						draggable="false"
						width={200}
						height={200}
					/> :
					<ProprietaryImage
						src={picture}
						// no alt text needed - picture already sufficiently described by the paragraph,
						// so there is no need to repeat the information
						alt=""
						draggable="false"
						width={200}
						height={200}
					/>
			}

			<figcaption>
				<span className="introduction">
					<strong>{name}</strong>
				</span>
				<span className="role"> {role}</span>
			</figcaption>
		</figure>
	);
};

export default Team;
