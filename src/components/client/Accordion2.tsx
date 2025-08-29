/**
 * @fileoverview MUI accordion but it works without JS
 */
import { Accordion as MUIAccordion, AccordionSummary as MUIAccordionSummary } from '@mui/material';
import type { AccordionProps, AccordionSummaryProps } from '@mui/material';
import { Fragment, useEffect, useState } from 'react';

/**
 * @returns undefined if JS is enabled, otherwise, returns the default value
 */
const useOnload = <T,>(def: T | undefined) => {
	const [loaded, setLoaded] = useState(def);

	useEffect(() => {
		setLoaded(undefined);
	}, []);

	return loaded;
};

/** a react component that filters all props */
const FragmentFilter = ({ children }: { children: React.ReactNode }) => <Fragment>{children}</Fragment>;

/**
 * load a proper "details" fallback when theres no JS
 */
export const Accordion = (props: AccordionProps) => {
	const unset = useOnload<boolean>(true);

	return (
		<MUIAccordion
			sx={{
				/* the accordion content */
				'.MuiCollapse-root': unset
					? {
							height: 'unset !important',
							minHeight: 'unset !important',
							visibility: 'unset !important',
						}
					: undefined,
				...props.sx,
			}}
			slots={{
				// borrow loaded state from unset
				heading: unset ? FragmentFilter : undefined,
			}}
			component={useOnload('details')}
			{...props}
		>
			{props.children}
		</MUIAccordion>
	);
};

export const AccordionSummary = (props: AccordionSummaryProps) => {
	return (
		<MUIAccordionSummary component={useOnload('summary')} {...props}>
			{props.children}
		</MUIAccordionSummary>
	);
};
