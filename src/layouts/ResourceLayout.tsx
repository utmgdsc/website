import { RouterBreadcrumb } from '~/components/client';

import { HeroLayout, HeroLayoutProps } from '~/layouts/HeroLayout';

/**
 * Layout for resources pages (workshops, projects, etc.)
 */
export const ResourceLayout = (props: HeroLayoutProps) => {
	return (
		<HeroLayout {...props}>
			<RouterBreadcrumb />
			<br />
			{props.children}
		</HeroLayout>
	);
};
