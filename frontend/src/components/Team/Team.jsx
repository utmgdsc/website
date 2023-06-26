import './Team.scss';

import { Typography } from '@mui/material';

import DefaultUser from '../../assets/graphics/default_user.svg';
import {
	SkeletonLoadedImage,
} from '../SkeletonLoadedImage/SkeletonLoadedImage';

/**
 * Team component. Displays a team with a title and a list of team members
 * @param {Object} teamInfo members data from the json file
 * @param {string} title title of the team
 */
const Team = ({ teamInfo, title }) => {
	// do not return anything if there are no team members in the team
	if (teamInfo.length === 0) {
		return null;
	}

	return (
		<>
			<Typography
				align="center"
				component="h3"
				fontWeight="bold"
				key={title}
				marginTop={8}
				variant="h4"
				>
				{/* auto pluralize the title */}
				{title + (teamInfo.length > 1 ? "s" : "")}
			</Typography>

			<div className="team">
				{teamInfo.map((teamMember, index) => (
					<Person
						key={index}
						name={teamMember.name}
						pronouns={teamMember.pronouns}
						role={teamMember.role}
						picture={teamMember.picture === undefined ? DefaultUser : require(`../../assets/website_proprietary/team/${teamMember.picture}`)}
					/>
					))}
			</div>
		</>
	);
}

/**
 * A single team member
 * @param {string} name name of the team member
 * @param {string} pronouns pronouns of the team member
 * @param {string} role role of the team member
 * @param {string} picture picture of the team member
 * @returns {object} a single team member
 */
const Person = ({ name, role, picture, pronouns }) => {
	return (
		<figure className="member">
			<SkeletonLoadedImage
				src={picture}
				// no alt text needed - picture already sufficiently described by the paragraph,
				// so there is no need to repeat the information
				alt=""
				draggable="false"
			/>

			<figcaption>
				<span className="introduction">
					<strong>{name}</strong> <em>{pronouns}</em>
				</span>
				<span className="role"> {role}</span>
			</figcaption>
		</figure>
	)
};

export default Team;
