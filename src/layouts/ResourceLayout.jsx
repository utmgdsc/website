import { RouterBreadcrumb } from '@/components/client';

import { HeroLayout } from '@/layouts/HeroLayout';

/**
 * Layout for resources pages (workshops, projects, etc.)
 * @property {Object} children - Children components
 * @property {string} title - Title of the page
 * @property {string} picture - Picture to be used as the hero header
 * @property {string} id - Container id
 * @property {string} position - Position of the hero header
 * @property {number} height - Height of the hero header
 * @return {JSX.Element} Resource layout component
 */
export const ResourceLayout = ({ children, title, picture, id, position, height }) => {
	return (
		<HeroLayout title={title} picture={picture} id={id} position={position} height={height}>
			<RouterBreadcrumb />
			<br />
			{children}
		</HeroLayout>
	);
};
