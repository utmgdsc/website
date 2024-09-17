import Brand from '@/assets/graphics/logo_clouds.png';
import workshopImage from '@/assets/notgpl/051A6228.jpg';
import bannerImage from '@/assets/notgpl/IMG_4712.jpg';
import { FAQList, ImageLinkCard } from '@/components/client';
import faq from '@/data/faq.json';
import { HeroLayout } from '@/layouts/HeroLayout';
import { Grid } from '@mui/material';

export const metadata = {
	title: 'Resources',
};

/**
 * @returns {JSX.Element} The resources page
 */
const ResourcesPage = () => {
	return (
		<HeroLayout title={metadata.title} picture={bannerImage} height="20rem" position="bottom" id="resources">
			<Grid
				container
				spacing={2}
				sx={{
					justifyContent: 'space-between',
					alignItems: 'flex-start',
				}}
			>
				<Grid item>
					<ImageLinkCard
						title="Workshop Archive"
						description="Check out our past workshops!"
						alt=""
						href="/resources/workshops"
						height="auto"
						image={workshopImage}
					/>
				</Grid>
				<Grid item>
					<ImageLinkCard
						title="Logo Download"
						description="Download our bracket logo in crisp quality!"
						alt=""
						href="/resources/logo-download"
						height="auto"
						image={Brand}
					/>
				</Grid>
			</Grid>
			{/* opting to keep FAQ in this page to keep it more visible */}
			<h2 className="resources" id="faq">
				Frequently Asked Questions
			</h2>
			<FAQList {...faq} />
		</HeroLayout>
	);
};

export default ResourcesPage;
