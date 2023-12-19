/**
 * @fileoverview MUI accordion but it works without JS
 */
import { Accordion as MUIAccordion, AccordionDetails as MUIAccordionDetails, AccordionSummary as MUIAccordionSummary } from '@mui/material';
import { useEffect, useState } from 'react';

/**
 * @returns {any} undefined if JS is enabled, otherwise, returns the default value
 */
const useOnload = (def) => {
    const [loaded, setLoaded] = useState(def);

    useEffect(() => {
        setLoaded(undefined);
    }, []);

    return loaded;
}

/**
 * load "details" when theres no JS
 */
export const Accordion = (props) => {
    const unset = useOnload("unset !important");

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
            component={useOnload("details")}
            {...props}
        >
            {props.children}
        </MUIAccordion>
    )
}

/**
 * load "summary" when theres no JS
 */
export const AccordionSummary = (props) => {
    return (
        <MUIAccordionSummary
            component={useOnload("summary")}
            {...props}
        >
            {props.children}
        </MUIAccordionSummary>
    )
}

/**
 * this is just for completeness, feel free to use the MUI one
 */
export const AccordionDetails = (props) => {
    return (
        <MUIAccordionDetails {...props}>
            {props.children}
        </MUIAccordionDetails>
    )
}
