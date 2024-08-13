/**
 * @fileoverview MUI accordion but it works without JS
 */
import { Accordion as MUIAccordion, AccordionSummary as MUIAccordionSummary } from '@mui/material';
import { Fragment, useEffect, useState } from 'react';

/**
 * @returns {any} undefined if JS is enabled, otherwise, returns the default value
 */
const useOnload = def => {
	const [loaded, setLoaded] = useState(def);

	useEffect(() => {
		setLoaded(undefined);
	}, []);

	return loaded;
};

/** a react component that filters all props */
const FragmentFilter = ({ children } = {}) => <Fragment>{children}</Fragment>;

/**
 * load a proper "details" fallback when theres no JS
 */
export const Accordion = props => {
	const unset = useOnload('unset !important');

	return (
		<MUIAccordion
			sx={{
				'.MuiCollapse-root' /* the accordion content */: {
					height: unset,
					minHeight: unset,
					visibility: unset,
				},
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

export const AccordionSummary = props => {
	return (
		<MUIAccordionSummary component={useOnload('summary')} {...props}>
			{props.children}
		</MUIAccordionSummary>
	);
};
