import { useEffect } from "react";
import EventList from "../../components/EventList";
import { Container, Typography } from "@mui/material";
import BannerHeader from "../../components/BannerHeader";
import BannerImg from "../../assets/lena_giang.png"

/**
 * @return {JSX.Element} Events page component using EventList
 */
const Events = () => {
	useEffect(() => {
		document.title = 'GDSC UTM - Events';
	}, []);
	return (
		<>
			<BannerHeader text="Events" picture={BannerImg} />

			<Container sx={{ py: 4 }} component="main" id="events">
				<Typography
					fontWeight="bold"
					color="text.primary"
					component="h2"
					variant="h4"
					lineHeight="2.5em"
				>
					All Events
				</Typography>
				<EventList />
			</Container>
		</>
	);
}

export default Events;
