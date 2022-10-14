import {
  Button,
  Container,
  Row,
  Col,
  Card,
  Modal,
  Form,
} from "react-bootstrap";

import AppModule from "../../css/admin/Application.module.css";
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import DarkModeContext from "../../context/darkMode/DarkModeContext";

function AdminResources() {
  const [resourcesState, setResourcesState] = useState([]);

  // list of resources to display

  // store the information to show in modal
  const initResourceInfo = {
    id: "",
    section: "",
    name: "",
    link: "",
    description: "",
  };

  const [resourceInfo, setResourceInfo] = useState({ initResourceInfo });
  const { mode, toggleMode } = useContext(DarkModeContext);

  // show modal when state is true
  const [resourceModal, setResourceModal] = useState(false);

  const handleViewResource = (resource) => {
    console.log(resource);
    setResourceInfo(resource);
    setResourceModal(true);
  };

  let getSections = () => {
    let sections = new Set(
      resourcesState.map((r) => {
        console.log(r);
        return r.section.trim().toLowerCase();
      })
    );

    console.log(sections);
    return sections;
  };

  let getResources = async () => {
    axios.get("/resources").then((res) => {
      console.log(resourcesState);
      setResourcesState(res.data);
    });
  };

  useEffect(() => {
    console.log("useeffect");
    getResources();
  }, []);

  // let getResources = async () => {

  // };

  let handleDelete = async (resource) => {
    console.log(resource);
    console.log(typeof resource);

    axios.delete("/resources", { data: { resourceId: resource } }).then();

    setResourcesState((prev) =>
      prev.filter((r) => {
        return r._id !== resource;
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
      [e.target.name]: e.target.value,
    });
  };

  const [formValues, setFormValues] = useState(initResourceInfo);

  const [AddResourceModal, setAddResourceModal] = useState(false);
  const [formErrors, setFormErrors] = useState(false);
  // const [id, setId] = useState(15);

  const handleAddResource = async () => {
    console.log(formValues);
    if (
      formValues.section == "" ||
      formValues.name == "" ||
      formValues.link == "" ||
      formValues.description == ""
    ) {
      setFormErrors(true);
      return;
    }

    let res = await axios.post(
      "/resources",
      {
        section: formValues.section.trim(),
        name: formValues.name.trim(),
        link: formValues.link.trim(),
        description: formValues.description.trim(),
      },
      {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }
    );

    // getResources();
    setResourcesState((prev) => {
      console.log("hi");
      console.log(res);
      return [
        ...prev,
        {
          _id: res.data._id,
          section: res.data.section,
          name: res.data.name,
          link: res.data.link,
          description: res.data.description,
        },
      ];
    });
    // console.log(resourcesState);

    // setResourcesState((prev) => [
    //   ...prev,
    //   {
    //     id: id,
    //     section: formValues.section.trim(),
    //     name: formValues.name.trim(),
    //     link: formValues.link.trim(),
    //     description: formValues.description.trim(),
    //   },
    // ]);

    // setId((prev) => prev + 1);
    setAddResourceModal(false);
    setFormValues(initResourceInfo);
    setFormErrors(false);
  };

  return (
    <>
      <div className="text-center mt-4">
        <Button
          size="lg"
          onClick={() => setAddResourceModal(true)}
          variant="success"
        >
          Add Resource
        </Button>

        <Modal
          show={AddResourceModal}
          onHide={handleHide}
          className="d-flex flex=column "
          dialogClassName={`${AppModule.dialog_width}`}
        >
          <div className={mode == true ? "dark" : ""}>
            <Modal.Header closeButton>
              <Modal.Title>Add Resource</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {formErrors && (
                <h3 style={{ color: "red" }} className="text-center">
                  Missing Form Input
                </h3>
              )}

              <Form.Group as={Row} className="mb-3" controlId="section">
                <Col>
                  <Form.Label column sm={10}>
                    Section
                  </Form.Label>
                </Col>
                <Col sm={15}>
                  <Form.Control
                    value={formValues.section}
                    name="section"
                    onChange={handleChange}
                    type="text"
                    maxLength="20"
                    placeholder="Your answer"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="name">
                <Col>
                  <Form.Label column sm={10}>
                    Name
                  </Form.Label>
                </Col>
                <Col sm={15}>
                  <Form.Control
                    value={formValues.name}
                    name="name"
                    onChange={handleChange}
                    maxLength="15"
                    type="text"
                    placeholder="Your answer"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="link">
                <Col>
                  <Form.Label column sm={10}>
                    Link
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
              <Form.Group as={Row} className="mb-3" controlId="desc">
                <Col>
                  <Form.Label column sm={10}>
                    Description
                  </Form.Label>
                </Col>
                <Col sm={15}>
                  <Form.Control
                    value={formValues.description}
                    name="description"
                    as="textarea"
                    maxLength="60"
                    placeholder="Your answer"
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              {/* <Row xs={1} md={1} className="g-4 ms-2">
              <div>
                <b>Link :</b>{" "}
                <input name="link" placeholder="Link" onChange={handleChange} />
              </div>
              <div>
                <b>Description :</b>{" "}
                <textarea
                  name="description"
                  onChange={handleChange}
                  placeholder="Description"
                />
              </div>
            </Row> */}
              {/* <Row className="g-4 ms-2 mt-1">
              <div>
                <b>UofT email :</b> {studentInfo.ut_email}
              </div>
              <div>
                <b>Profile Link :</b> {studentInfo.profile_link}
              </div>
            </Row> */}
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
        {[...getSections()].map((section) => {
          console.log(section);
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
                    console.log("mapping");
                    return (
                      <Col
                        key={r._id}
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
                              onClick={() => handleDelete(r._id)}
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
          <div className={mode == true ? "dark" : ""}>
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
                  <b>Link :</b> {resourceInfo.link}
                </div>
                <div>
                  <b>Description :</b> {resourceInfo.description}
                </div>
              </Row>
              {/* <Row className="g-4 ms-2 mt-1">
              <div>
                <b>UofT email :</b> {studentInfo.ut_email}
              </div>
              <div>
                <b>Profile Link :</b> {studentInfo.profile_link}
              </div>
            </Row> */}
            </Modal.Body>
            <Modal.Footer>
              {/* <Button variant="primary me-auto" onClick={handleShowModal}>
              Confirm
            </Button>
            <Button variant="secondary" onClick={handleShowModal}>
              Dont Save
            </Button> */}
            </Modal.Footer>
          </div>
        </Modal>
      </Container>
    </>
  );
}

// function ResourceActions() {
//   const [section, setSection] = useState("");
//   const [name, setName] = useState("");
//   const [link, setLink] = useState("");
//   const [desc, setDesc] = useState("");
//   const [AddResourceModal, setAddResourceModal] = useState(false);

//   const handleAddResource = () => {
//     resourcesState.push({
//       section: section,
//       name: name,
//       link: link,
//       description: desc,
//     });
//   };
//   return (
//     <>
//       <div className="text-center mt-2">
//         <Button onClick={() => setAddResourceModal(true)} variant="success">
//           Add Resource
//         </Button>

//         <Modal
//           show={AddResourceModal}
//           onHide={() => setAddResourceModal(false)}
//           className="d-flex flex=column "
//           dialogClassName={`${AppModule.dialog_width}`}
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>
//               <input
//                 placeholder="Section"
//                 onChange={(e) => setSection(e.target.value)}
//               />
//             </Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <div className="d-flex w-100">
//               <h1 className="ms-2 mt-auto">{}</h1>
//               <h4
//                 className={`ms-3 mt-auto mb-auto ${AppModule.role_text_color}`}
//               >
//                 <input
//                   placeholder="Name"
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </h4>
//             </div>
//             <hr></hr>
//             <Row xs={1} md={1} className="g-4 ms-2">
//               <div>
//                 <b>Link :</b>{" "}
//                 <input
//                   placeholder="Link"
//                   onChange={(e) => setLink(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <b>Description :</b>{" "}
//                 <input
//                   onChange={(e) => setDesc(e.target.value)}
//                   placeholder="Description"
//                 />
//               </div>
//             </Row>
//             {/* <Row className="g-4 ms-2 mt-1">
//               <div>
//                 <b>UofT email :</b> {studentInfo.ut_email}
//               </div>
//               <div>
//                 <b>Profile Link :</b> {studentInfo.profile_link}
//               </div>
//             </Row> */}
//           </Modal.Body>
//           <Modal.Footer>
//             <div className="text-center">
//               <Button variant="success" onClick={handleAddResource}>
//                 Submit
//               </Button>
//             </div>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     </>
//   );
// }

export default AdminResources;
