import { Box, Typography } from '@mui/material';

import BannerImg from '~/assets/backgrounds/gradient.webp';
import { Link } from '~/components/server';
import { ResourceLayout } from '~/layouts/ResourceLayout';

import { GoogleBlue, GoogleRed, GoogleYellow, GoogleGreen, GoogleGrey } from '~/data/theme';

export const metadata = {
	title: 'Brand Resources',
};

/**
 * @return Brand resources page component
 */
const BrandResources = () => {
	return (
		<ResourceLayout id="logo-download" title={metadata.title} picture={BannerImg}>
			<em>Last updated 2023-01-01</em>
			<section>
				<Typography component="h2" variant="h4">
					Guidelines (tl;dr)
				</Typography>
				<ul>
					<li aria-level={1}>
						Google colors (in the following order):{' '}
						<Box component="span" sx={{ color: GoogleBlue, fontWeight: 700 }}>
							{` ${GoogleBlue} `}
						</Box>
						<Box component="span" sx={{ color: GoogleRed, fontWeight: 700 }}>
							{` ${GoogleRed} `}
						</Box>
						<Box component="span" sx={{ color: GoogleYellow, fontWeight: 700 }}>
							{` ${GoogleYellow} `}
						</Box>
						<Box component="span" sx={{ color: GoogleGreen, fontWeight: 700 }}>
							{` ${GoogleGreen} `}
						</Box>
						<ul>
							<li aria-level={2}>
								Google Logo Grey
								<Box component="span" sx={{ color: GoogleGrey, fontWeight: 700 }}>
									{` ${GoogleGrey} `}
								</Box>
							</li>
						</ul>
					</li>
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
				<Typography component="h2" variant="h4">
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
