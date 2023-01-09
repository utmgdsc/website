import "./index.scss";
import { Typography } from "@mui/material";
import SkeletonLoadedImage from "../SkeletonLoadedImage";
import DefaultUser from "../../assets/default_user.png";

/**
 * A single team member
 * @param {string} name name of the team member
 * @param {string} pronouns pronouns of the team member
 * @param {string} role role of the team member
 * @param {string} picture picture of the team member
 * @param {int} removeLast how many words to remove from the end of the role
 * @returns {object} a single team member
 */
const Person = ({ name, role, picture, pronouns, removeLast }) => {
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
				<span className="role"> {
					removeLast === undefined ? role : role.split(" ").slice(0, -removeLast).join(" ")
				}</span>
			</figcaption>
		</figure>
	)
};

/**
 * Filters team members by role
 * @param {*} data props.data from the json file
 * @param {string} subTeam substring to find in role, comma separated
 * @param {string} title title of the team
 * @param {int} removeLast how many words to remove from the end of the role
 */
const Team = ({ data, subTeam, title, removeLast }) => {
	/**
	 * Roles to filter by
	 * @type {string[]}
	 */
	const roles = subTeam.split(",");

	/**
	 * Filter team members by role
	 * @type {boolean}
	 */
	const team = data.filter((member) => {
		for (let i = 0; i < roles.length; i++) {
			if (member.role.toLowerCase().includes(roles[i].toLowerCase())) {
				return true;
			}
		}
		return false;
	});

	// do not return anything if there are no team members in the subteam
	if (team.length === 0) {
		return null;
	}

	return (
		<>
			<Typography
				align="center"
				component="h3"
				fontWeight="bold"
				key={subTeam + title}
				marginTop={8}
				variant="h4"
			>
				{title + (team.length > 1 ? "s" : "")}
			</Typography>

			<div className="team">

				{team.map((teamMember, index) => (
					<Person
						key={index}
						name={teamMember.name}
						pronouns={teamMember.pronouns}
						role={teamMember.role}
						subTeam={subTeam}
						removeLast={removeLast}
						picture={teamMember.picture === undefined ? DefaultUser : require("../../assets/team/" + teamMember.picture)}
					/>
				))}
			</div>
		</>
	);
}

export default Team;
