import { useLocation } from 'react-router-dom';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';

import { pages } from '../../pages/index.jsx';
import { Link } from '../Link/Link';

// AO from https://mui.com/material-ui/react-breadcrumbs/#RouterBreadcrumbs.js
export const RouterBreadcrumb = () => {
	/** Split the pathname into an array of strings */
	const pathnames = useLocation().pathname.split('/').filter((x) => x);

	return (
		<Breadcrumbs
			separator={<NavigateNextIcon fontSize="small" />}
			aria-label="breadcrumb"
		>
			<Link underline="hover" color="inherit" href={pages[0]["path"]}>
				{pages[0]["name"]}
			</Link>
			{pathnames.map((value, index) => {
				/** if it is the last link in the map */
				const last = index === pathnames.length - 1;

				/** the url of the current link */
				const to = `/${pathnames.slice(0, index + 1).join('/')}`;

				/** index of pages.jsx to refer to */
				const pageIndex = pages.findIndex((page) => page.path === to);

				return last ? (
					<Typography color="text.primary" key={to}>
						{pages[pageIndex]["name"]}
					</Typography>
				) : (
					<Link underline="hover" color="inherit" href={to} key={to}>
						{pages[pageIndex]["name"]}
					</Link>
				);
			})}
		</Breadcrumbs>
	);
}
