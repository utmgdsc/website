export interface Project {
	/** The name of the project */
	title: string;
	/** The URL to the project */
	url: string;
	/** The description of the project */
	description: string;
	/* The year the project was completed */
	year: number;
	/** The session the project was completed in */
	session: 'Fall' | 'Winter' | 'Summer';
}

/** `projects.json` type */
export interface Projects {
	projects: Project[];
}
