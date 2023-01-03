import { useEffect } from "react";
import EventList from "../../components/EventList";
import { Container, Typography } from "@mui/material";
import BannerHeader from "../../components/BannerHeader";
import BannerImg from "../../assets/heroes/IMG_1045.png"
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";

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
				<Typography
					color="text.primary"
					component="h2"
					fontWeight="bold"
					lineHeight="2.5em"
					variant="h4"
				>
					All Events
				</Typography>
				<ErrorBoundary>
					<EventList />
				</ErrorBoundary>
			</Container>
		</>
	);
}

export default Events;
