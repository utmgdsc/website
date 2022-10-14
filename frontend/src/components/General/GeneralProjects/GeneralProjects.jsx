import {
    Button,
    Container,
    Row,
    Col,
    Card,
    Modal,
    Form,
  } from "react-bootstrap";
  import AppModule from "../../../css/admin/Application.module.css";
  import React, {useContext} from "react";
  import { useState } from "react";
  import useLocalStorage from "../../../hooks/useLocalStorage"; 
  import DarkModeContext from "../../../context/darkMode/DarkModeContext";
  function GeneralProjects() {
    const {mode, toggleMode} = useContext(DarkModeContext)
    return (
      <div className={mode === true ? "dark" : ""} style={{height: "100vh"}}>
      <Container>
          <h2>Past Projects</h2>
        <Projects />
      </Container>
      </div>
    );
  }
  
  function Projects() {
    let sample_resources = [];
    
    const [resourcesState, setResourcesState] = useLocalStorage("id", sample_resources);
  
    const initResourceInfo = {
      section: "",
      name: "",
      link: "",
      description: "",
    };
  
    // list of resources to display
  
    // store the information to show in modal
    const [resourceInfo, setResourceInfo] = useState(initResourceInfo);
  
    // show modal when state is true
    const [resourceModal, setResourceModal] = useState(false);
  
    const handleViewResource = (resource) => {
      setResourceInfo(resource);
      setResourceModal(true);
    };
  
  
    let getSections = () => {
      let sections = new Set();
  
      for (var i = 0; i < resourcesState.length; i++) {
        sections.add(resourcesState[i].section.trim().toLowerCase());
      }
      console.log(sections);
      return sections;
    };
  
    let handleDelete = (resource) => {
      setResourcesState((prev) =>
        prev.filter((r) => {
          return r.id !== resource;
        })
      );
    };
  
    let handleHide = () => {
      setAddResourceModal(false);
      setFormErrors(false);
    };
  
    const handleChange = (e) => {
      setFormValues({
        ...formValues,
        // Trimming any whitespace
        [e.target.name]: e.target.value.trim(),
      });
    };
  
    const [formValues, setFormValues] = useState(initResourceInfo);
  
    const [AddResourceModal, setAddResourceModal] = useState(false);
    const [formErrors, setFormErrors] = useState(false);
    const [id, setId] = useState(15);
  
    const handleAddResource = () => {
      console.log(formValues);
      if (
        formValues.section === "" ||
        formValues.name === "" ||
        formValues.link === "" ||
        formValues.description === ""
      ) {
        setFormErrors(true);
        return;
      }
      setResourcesState((prev) => [
        ...prev,
        {
          id: id,
          section: formValues.section.trim(),
          name: formValues.name.trim(),
          link: formValues.link.trim(),
          description: formValues.description.trim(),
        },
      ]);
  
      setId((prev) => prev + 1);
      setAddResourceModal(false);
      setFormValues(initResourceInfo);
      setFormErrors(false);
    };
    const {mode, toggleMode} = useContext(DarkModeContext)
   
    return (
      <>
        <div className="text-center mt-4">
          <Button
            size="lg"
            onClick={() => setAddResourceModal(true)}
            variant="secondary"
          >
            Add Project
          </Button>
  
          <Modal
            show={AddResourceModal}
            onHide={handleHide}
            className="d-flex flex=column "
            dialogClassName={`${AppModule.dialog_width}`}
          >
            <div className={mode === true ? "dark" : ""}>
            <Modal.Header closeButton>
              <Modal.Title>Add Project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {formErrors && (
                <h3 style={{ color: "red" }} className="text-center">
                  Missing Form
                </h3>
              )}
  
              <Form.Group as={Row} className="mb-3" controlId="idea">
                <Col>
                  <Form.Label for="section" olumn sm={10}>
                    Tech Stack
                  </Form.Label>
                </Col>
                <Col sm={15}>
                  <Form.Control
                    id="section"
                    value={formValues.section}
                    name="section"
                    onChange={handleChange}
                    type="text"
                    maxLength="20"
                    placeholder="Your answer"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="idea">
                <Col>
                  <Form.Label for="name" column sm={10}>
                    Project Name
                  </Form.Label>
                </Col>
                <Col sm={15}>
                  <Form.Control
                    value={formValues.name}
                    name="name"
                    id="name"
                    onChange={handleChange}
                    maxLength="15"
                    type="text"
                    placeholder="Your answer"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="idea">
                <Col>
                  <Form.Label forcolumn sm={10}>
                    Github Link
                  </Form.Label>
                </Col>
                <Col sm={15}>
                  <Form.Control
                    value={formValues.link}
                    name="link"
                    onChange={handleChange}
                    type="text"
                    placeholder="Your answer"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="idea">
                <Col>
                  <Form.Label for="desc" column sm={10}>
                    Project Description
                  </Form.Label>
                </Col>
                <Col sm={15}>
                  <Form.Control
                    id="desc"
                    value={formValues.description}
                    name="description"
                    as="textarea"
                    maxLength="60"
                    placeholder="Your answer"
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <div className="text-center">
                <Button variant="success" onClick={handleAddResource}>
                  Submit
                </Button>
              </div>
            </Modal.Footer>
            </div>
          </Modal>
        </div>
  
        <Container fluid className="mt-3">
          {Array.from(getSections()).map((section) => {
            return (
              <div key={section}>
  
                <Row xs={1} md={1} className="g-4 mt-2">
                  <h1>{section}</h1>
                  <hr></hr>
                </Row>
                <Row xs={1} md={3} className="g-4">
                  {resourcesState
                    .filter((r) => {
                      console.log(r.name);
                      return r.section.toLowerCase() === section;
                    })
                    .map((r) => {
                      return (
                        <Col
                          key={r.id}
                          className={`text-center ${AppModule.card_fit_content}`}
                        >
                          <Card className={`p-2 h-auto`}>
                            <div className="d-flex m-auto">
                              <h3 className="text-center">{r.name}</h3>
                            </div>
                            <h6 className={`${AppModule.role_text_color}`}>
                              {r.description.length > 15
                                ? r.description.substring(0, 15).concat("...")
                                : r.description}
  
                            </h6>
                            <div className="d-flex m-2 justify-content-around">
                              <Button
                                variant="secondary"
                                onClick={() => handleViewResource(r)}
                              >
                                View
                              </Button>
  
                              <Button
                                variant="danger"
                                onClick={() => handleDelete(r.id)}
                              >
                                Delete
                              </Button>
                            </div>
                          </Card>
                        </Col>
                      );
                    })}
                </Row>
              </div>
            );
          })}
  
          <Modal
            show={resourceModal}
            onHide={() => setResourceModal(false)}
            className="d-flex flex=column "
            dialogClassName={`${AppModule.dialog_width}`}
          >
            <Modal.Header closeButton>
              <Modal.Title>Resource Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="d-flex w-100">
                <h1 className="ms-2 mt-auto">{resourceInfo.section}</h1>
                <h4
                  className={`ms-3 mt-auto mb-auto ${AppModule.role_text_color}`}
                >
                  {resourceInfo.name}
                </h4>
              </div>
              <hr></hr>
              <Row xs={1} md={1} className="g-4 ms-2">
                <div>
                  <b>Link :</b> <a className="h6" variant="secondary" href={resourceInfo.link}>{resourceInfo.link}</a>
                </div>
                <div>
                  <b>Description :</b> {resourceInfo.description}
                </div>
              </Row>
            </Modal.Body>
          </Modal>
        </Container>
      </>
    );
  }
  
  
  
  export default GeneralProjects;