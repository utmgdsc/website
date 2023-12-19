import React from 'react';
import NextLink from 'next/link';
import { OpenInNew } from '@mui/icons-material';
import { Link as MaterialLink } from '@mui/material';

/**
 * A link
 * @property {React.ReactNode} children The link's children
 * @property {string} href The link's href
 * @property {React.Ref} forwardedRef A ref to pass to the link
 * @property {boolean} external If true, the link will open in a new tab
 * @property {boolean} openInNewTab If true, the link will open in a new tab
 * @property {Object} props Any other props
 * @returns {JSX.Element} A link
 */
const NonForwardLink = ({ children, href, forwardedRef, external, openInNewTab = external, ...props }) => {
	return (
		<MaterialLink
			component={NextLink}
			href={href}
			ref={forwardedRef}
			rel={openInNewTab ? 'noopener noreferrer' : undefined}
			target={openInNewTab ? '_blank' : undefined}
			{...props}
		>
			{children}
			{openInNewTab && (
				<OpenInNew
					fontSize="inherit"
					color="inherit"
					titleAccess="Opens in new tab"
					sx={{
						height: '0.8em',
						marginLeft: '0.3em',
						opacity: 0.8,
						width: '0.8em',
						'&:hover': {
							opacity: 1,
						},
					}}
				/>
			)}
		</MaterialLink>
	);
};

/**
 * A link that supports MUI styling
 * @property {string} href The link's href
 * @property {React.Ref} forwardedRef A ref to pass to the link
 * @property {boolean} external If true, the link will open in a new tab
 * @property {boolean} openInNewTab If true, the link will open in a new tab
 * @property {Object} props Any other props
 */
export const Link = React.forwardRef((props, ref) => <NonForwardLink {...props} forwardedRef={ref} />);
