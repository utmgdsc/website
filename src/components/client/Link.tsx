import NextLink from 'next/link';
import { OpenInNew } from '@mui/icons-material';
import { Link as MaterialLink, LinkProps as MaterialLinkProps } from '@mui/material';

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

export interface LinkProps extends MaterialLinkProps {
	/** If true, the link will open in a new tab */
	external?: boolean;
}

/**
 * @returns A link
 */
export const Link = ({ children, href, ref, external, ...props }: LinkProps) => (
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
