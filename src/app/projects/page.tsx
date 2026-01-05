import { FaqList, ProjectList, Link } from '~/components/client';
import { ExpiryContainer, getProprietaryURL } from '~/components/server';
import { HeroLayout } from '~/layouts/HeroLayout';
import { Alert, Box, Typography } from '@mui/material';
import FAQData from './faq.json';

export const metadata = {
	title: 'Community Projects',
};

const ProjectPage = () => {
	return (
		<HeroLayout
			title={metadata.title}
			picture={getProprietaryURL('heroes/project-banner.jpg')}
			position="bottom"
			id="projects"
			headerProps={{
				imgProps: {
					width: 2813,
					height: 1875,
				},
			}}
			containerProps={{
				sx: {
					display: 'flex',
					flexDirection: 'column',
					gap: 6,
					py: 8,
				},
			}}
		>
			<Box>
				<ExpiryContainer date={'2023-08-20'}>
					<Alert severity="info">
						Community projects are back for Fall 2023! If you are a UTM CS Major/Spec,{' '}
						<Link external href="https://forms.gle/wgXtZQ9U36dn7BAZ9">
							reach out and apply
						</Link>
					</Alert>
				</ExpiryContainer>

				<Typography variant="body2" component="p" gutterBottom>
					Community Projects is a semester-long program where students create software-based solutions for a
					problem in their community. By being a part of a community project, you&apos;ll gain
					industry-standard knowledge and experience of must-have skills such as Python, Java, web
					development, backend/frontend development, databases, and much more!
				</Typography>

				<Typography variant="body2" component="p" gutterBottom>
					You could potentially earn a credit for CSC392/CSC492 while working on your project under faculty
					guidance! Additionally, you may be able to submit your project as a part of the global{' '}
					<Link external href="https://developers.google.com/community/gdsc-solution-challenge">
						GDG UTM Solution challenge
					</Link>{' '}
					and win prizes!
				</Typography>

				<Typography variant="body2" component="p">
					Don&apos;t worry you don&apos;t need to come with a project idea or a team to apply. You will have
					tons of opportunities to form teams and brainstorm ideas!
				</Typography>
			</Box>

			<section>
				<Typography component="h2" variant="h4" id="projects">
					Past Projects
				</Typography>
				<ProjectList />
			</section>

			<section>
				<Typography component="h2" variant="h4" id="faq">
					Frequently Asked Questions
				</Typography>
				<FaqList {...FAQData} />
			</section>
		</HeroLayout>
	);
};

export default ProjectPage;
