import { RouterBreadcrumb } from '~/components/client';

import { HeroLayout } from '~/layouts/HeroLayout';

/**
 * Layout for resources pages (workshops, projects, etc.)
 * @param {Object} props
 * @param {Object} props.children - Children components
 * @param {string} props.title - Title of the page
 * @param {string} props.picture - Picture to be used as the hero header
 * @param {string} props.id - Container id
 * @param {string} props.position - Position of the hero header
 * @param {number} props.height - Height of the hero header
 * @param {Object} props.props - other props passed to HeroLayout
 * @return {JSX.Element} Resource layout component
 */
export const ResourceLayout = ({ children, title, picture, id, position, height, ...props }) => {
	return (
		<HeroLayout title={title} picture={picture} id={id} position={position} height={height} {...props}>
			<RouterBreadcrumb />
			<br />
			{children}
		</HeroLayout>
	);
};
