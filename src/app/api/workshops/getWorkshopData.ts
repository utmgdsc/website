import yaml from 'js-yaml';

export interface WorkshopItem {
	/** The name of the workshop */
	name: string;
	/** The date of the workshop in YYYY-MM-DD format */
	date: string;
	/** The host of the workshop */
	host: string[];
	/** The description of the workshop */
	description: string;
	/** The link to the starter code */
	code?: string;
	/** The link to the slides */
	slides?: string;
	/** The link to the recording */
	recording?: string;
}

/**
 * Get data from the workshops repo, and parse it into a JSON object
 */
export const getData = async () => {
	if (!process.env.WORKSHOPS_HOSTNAME) {
		throw new Error('WORKSHOPS_HOSTNAME environment variable not set');
	}

	return fetch(`https://${process.env.WORKSHOPS_HOSTNAME}/all.yml`, {
		next: { revalidate: 86400 }, // revalidate daily
	})
		.then(response => {
			if (!response.ok) {
				throw new Error(response.statusText);
			}

			return response.text();
		})
		.then(text => {
			return yaml.load(text);
		})
		.catch(() => {
			return {};
		});
};

/**
 * parse workshop data into a nested list of headings
 */
export const parseWorkshops = (workshops): { [key: string]: WorkshopItem[] } => {
	// Iterate through each year
	return Object.entries(workshops).reduce((parsedData, [year, categories]: [string, WorkshopItem[]]) => {
		// Iterate through each category
		Object.entries(categories).forEach(([, workshopsList]) => {
			// Get the category name
			const categoryName = Object.keys(workshopsList)[0];

			// Initialise category array
			parsedData[categoryName] = parsedData[categoryName] || [];

			// Iterate through each workshop
			workshopsList[categoryName].forEach(workshop => {
				// Update the date string
				const newDate = `${year}-${workshop.date}`;

				// update the slides link to be absolute
				if (workshop.slides && !workshop.slides.startsWith('http')) {
					workshop.slides = `https://${process.env.WORKSHOPS_HOSTNAME}/${year}/${workshop.slides}`;
				}

				// Add the workshop data to the category array
				parsedData[categoryName].push({ ...workshop, date: newDate });
			});
		});

		// Return the parsed data
		return parsedData;
	}, {});
};
