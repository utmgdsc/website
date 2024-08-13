import { Container } from '@mui/material';

import { HeroHeader } from '~/components/client';

/**
 * Layout for pages with a hero header (home, about, etc.)
 * @param {Object} props
 * @param {JSX.Element} props.children - Children components
 * @param {string} props.title - Title of the page
 * @param {string} props.picture - Picture to be used as the hero header
 * @param {string} props.id - Container id
 * @param {string} props.position - Position of the hero header
 * @param {number} props.height - Height of the hero header
 * @param {Object} props.headerProps - Props to pass to the Hero
 * @param {Object} props.containerProps - Props to pass to the Container
 * @return {JSX.Element} Resource layout component
 */
export const HeroLayout = ({ children, title, picture, id, position, height, headerProps, containerProps }) => {
	return (
		<>
			<HeroHeader text={title} picture={picture} position={position} height={height} {...headerProps} />
			<Container
				sx={{
					py: 4,
					minHeight: 'calc(100vh - 200px)', // footer is ~200px tall
				}}
				component="main"
				id={id}
				{...containerProps}
			>
				{children}
			</Container>
		</>
	);
};
