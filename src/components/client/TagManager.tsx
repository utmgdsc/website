import { useEffect } from 'react';
import TagManagerModule from 'react-gtm-module';

interface TagManagerProps {
	/** The children to render */
	children: React.ReactNode;
}

/**
 * Component to initialize Google Tag Manager
 */
export const TagManager = ({ children }: TagManagerProps) => {
	useEffect(() => {
		if (!process.env.NEXT_PUBLIC_GTM_ID || process.env.NODE_ENV === 'development') {
			return;
		}

		const tagManagerArgs = {
			gtmId: process.env.NEXT_PUBLIC_GTM_ID,
		};

		TagManagerModule.initialize(tagManagerArgs);
	}, []);

	return children;
};
