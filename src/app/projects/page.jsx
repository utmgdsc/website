import { ProjectList } from '@/components';
import BannerImg from '../../assets/website_proprietary/heroes/IMG_4712.jpg';
import { HeroLayout } from '../../layouts/HeroLayout';

export const metadata = {
	title: 'Community Projects',
};

const ProjectPage = () => {
	return (
		<HeroLayout title={metadata.title} picture={BannerImg} position="bottom" id="projects">
			<ProjectList />
		</HeroLayout>
	);
};

export default ProjectPage;
