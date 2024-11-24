import { forwardRef } from 'react';
import NextLink from 'next/link';
import { OpenInNew } from '@mui/icons-material';
import { Link as MaterialLink } from '@mui/material';

export const OpenInNewTabIcon = () => (
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
);

/**
 * A link
 * @param {Object} props
 * @param {React.ReactNode} props.children The link's children
 * @param {string} props.href The link's href
 * @param {React.Ref} props.forwardedRef A ref to pass to the link
 * @param {boolean} props.external If true, the link will open in a new tab
 * @param {boolean} props.openInNewTab If true, the link will open in a new tab
 * @param {Object} props.props Any other props
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
			{openInNewTab && <OpenInNewTabIcon />}
		</MaterialLink>
	);
};

/**
 * A link that supports MUI styling
 * @param {Object} props
 * @param {string} props.href The link's href
 * @param {React.Ref} props.forwardedRef A ref to pass to the link
 * @param {boolean} props.external If true, the link will open in a new tab
 * @param {boolean} props.openInNewTab If true, the link will open in a new tab
 * @param {Object} props.props Any other props
 */
export const Link = forwardRef((props, ref) => <NonForwardLink {...props} forwardedRef={ref} />);

Link.displayName = 'Link';
