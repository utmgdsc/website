import React from 'react';
import NextLink from 'next/link';
import { OpenInNew } from '@mui/icons-material';
import { Link as MaterialLink } from '@mui/material';

/**
 * A link
 * @param {Object} props The props
 * @param {React.ReactNode} props.children The link's children
 * @param {string} props.href The link's href
 * @param {boolean} props.external If true, the link will open in a new tab
 * @param {React.Ref} props.forwardedRef A ref to pass to the link
 * @param {boolean} props.noIcon If true, the external icon will not be shown
 * @param {Object} props.props Any other props
 * @returns {JSX.Element} A link
 */
const NonForwardLink = ({ children, href, external, forwardedRef, noIcon = false, ...props }) => {
	return (
		// !!
		<MaterialLink
			component={NextLink}
			href={href}
			ref={forwardedRef}
			rel={external ? 'noopener noreferrer' : ''}
			target={external ? '_blank' : ''}
			{...props}
		>
			{children}
			{external && !noIcon && (
				// give warning if link is external
				// https://www.w3.org/TR/WCAG20-TECHS/G201.html
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

export const Link = React.forwardRef((props, ref) => <NonForwardLink {...props} forwardedRef={ref} />);
