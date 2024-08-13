/**
 * returns nothing when expiryDate is in the past
 *
 * @param {object} props
 * @param {string} props.date - date in format YYYY-MM-DD
 * @param {JSX.Element} props.children - children to hide if expired
 * @returns {JSX.Element | null} children if not expired, nothing if expired
 */
export const ExpiryContainer = ({ date, children }) => {
	if (new Date(date) < new Date()) {
		return <></>;
	} else {
		return children;
	}
};
