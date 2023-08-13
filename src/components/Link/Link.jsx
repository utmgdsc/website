import React from 'react';
import NextLink from 'next/link';
import { OpenInNew } from '@mui/icons-material';
import { Link as MaterialLink } from '@mui/material';

/**
 * A link
 * @param {React.ReactNode} children The link's children
 * @param {string} href The link's href
 * @param {React.Ref} forwardedRef A ref to pass to the link
 * @param {boolean} external If true, the link will open in a new tab
 * @param {boolean} openInNewTab If true, the link will open in a new tab
 * @param {Object} props Any other props
 * @returns {JSX.Element} A link
 */
const NonForwardLink = ({ children, href, forwardedRef, external, openInNewTab = external, ...props }) => {
	return (
		<MaterialLink
			component={NextLink}
			href={href}
			ref={forwardedRef}
			rel={openInNewTab ? 'noopener noreferrer' : ''}
			target={openInNewTab ? '_blank' : ''}
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
 * @param {string} href The link's href
 * @param {React.Ref} forwardedRef A ref to pass to the link
 * @param {boolean} external If true, the link will open in a new tab
 * @param {boolean} openInNewTab If true, the link will open in a new tab
 * @param {Object} props Any other props
 */
export const Link = React.forwardRef((props, ref) => <NonForwardLink {...props} forwardedRef={ref} />);
