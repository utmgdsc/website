import Image from 'next/image';
import { useTheme } from '@mui/material/styles';

/**
 * An image that changes based on the system theme
 * @param {string} srcLight The light mode image
 * @param {string} srcDark The dark mode image
 * @param {string} alt The alt text for the image
 * @param {import('next/image').ImageProps} props The props to pass to the Image component
 */
export const ThemedImage = ({ srcLight, srcDark, alt, ...props }) => {
	const theme = useTheme();
	const systemTheme = theme.palette.mode === 'dark';

	return <Image src={systemTheme ? srcDark : srcLight} alt={alt} {...props} />;
};
