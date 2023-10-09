/**
 * Turns a workshop name and date into a hash
 * @param {string} name Workshop name
 * @param {string} date Workshop date
 *
 * @return {string} Workshop hash
 */
export const workshopHash = (name, date) => {
	return `${date.replace(/\W/g, '')}-${name.replace(/\W/g, '')}`;
};
