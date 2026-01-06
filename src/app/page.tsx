import { ArrowForward } from '@mui/icons-material';
import { Button, Container, Typography } from '@mui/material';
import { ErrorBoundary, FaqList, HomepageHero, Link } from '~/components/client';
import {
	EventList,
	ExpiryContainer,
	HomepageSection,
	Team,
	getProprietaryURL,
	proprietaryURLIsAvailable,
	LatestWorkshops,
} from '~/components/server';
import faq from '~/data/faq.json';

export const metadata = {
	title: 'Home - GDG UTM',
};

const getTeamMembers = async (): Promise<Team> => {
	if (!proprietaryURLIsAvailable()) {
		return {};
	}
	const teamMembers = fetch(getProprietaryURL('/team/team.json')).then(res => res.json());
	return teamMembers;
};

const Homepage = async () => {
	const teamMembers = await getTeamMembers();

	return (
		<main id="home">
			<HomepageHero />

			<section id="upcoming-events">
				<Container sx={{ py: 8 }} maxWidth="md">
					<ErrorBoundary>
						<EventList from={new Date()}>
							<Typography component="h2" variant="h4">
								Upcoming Events
							</Typography>
						</EventList>
					</ErrorBoundary>
				</Container>
			</section>

			<HomepageSection title="Who are we?">
				<Typography variant="body2" component="p">
					Google Developer Groups (<abbr>GDG</abbr>) is a student-led community backed by Google Developers
					aimed at empowering undergraduate students from all disciplines to grow their knowledge in
					technology, build solutions for their local communities, and connect with other members from the
					Google community.
				</Typography>

				<h3>Creating impact and empowering students through technology</h3>

				<Typography variant="body2" component="p">
					Whether you are new to software development or you&rsquo;ve been developing for quite a while, GDG
					is a place where you can learn new technologies, make your ideas a reality, and collaborate to solve
					real-world problems. In addition to solving problems, GDG will allow you to connect with other
					technology enthusiasts from other GDG chapters and the Google Developer Community. We will be
					hosting events and activities for all students throughout the academic year. We hope to see you
					there!
				</Typography>
			</HomepageSection>

			<HomepageSection
				title="Our past workshops"
				titleAfter={
					<Link href="/past-workshops">
						<Button
							variant="contained"
							color="primary"
							size="large"
							sx={{ mt: 4 }}
							endIcon={<ArrowForward />}
						>
							See more
						</Button>
					</Link>
				}
			>
				<LatestWorkshops limit={6} showDate={true} />
			</HomepageSection>

			<HomepageSection title="Frequently asked questions">
				<ErrorBoundary>
					<FaqList {...faq} />
				</ErrorBoundary>
			</HomepageSection>

			<ExpiryContainer date={'2026-08-30'}>
				<HomepageSection title="Meet the team">
					<ErrorBoundary>
						{Object.keys(teamMembers).map(teamName => {
							return <Team key={teamName} teamInfo={teamMembers[teamName]} title={teamName} />;
						})}
					</ErrorBoundary>
				</HomepageSection>
			</ExpiryContainer>
		</main>
	);
};

export default Homepage;
