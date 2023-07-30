import Image from 'next/image';
import { useMediaQuery } from '@mui/material';

/**
 * An image that changes based on the system theme
 * @param {string} srcLight The light mode image
 * @param {string} srcDark The dark mode image
 * @param {object} props The props to pass to the Image component
 */
export const ThemedImage = ({ srcLight, srcDark, ...props }) => {
    const systemTheme = useMediaQuery('(prefers-color-scheme: dark)');

    return <Image src={systemTheme ? srcDark : srcLight} {...props} />;
}
