import { Container } from '@mui/material';

import { HeroHeader } from '~/components/client';

/**
 * Layout for pages with a hero header (home, about, etc.)
 * @property {Object} children - Children components
 * @property {string} title - Title of the page
 * @property {string} picture - Picture to be used as the hero header
 * @property {string} id - Container id
 * @property {string} position - Position of the hero header
 * @property {number} height - Height of the hero header
 * @return {JSX.Element} Resource layout component
 */
export const HeroLayout = ({ children, title, picture, id, position, height }) => {
	return (
		<>
			<HeroHeader text={title} picture={picture} position={position} height={height} />
			<Container sx={{ py: 4 }} component="main" id={id}>
				{children}
			</Container>
		</>
	);
};
