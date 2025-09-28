import { Link } from '~/components/server';
import { Tab, Tabs } from '@mui/material';
import { usePathname } from 'next/navigation';
import { ComponentProps, useMemo } from 'react';

interface PathnameTabsProps extends ComponentProps<typeof Tabs> {
	/** The list of values to display as tabs */
	values: string[];
	/** The url to prepend to the tab value */
	urlPrepend: string;
	/** The default value to use if no match is found */
	defaultValue?: string;
	/** The index of the tab to use for the pathname */
	slice: number;
}

/**
 * Pathname aware tabs that use next/link
 *
 * What's nice about this is that the current tab state is saved
 * when copying the url, in comparison to the default mui tabs
 * where this behavior is not present
 */
export const PathnameTabs = ({ values, urlPrepend, defaultValue, slice, ...props }: PathnameTabsProps) => {
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
