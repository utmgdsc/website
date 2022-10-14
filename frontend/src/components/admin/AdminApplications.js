import React, { useState, useEffect, useCallback, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Filter from './AdminFilter';
import Applicants from "./Applicants";


// main container of application page
export default function AdminApplication() {
  const [applications, setApplications] = useState([]);

  return (
    <div className="d-flex flex-column">
      <Card.Header className="d-flex">
        <div>Application</div>
      </Card.Header>
      <Card.Body className="d-flex">
        <Filter updateApplications={setApplications} />
        <Applicants applications={applications} updateApplications={setApplications} />
      </Card.Body>
    </div>
  );
}