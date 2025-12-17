import { Accordion as MUIAccordion, AccordionSummary as MUIAccordionSummary } from '@mui/material';
import type { AccordionProps, AccordionSummaryProps } from '@mui/material';
import { ReactNode, Fragment, useSyncExternalStore } from 'react';

const emptySubscribe = () => () => {};

/**
 * Uses useSyncExternalStore to safely handle SSR vs client hydration.
 * Server returns the default value, client returns undefined.
 *
 * @returns undefined if JS is enabled, otherwise, returns the default value
 */
const useOnload = <T,>(def: T | undefined): T | undefined => {
	return useSyncExternalStore(
		emptySubscribe,
		() => undefined, // client: JS is enabled
		() => def // server: return the fallback
	);
};

/** removes all passed props and just returns children */
const FragmentFilter = ({ children }: { children: ReactNode }) => <Fragment>{children}</Fragment>;

/**
 * MUI Accordion but it works without JS
 *
 * loads a proper "details" fallback when theres no JS
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

/**
 * MUI AccordionSummary but it works without JS
 */
export const AccordionSummary = (props: AccordionSummaryProps) => {
	return (
		<MUIAccordionSummary component={useOnload('summary')} {...props}>
			{props.children}
		</MUIAccordionSummary>
	);
};
