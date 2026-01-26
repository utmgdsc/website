/**
 * Turns a workshop name and date into a hash
 * @param name Workshop name
 * @param date Workshop date
 *
 * @return Workshop hash
 */
export const workshopHash = (name: string, date: string): string => {
	return `${date.replaceAll(/\W/g, '')}-${name.replaceAll(/\W/g, '')}`;
};
