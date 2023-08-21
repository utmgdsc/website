/**
 * returns nothing when expiryDate is in the past
 *
 * @property {string} date - date in format YYYY-MM-DD
 * @property {JSX.Element} children - children to hide if expired
 * @returns {JSX.Element | null} children if not expired, nothing if expired
 */
export const ExpiryContainer = ({ date, children }) => {
	if (new Date(date) < new Date()) {
		return null;
	} else {
		return children;
	}
};
