import "./Team.css";
import { Typography } from "@mui/material";

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
            <img src={picture} alt={"A head shot of " + name} />
            <p className='text secondary'>
                <span className='introduction'>
                    <strong>{name} </strong> <em>{pronouns}</em>
                </span>
                {role}
            </p>
        </div>
    )
};

/**
 * Filters team members by role
 * @param {*} data props.data from the json file
 * @param {string} subTeam substring to find in role
 */
const getSubTeam = (data, subTeam, title) => {
    // do not return anything if there are no team members in the subteam
    const team = data.filter(teamMember => teamMember.role.toLowerCase().includes(subTeam));
    if ( team.length <= 0) {
        return null;
    }

    return (
        [
            <Typography
                align="center"
                component="h3"
                fontWeight="bold"
                variant="h4"
                marginTop={8}
            >
                {title + (team.length > 1 ? "s" : "")}
            </Typography>,

            <div className="team">

                {team.map(teamMember => (
                    <Person
                        key={teamMember.name}
                        name={teamMember.name}
                        pronouns={teamMember.pronouns}
                        role={teamMember.role}
                        picture={teamMember.picture === undefined ? require("../../../assets/default_user.png") : require("../../../assets/team/" + teamMember.picture)}
                    />
                ))}

            </div>,
        ]
    );
}

/**
 * The team page. Note: everyone must have a unique name!
 * @param {*} props team.json from the data folder
 * @returns {object} the team page
 */
const Team = (props) => {
    return (
        <div>
            {getSubTeam(props.data, "pres", "President")}
            {getSubTeam(props.data, "lead", "Team Lead")}
            {getSubTeam(props.data, "associate", "Associate")}
            {getSubTeam(props.data, "advisor", "Advisor")}
        </div>
    );
};

export default Team;
