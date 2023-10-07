import { FAQ, ProjectList } from '@/components/client';
import { Alert, Box, Typography } from '@mui/material'
import { HeroLayout } from "@/layouts/HeroLayout";
import FAQData from './faq.json';
import { ExpiryContainer, Link } from '@/components/server';
import bannerImage from '@/assets/notgpl/IMG_4712.jpg';

export const metadata = {
	title: 'Community Projects',
};

const ProjectPage = () => {
	return (
		<HeroLayout title={metadata.title} picture={bannerImage} position="bottom" id="projects">
			<ExpiryContainer date={'2023-08-20'}>
				<Alert variant="info">
					Community projects are back for Fall 2023! If you are a UTM CS Major/Spec, <Link external href="https://forms.gle/wgXtZQ9U36dn7BAZ9">reach out and apply</Link>
				</Alert>
			</ExpiryContainer>

			<h2 className="resources" id="faq">
				Frequently Asked Questions
			</h2>
			{Object.keys(FAQData).map((category, index) => {
				return (
					<Box
						sx={{
							mt: 2,
						}}
						key={index}
					>
						<Typography sx={{ marginBottom: 2 }} id={category}>
							{category}
						</Typography>

						{FAQData[category].map((faq, index) => {
							return <FAQ key={index} faq={faq} />;
						})}
					</Box>
				);
			})}

			<ProjectList />
		</HeroLayout>
	);
};

export default ProjectPage;
