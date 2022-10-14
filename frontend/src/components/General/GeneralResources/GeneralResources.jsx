import React, { useState, useEffect, useContext } from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import ResourceFilter from "./ResourceFilter";
function GeneralResources() {
  return (
    <Container>
      <ResourceFilter />
    </Container>
  );
}

export default GeneralResources;
