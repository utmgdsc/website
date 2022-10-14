import React, { useState, useEffect, useContext} from "react";
import AppModule from "../../css/admin/Application.module.css";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import { BsDownload } from "react-icons/bs";
import DarkModeContext from "../../context/darkMode/DarkModeContext"
import axios from "axios";
// checks the or of the applicant, display message accordingly
function GroupOrPEY(props) {
    return props.Student["role"] === "Student" ? (
      <Row xs={1} md={2} className="g-4 ms-2 mt-1">
        <div>
          <b>Group :</b> {`${props.Student["have_group"]}`}
        </div>
        <div>
          <b>Group Name :</b> {props.Student["group_members"]}
        </div>
      </Row>
    ) : (
      <Row xs={1} md={2} className="g-4 ms-2 mt-1">
        <div>
          <b>PEY :</b> {`${props.Student.complete_pey}`}
        </div>
      </Row>
    );
  }
  // show a list of applicants and enables modal to show detailed information of a selected student
export default function Applicants(props) {
    // store the information to show in modal
    const [studentInfo, setInfo] = useState({});
    // show modal when state is true
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => {
      setShowModal(false);
    };
    useEffect(() => {}, [props.applications]);
  
    // when clicked, passing the applicant info as argument
    // and display different format according to his/her role
    const handleClick = (student) => {
      setInfo(student);
      setShowModal(true);
    };

    // show specific info in general applicants page for students
    const student_card = (key) => {
      return (
        key === "year" ||
        key === "has_group" ||
        key === "cgpa" ||
        key === "project_idea"
      );
    };
    // show specific info in general applicants page for mentors
    const mentor_card = (key) => {
      return key === "year" || key === "cgpa" || key === "complete_pey";
    };
    // submit form
    const handleAccept = (student) => {
      if (studentInfo.role === "Student") {
        axios
          .post("/applications/acceptStudent", {
            student_num: student.student_num,
          })
          .then((res)=>{
              let apps = props.applications.filter((app)=>{
                  return (app.student_num !== student.student_num);
              })
            props.updateApplications(apps);
          })
          .catch((error) => {
            alert(error);
          });
      } else if (studentInfo.role === "Mentor") {
        axios
          .post("/applications/acceptMentor", {
            student_num: student.student_num,
          })
          .then((res)=>{
            let apps = props.applications.filter((app)=>{
                return (app.student_num !== student.student_num);
            })
          props.updateApplications(apps);
        })
          .catch((error) => {
            alert(error);
          });
      }
      setShowModal(false);
    };
    const handleDecline = (student) => {
      if (studentInfo.role === "Student") {
        axios
          .delete("/applications/rejectStudent", {
            params: { _id: student["_id"] },
          })
          .then((res)=>{
            let apps = props.applications.filter((app)=>{
                return (app.student_num !== student.student_num);
            })
          props.updateApplications(apps);
        })
          .catch((error) => {
            alert(error);
          });
      } else if (studentInfo.role === "Mentor") {
        axios
          .delete("/applications/rejectMentor", { params: { _id: student["_id"] } })
          .then((res)=>{
            let apps = props.applications.filter((app)=>{
                return (app.student_num !== student.student_num);
            })
          props.updateApplications(apps);
        })
          .catch((error) => {
            alert(error);
          });
      }
      setShowModal(false);
    };
    const { mode, toggleMode } = useContext(DarkModeContext)
    return (
      <Container fluid>
        {/* show all student info in the sample*/}
        <Row xs={1} md={2} className="g-4 ms-2">
          {props.applications.map((student) => (
            <Col key={student.student_num} className={AppModule.card_fit_content}>
              <Card className={`p-2 h-auto`}>
                <div className="d-flex">
                  <h4 className="mt-auto mb-auto">{student.full_name}</h4>
                  <h6 className={`mt-auto ms-2 ${AppModule.role_text_color}`}>
                    {student.role}
                  </h6>
                  <Button
                    variant="secondary"
                    className={`${AppModule.align_end}`}
                    onClick={() => handleClick(student)}
                  >
                    View
                  </Button>
                </div>
                {student.role === "Student"
                  ? Object.keys(student)
                      .filter(student_card)
                      .map((key) => (
                        <p key={key} className="w-50 ps-3">
                          {key.replaceAll("_"," ")} : {`${student[key]}`}
                        </p>
                      ))
                  : Object.keys(student)
                      .filter(mentor_card)
                      .map((key) => (
                        <p key={key} className="w-50 ps-3">
                          {key.replaceAll("_"," ")} : {`${student[key]}`}
                        </p>
                      ))}
              </Card>
            </Col>
          ))}
        </Row>
        {/* detailed information of a selected applicant shown in modal*/}
        <Modal
          show={showModal}
          onHide={handleShowModal}
          className="d-flex flex=column "
          dialogClassName={`${AppModule.dialog_width}`}
        >
          <div className={mode == true ? "dark" : ""}>
          <Modal.Header closeButton>
            <Modal.Title>Applicant Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex w-100">
              <h1 className="ms-2 mt-auto">{studentInfo.full_name}</h1>
              <h4 className={`ms-3 mt-auto mb-auto ${AppModule.role_text_color}`}>
                {studentInfo.role}
              </h4>
              <Button variant="primary" className={`${AppModule.resume_button}`}>
                <BsDownload className="mt-auto mb-auto me-1" />
                Resume
              </Button>
            </div>
            <hr></hr>
            <Row xs={1} md={2} className="g-4 ms-2">
              <div>
                <b>Student # :</b> {studentInfo.student_num}
              </div>
              <div>
                <b>Year :</b> {studentInfo.year}
              </div>
              <div>
                <b>CGPA :</b> {studentInfo.cgpa}
              </div>
              <div>
                <b>Program :</b> {studentInfo.program}
              </div>
            </Row>
            <GroupOrPEY Student={studentInfo} />
            <Row className="g-4 ms-2 mt-1">
              <div>
                <b>UofT email :</b> {studentInfo.email}
              </div>
              <div>
                <b>Profile Link :</b> <a href = {studentInfo.links}>{studentInfo.links}</a>
              </div>
            </Row>
            <hr></hr>
            <Row className="ms-2 mb-4">
              <Col sm={3}>
                <b>Languages: </b>
              </Col>
              <Col sm={9}>{studentInfo["languages"]}</Col>
              <Col sm={3}>
                <b>Frameworks : </b>
              </Col>
              <Col sm={9}>{studentInfo["frameworks"]}</Col>
              <Col sm={3}>
                <b>Databases : </b>
              </Col>
              <Col sm={9}>{parseDatabases(studentInfo["databases"])}</Col>
              <Col sm={3}>
                <b>Cloud Platforms : </b>
              </Col>
              <Col sm={9}>{parsePlatforms(studentInfo["platforms"])}</Col>
            </Row>
            <hr></hr>
            <Row className="g-4 ms-2">
              {studentInfo["role"] === "Student" ? (
                <div>
                  <div className="mb-2">
                    <b>Project Description</b>
                  </div>
                  <div>{studentInfo.idea_description}</div>
                </div>
              ) : (
                <div>
                  <div className="mb-2">
                    <b>Past/Current Internship Experience(s)</b>
                  </div>
                  <div className="mb-4">{studentInfo.pey_description}</div>
                  <div className="mb-2">
                    <b>
                      Past/Current Extra-Curricular and/or Leadership
                      Experience(s)
                    </b>
                  </div>
                  <div className="mb-4">{studentInfo.experience}</div>
                  <div className="mb-2">
                    <b>Software Related Projects Description</b>
                  </div>
                  <div className="mb-4">{studentInfo.projects}</div>
                  <div className="mb-2">
                    <b>Project Links</b>
                  </div>
                  <div className="mb-2">{studentInfo.project_path}</div>
                </div>
              )}
              <div>
                <div className="mb-2">
                  <b>Additional Information</b>
                </div>
                <div>{studentInfo.additional}</div>
              </div>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary me-auto"
              onClick={() => handleAccept(studentInfo)}
            >
              Accept
            </Button>
            <Button
              variant="secondary"
              onClick={() => handleDecline(studentInfo)}
            >
              Reject
            </Button>
          </Modal.Footer>
          </div>
        </Modal>
      </Container>
    );
  }

const parseDatabases = (db)=>{
    if (db){
        if (db.none === true){
            return "none";
        }
        var result = [];
        Object.entries(db).map((entry)=>{
            if (entry[1]){
                result.push(entry[0]);
            }
        })
        return result.join(' , ');
    }
}

const parsePlatforms = (plats)=>{
    if (plats){
        if (plats.none === true){
            return "none";
        }
        var result = [];
        Object.entries(plats.pre_select).map((entry)=>{
            if (entry[1]){
                result.push(entry[0].replaceAll('_',' '));
            }
        })
        return result.join(' , ');
    }
}