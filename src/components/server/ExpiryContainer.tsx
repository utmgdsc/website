import { ReactNode } from 'react';

interface ExpiryContainerProps {
	/** The date string in YYYY-MM-DD format */
	date: string;
	/** The children to hide if expired */
	children: ReactNode;
}

/**
 * returns nothing when expiryDate is in the past
 *
 * @returns children if not expired, nothing if expired
 */
export const ExpiryContainer = ({ date, children }: ExpiryContainerProps) => {
	if (new Date(date) < new Date()) {
		return null;
	} else {
		return children;
	}
};
