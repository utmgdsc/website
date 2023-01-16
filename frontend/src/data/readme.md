# Schema for the data files
For a more thorough explanation of the data files, please refer to the actual files in the `src/data` folder. This file is meant to be a quick reference for the schema of the data files. The data files are in JSON format. The following is a list of the data files and their schema.

## `faq.json`
The `faq.json` file contains the FAQ entries. It is an array of objects, each object representing a single FAQ entry. The object has the following properties:
- `question`: The question of the FAQ entry.
- `answer`: The answer of the FAQ entry.

## `footer.json`
The `footer.json` file contains the footer links. It is an object, each object representing a section.
- each key is the name of the section (e.g. `About`, `Legal`, `Social`)
- in each key, contains another object, each with the following properties:
  - the key name of each sub-object is the name of the link
  - `URL`: The URL of the link.
  - `external`: Whether the link is external or not. If `true`, the link will open in a new tab.

## `projects.js`
The `projects.js` file contains the projects. It is an array of objects, each object representing a single project. The object has the following properties:
- `title`: The name of the project.
- `url`: The URL of the project.
- `description`: The description of the project.

## `team.json`
The `team.json` file contains the team members. It is an array of objects, each object representing a single team member. The object has the following properties:
- `name`: The name of the team member.
- `role`: The role of the team member.
- `pronouns`: The pronouns of the team member.
- `picture`: The image of the team member. Note that the image should be in the `src/assets/images/team` folder, and that names are case-sensitive.

## `workshops.json`
The `workshops.json` file contains the workshops. It is an object.
- The name of each object is the type of workshop
- Each object contains an array of objects representing workshops, with the following properties:
  - `detail`: The title of the workshop.
  - `date`: The date of the workshop.
  - `code`: The url to the starter code code of the workshop.
  - `slides`: The url to the slides of the workshop.
  - `recording`: The url to the recording of the workshop.
  - `host`: An array of the names of the hosts of the workshop.
