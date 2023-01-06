import pages from '../../pages/pages.jsx';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import TextLink from '../TextLink/index.jsx';
import {
	useLocation,
} from 'react-router-dom';

// AO from https://mui.com/material-ui/react-breadcrumbs/#RouterBreadcrumbs.js
const RouterBreadcrumb = () => {
	/** Split the pathname into an array of strings */
	const pathnames = useLocation().pathname.split('/').filter((x) => x);

	return (
		<Breadcrumbs
			separator={<NavigateNextIcon fontSize="small" />}
			aria-label="breadcrumb"
		>
			<TextLink underline="hover" color="inherit" href={pages[0]["path"]}>
				{pages[0]["name"]}
			</TextLink>
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
					<TextLink underline="hover" color="inherit" href={to} key={to}>
						{pages[pageIndex]["name"]}
					</TextLink>
				);
			})}
		</Breadcrumbs>
	);
}

export default RouterBreadcrumb;
