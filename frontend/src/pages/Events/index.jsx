import EventList from "../../components/EventList";
import { Container, Typography } from "@mui/material";

const Events = () => {
    return (
        <main>
            <Container sx={{ py: 8 }}>
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
        </main>
    );
}

export default Events;
