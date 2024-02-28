import { Link } from '@/components/server';
import { Tab, Tabs } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

/**
 * Pathname aware tabs that use next/link
 *
 * What's nice about this is that the current tab state is saved
 * when copying the url, in comparison to the default mui tabs
 * where this behavior is not present
 */
export const PathnameTabs = ({ values, urlPrepend, defaultValue, slice, ...props }) => {
	/* update navbar tabs on path change */
	const pathname = usePathname();

	const currentTab = useMemo(() => {
		const tab = pathname.toLowerCase().split('/')[slice];
		if (values.includes(tab)) {
			return tab;
		} else if (defaultValue) {
			return defaultValue;
		}
	}, [pathname, defaultValue, values, slice]);

	return (
		<Tabs value={currentTab} {...props}>
			{values.map(tab => {
				return <Tab component={Link} key={tab} href={`${urlPrepend}/${tab}`} value={tab} label={tab} />;
			})}
		</Tabs>
	);
};
