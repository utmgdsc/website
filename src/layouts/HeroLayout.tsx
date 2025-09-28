import { Container } from '@mui/material';
import type { ComponentProps, ReactNode } from 'react';

import { HeroHeader, HeroHeaderProps } from '~/components/client';

export interface HeroLayoutProps {
	/** Children components */
	children: ReactNode;
	/** Title of the page */
	title: HeroHeaderProps['text'];
	/** Picture to be used as the hero header */
	picture: HeroHeaderProps['picture'];
	/** Container id */
	id?: string;
	/** Position of the hero header */
	position?: HeroHeaderProps['position'];
	/** Height of the hero header */
	height?: HeroHeaderProps['height'];
	/** Props to pass to the Hero */
	headerProps?: Partial<HeroHeaderProps>;
	/** Props to pass to the Container */
	containerProps?: Partial<ComponentProps<typeof Container>>;
}

/**
 * Layout for pages with a hero header (home, about, etc.)
 */
export const HeroLayout = ({
	children,
	title,
	picture,
	id,
	position = 'top',
	height,
	headerProps,
	containerProps,
}: HeroLayoutProps) => {
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
