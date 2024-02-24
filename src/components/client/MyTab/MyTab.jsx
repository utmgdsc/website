import { Link } from '@/components/server';
import { Tab } from '@mui/material';

/**
 * This is a tab that uses next/link
 */
export const MyTab = ({ ...props }) => {
	return <Tab component={Link} {...props} />;
};
