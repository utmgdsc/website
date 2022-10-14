import React from "react";
import { Container } from "react-bootstrap";
import ParticipantSearch from "./ParticipantSearch";


function AdminParticipantSearch() {

    return (
        <Container>
            <h2>Participants</h2>
            <ParticipantSearch />
            <br />
            <br />
        </Container>
    );
}


export default AdminParticipantSearch;