# Schema for the data files
For a more thorough explanation of the data files, please refer to the actual files in the `src/data` folder. This file is meant to be a quick reference for the schema of the data files. The data files are in JSON format. The following is a list of the data files and their schema.

## `faq.json`
The `faq.json` file contains the FAQ entries. It is an object where each key represents a category of questions. The name of the key represents the category name. Each key contains an array of objects, each object representing a single FAQ entry. The object has the following properties:
  - `question` (string): The question of the FAQ entry.
  - `answer` (string): The answer of the FAQ entry.

## `footer.json`
The `footer.json` file contains the footer links. It is an object, where each key represents a section of the footer. Each key contains an array of objects, where each object represents a single link. The object has the following properties:
  - `name` (string): The name of the link.
  - `url` (string): The URL of the link.
  - `external` (boolean): Whether the link is external or not. If `true`, the link will open in a new tab.

## `projects.js`
The `projects.js` file contains the projects. It is an array of objects, where each object represents a single project. The object has the following properties:
- `title` (string): The name of the project.
- `url` (string): The URL of the project.
- `description` (string): The description of the project.
- `year` (number): The year the project was completed.
- `session` (string): The session the project was completed.

## `team.json`
The `team.json` file contains the team members. It is an object, where each key represents a team role. Each key contains an array of objects, where each object represents a single team member. The object has the following properties:
- `name`: The name of the team member.
- `role`: The role of the team member.
- `picture`: The image of the team member. Note that the images are stored on the `PROPRIETARY_IMAGES_HOSTNAME` specified in the environment variables. The image is assumed to be placed under the `team` folder on the server.

## `workshops.json`
The `workshops.json` file contains the workshops. It is an object, where each key represents a category of workshop. Each key contains an array of objects, where each object represents a single workshop. The object has the following properties:
  - `name` (string): The name of the workshop.
  - `host` (string): An array of the names of the hosts of the workshop.
  - `description` (string): The title of the workshop.
  - `date` (string): The date of the workshop in YYYY-MM-DD or ISO 8601 format.
  - `code` (string, optional): The URL to the starter code code of the workshop.
  - `slides` (string, optional): The URL to the slides of the workshop.
  - `recording` (string, optional): The URL to the recording of the workshop.

## `NavbarTabData.js`
See JSDoc for more details
