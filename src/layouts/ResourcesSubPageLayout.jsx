import { RouterBreadcrumb } from '../components';

import { HeroLayout } from './HeroLayout';

import { useEffect } from 'react';

/**
 * Layout for resources pages (workshops, projects, etc.)
 * @param {Object} children - Children components
 * @param {string} title - Title of the page
 * @param {string} picture - Picture to be used as the hero header
 * @param {string} id - Container id
 * @param {string} position - Position of the hero header
 * @param {number} height - Height of the hero header
 * @return {JSX.Element} Resource layout component
 */
export const ResourceLayout = ({ children, title, picture, id, position, height }) => {
	useEffect(() => {
		document.title = `GDSC UTM - ${title}`;
	}, [title]);

	return (
		<HeroLayout title={title} picture={picture} id={id} position={position} height={height}>
			<RouterBreadcrumb />
			<br />
			{children}
		</HeroLayout>
	);
};
