import { useEffect } from 'react';
import TagManagerModule from 'react-gtm-module';

/**
 * Component to initialize Google Tag Manager
 *
 * @property {React.ReactNode} children The children to render
 */
export const TagManager = ({ children }) => {
	useEffect(() => {
		const tagManagerArgs = {
			gtmId: process.env.NEXT_PUBLIC_GTM_ID,
		};

		TagManagerModule.initialize(tagManagerArgs);
	}, []);

	return children;
};
