import { useEffect } from "react";
import { Container, Typography } from "@mui/material";
import BannerImg from "../../assets/heroes/IMG_1045.png"
import EventList from "../../components/EventList";
import BannerHeader from "../../components/BannerHeader";
import ErrorBoundary from "../../components/ErrorBoundary";
import { EventUpcomingStates } from "../../constants";

/**
 * @return {JSX.Element} Events page component using EventList
 */
const Events = () => {
	useEffect(() => {
		document.title = "GDSC UTM - Events";
	}, []);
	return (
		<>
			<BannerHeader text="Events" picture={BannerImg} position="bottom" />

			<Container sx={{ py: 4 }} component="main" id="events">
				<section>
					<Typography
						color="text.primary"
						component="h2"
						fontWeight="bold"
						lineHeight="2.5em"
						variant="h4"
					>
						Upcoming Events
					</Typography>
					<ErrorBoundary>
						<EventList upcoming={EventUpcomingStates.UPCOMING} />
					</ErrorBoundary>
				</section>
				<section>
					<Typography
						color="text.primary"
						component="h2"
						fontWeight="bold"
						lineHeight="2.5em"
						variant="h4"
					>
						Past Events
					</Typography>
					<ErrorBoundary>
						<EventList upcoming={EventUpcomingStates.PAST}/>
					</ErrorBoundary>
				</section>
			</Container>
		</>
	);
}

export default Events;
