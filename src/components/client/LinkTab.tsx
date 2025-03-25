import { Link, LinkProps } from '~/components/server';
import { styled } from '@mui/material/styles/';
import { Tab } from '@mui/material';
import type {} from '@mui/material/themeCssVarsAugmentation';

type LinkTabProps = React.ComponentProps<typeof Tab> & LinkProps;

/**
 * A styled version of the Tab component. It renders a NextJS {@link https://nextjs.org/docs/app/api-reference/components/link | Link} component for the navbar.
 * @param {import('@mui/material/Tab').TabProps} props - props of the Tab component
 * @returns {JSX.Element} a styled version of the Tab component
 */
export const LinkTab = styled((props: LinkTabProps) => <Tab component={Link} {...props} />)(({ theme }) => ({
	color: theme.vars.palette.text.secondary,
	fontFamily: 'inherit',
	fontSize: '1em',
	fontWeight: 'normal',
	letterSpacing: '0 !important',
	padding: '1.5em',
	textTransform: 'none',
	whiteSpace: 'nowrap',
	'&.Mui-selected': {
		color: theme.vars.palette.text.primary,
		fontWeight: 'bold',
	},
}));
