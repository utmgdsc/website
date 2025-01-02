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
 * @param {React.Ref} props.ref A ref to pass to the link
 * @param {boolean} props.external If true, the link will open in a new tab
 * @param {Object} props.props Any other props
 * @returns {JSX.Element} A link
 */
export const Link = ({ children, href, ref, external, ...props }) => (
	<MaterialLink
		component={NextLink}
		href={href}
		ref={ref}
		rel={external ? 'noopener noreferrer' : undefined}
		target={external ? '_blank' : undefined}
		{...props}
	>
		{children}
		{external && <OpenInNewTabIcon />}
	</MaterialLink>
);
