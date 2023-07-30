import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

/**
 * Component to initialize Google Tag Manager
 *
 * @param {React.ReactNode} children The children to render
 */
export const Analytics = ({children}) => {
    useEffect(() => {
		const tagManagerArgs = {
            gtmId: process.env.NEXT_PUBLIC_GTM_ID
        };

		TagManager.initialize(tagManagerArgs);
	}, []);

    return children;
}
