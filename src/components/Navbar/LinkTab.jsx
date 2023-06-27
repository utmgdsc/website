import NextLink from 'next/link'
import { Tab } from '@mui/material';
import { styled } from '@mui/material/styles';

/**
 * A styled version of the Tab component. It renders a NextJS {@link https://nextjs.org/docs/app/api-reference/components/link | Link} component for the navbar.
 * @returns {JSX.Element} a styled version of the Tab component
 */
export const LinkTab = styled((props) =>
	<Tab component={NextLink} {...props} />)(
		({ theme }) => ({
			color: theme.palette.text.secondary,
			fontFamily: "inherit",
			fontSize: "1em",
			fontWeight: "normal",
			letterSpacing: "0 !important",
			padding: "1.5em",
			textTransform: "none",
			whiteSpace: "nowrap",
			"&.Mui-selected": {
				color: theme.palette.text.primary,
				fontWeight: "bold",
			},
		}),
	);
