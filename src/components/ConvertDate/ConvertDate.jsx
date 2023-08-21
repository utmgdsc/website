/**
 * Converts ISP 8601 date string to more unambiguous format
 * @property {string} date The date string in DD-MM-YYYY or ISP 8601 format
 *
 * @returns {string} The localized date string
 */
export const ConvertDate = ({ date }) => {
	// parse the date string into a date object
	const dateObj = Date.parse(date);

	// convert the date object into a string with the desired format
	// undefined to use the browser's locale
	const dateStr = new Date(dateObj).toLocaleDateString(undefined, {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	// return the date string
	return dateStr;
};
