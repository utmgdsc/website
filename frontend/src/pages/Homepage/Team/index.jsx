import "./index.css";
import { Typography } from "@mui/material";
import SkeletonLoadedImage from "../../../components/SkeletonLoadedImage";

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
        <div className='member'>

            <SkeletonLoadedImage
                src={picture}
                alt={"A head shot of " + name + ", " + role}
            />

            <p className='text secondary'>
                <span className='introduction'>
                    <strong>{name}</strong> <em>{pronouns}</em>
                </span>
                <span className='role'> {role}</span>
            </p>
        </div>
    )
};

/**
 * Filters team members by role
 * @param {*} data props.data from the json file
 * @param {string} subTeam substring to find in role
 * @param {string} title title of the team
 */
const Team = ({ data, subTeam, title }) => {
    // do not return anything if there are no team members in the subteam
    const team = data.filter(teamMember => teamMember.role.toLowerCase().includes(subTeam));

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
                        picture={teamMember.picture === undefined ? require("../../../assets/default_user.png") : require("../../../assets/team/" + teamMember.picture)}
                    />
                ))}

            </div>
        </>
    );
}

export default Team;
