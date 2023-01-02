import "./index.scss";
import { Typography } from "@mui/material";
import SkeletonLoadedImage from "../../../components/SkeletonLoadedImage";

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
		<div className='member'>

			<SkeletonLoadedImage
				src={picture}
				alt={"A head shot of " + name + ", " + role}
				draggable="false"
			/>

			<p className='text secondary'>
				<span className='introduction'>
					<strong>{name}</strong> <em>{pronouns}</em>
				</span>
				<span className='role'> {
					removeLast === undefined ? role : role.split(" ").slice(0, -removeLast).join(" ")
				}</span>
			</p>
		</div>
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
	// do not return anything if there are no team members in the subteam
	const roles = subTeam.split(","); // roles to filter by

	// filter team members by role
	const team = data.filter((member) => {
		for (let i = 0; i < roles.length; i++) {
			if (member.role.toLowerCase().includes(roles[i].toLowerCase())) {
				return true;
			}
		}
		return false;
	});

	if (team.length <= 0) {
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
						picture={teamMember.picture === undefined ? require("../../../assets/default_user.png") : require("../../../assets/team/" + teamMember.picture)}
					/>
				))}

			</div>
		</>
	);
}

export default Team;
