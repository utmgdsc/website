import yaml from 'js-yaml';

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
 *
 * @param {Object} workshops workshop data
 */
export const parseWorkshops = workshops => {
	// Iterate through each year
	return Object.entries(workshops).reduce((parsedData, [year, categories]) => {
		// Iterate through each category
		// eslint-disable-next-line
		Object.entries(categories).forEach(([_categoryNum, workshopsList]) => {
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
