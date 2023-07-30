/**
 * returns nothing when expiryDate is in the past
 *
 * @param {string} date - date in format YYYY-MM-DD
 */
export const ExpiryContainer = ({ date, children }) => {
	if (new Date(date) < new Date()) {
		return null;
	} else {
		return children;
	}
};
