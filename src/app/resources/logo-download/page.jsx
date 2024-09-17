import { Box, Typography } from '@mui/material';

import BannerImg from '@/assets/backgrounds/gradient.webp';
import { Link } from '@/components/server';
import { ResourceLayout } from '@/layouts/ResourceLayout';

export const metadata = {
	title: 'Logo Download',
};

/**
 * @return {JSX.Element} Brand resources page component
 */
const BrandResources = () => {
	return (
		<ResourceLayout id="logo-download" title={metadata.title} picture={BannerImg}>
			<em>Last updated 2023-01-01</em>
			<section>
				<Typography
					component="h2"
					variant="h4"
				>
					Guidelines (tl;dr)
				</Typography>
				<ul>
					<li aria-level={1}>
						Google colors (in the following order):{' '}
						<Box component="span" sx={{ color: '#4285F4', fontWeight: 700 }}>
							{' '}
							#4285F4{' '}
						</Box>
						<Box component="span" sx={{ color: '#EA4335', fontWeight: 700 }}>
							{' '}
							#EA4335{' '}
						</Box>
						<Box component="span" sx={{ color: '#FBBC04', fontWeight: 700 }}>
							{' '}
							#FBBC04{' '}
						</Box>
						<Box component="span" sx={{ color: '#34A853', fontWeight: 700 }}>
							{' '}
							#34A853{' '}
						</Box>
					</li>
					<ul>
						<li aria-level={2}>
							Google Logo Grey
							<Box component="span" sx={{ color: '#656c73', fontWeight: 700 }}>
								{' '}
								#656c73{' '}
							</Box>
						</li>
					</ul>
					<li aria-level={1}>
						Logo guidelines:{' '}
						<Link external href="https://goo.gle/gdsc-brand-guide" sx={{ textDecorationLine: 'none' }}>
							https://goo.gle/gdsc-brand-guide
						</Link>
						, tl;dr:
						<ul>
							<li>use the entirely white logo on coloured backgrounds and not too busy backgrounds</li>
							<li>
								use the coloured (multicolour bracket, grey text) logo on white and grey backgrounds
							</li>
							<li>use the horizontal logo when space allows</li>
							<li>use the stacked logo when there is limited space</li>
							<li>
								use just the bracket icon when space is very limited (like when next to other club
								logos)
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<section>
				<Typography
					component="h2"
					variant="h4"
				>
					The goods
				</Typography>
				<Link external href="https://drive.google.com/drive/u/0/folders/1EWVUqcPmW71SMhxuO4HpwtGL01-oxLvk">
					Access the SVG versions of the logo
				</Link>
			</section>
		</ResourceLayout>
	);
};

export default BrandResources;
