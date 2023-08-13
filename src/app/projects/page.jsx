import { FAQ, Link, ProjectList } from '@/components';
import { Alert } from '@mui/material'
import BannerImg from '../../assets/website_proprietary/heroes/IMG_4712.jpg';
import { HeroLayout } from '../../layouts/HeroLayout';
import FAQData from 'faq.json';

export const metadata = {
	title: 'Community Projects',
};

const ProjectPage = () => {
	return (
		<HeroLayout title={metadata.title} picture={BannerImg} position="bottom" id="projects">
			<Alert variant="info">
				Community projects are back for Fall 2023! If you are a UTM CS Major/Spec,
				<Link external href="https://forms.gle/wgXtZQ9U36dn7BAZ9">reach out and apply</Link>
			</Alert>
			<FAQ title="FAQ" data={FAQData} />
			<ProjectList />
		</HeroLayout>
	);
};

export default ProjectPage;
