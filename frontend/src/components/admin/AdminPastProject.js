import React, {useState,useEffect, useContext}from "react";
import {Button, Form, Col, Modal, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card"
import ProjectModule from "../../css/admin/AdminPastProject.module.css"
import AppModule from "../../css/admin/Application.module.css"
import axios from "axios";
import DarkModeContext from "../../context/darkMode/DarkModeContext"

export default function AdminPastProject(){
    const [projects,setProjects] = useState([])
    const [showFormModal,setShowFromModal] = useState(false)
    const [showDeleteModal,setShowDeleteModal] = useState({
        "show":false,
        "name": '',
        "id": ''
    })
    const [projectForm,setProjectForm] = useState({})
    
    const handleShowForm =()=>{
        setShowFromModal(false)
    }

    const handleDelete = (id)=>{
        // delete
      axios.post("/admin/pastProjects/delete/",{"_id":id})
      .then((res)=>{
        axios.get("/admin/pastProjects/").then((res) => {
          console.log("hello")
          setProjects(res.data.projects)
        }).catch((e)=>{
          alert(e)
        })
        alert("Delete Successfully")
      })
      .catch((e)=>{
        alert(e)
      })
        setShowDeleteModal({...showDeleteModal,"show":false})
    }
    const handleCancel = ()=>{
        // do nothing
        setShowDeleteModal({...showDeleteModal,"show":false})
    }
    const handleSubmit = (formVal)=>{
      axios.post("/admin/pastProjects/create",formVal)
      .then((res)=>{
        axios.get("/admin/pastProjects/").then((res) => {
          setProjects(res.data.projects)
        }).catch((e)=>{
          alert(e)
        })
        alert("Create Successfully")
      })
      .catch((e)=>{
        alert(e)
      })
    }
    useEffect(()=>{
        // initial get request
        axios.get("/admin/pastProjects/").then((res) => {
          setProjects(res.data.projects)
        }).catch((e)=>{
          alert(e)
        })
    },[])
    return (
    <div>
        <div className="d-flex">
            <Button className ="ms-auto me-3" onClick={()=>setShowFromModal(true)}> Add Project</Button>
        </div>
        <hr></hr>
        <ProjectCard Project={projects} ModalSetter={setShowDeleteModal}/>
        <FormModal Data={{"form":projectForm,"setter":handleSubmit}} Modal={{"state":showFormModal,"setter":handleShowForm}}/>
        <DeleteModal Modal={{"state":showDeleteModal,"setter":{"confirm":handleDelete,"cancel":handleCancel}}}/>
    </div>
    )
}

const DeleteModal = (props)=>{
  const { mode, toggleMode } = useContext(DarkModeContext)
    return (
        <div>
            <Modal show={props.Modal.state.show} onHide={props.Modal.setter.cancel}>
              <div className={mode == true ? "dark" : ""}>
                <Modal.Body>
                    You want to delete {props.Modal.state.name} project.
                </Modal.Body>
                <Modal.Footer className="p-2">
                    <Button onClick={()=>props.Modal.setter.confirm(props.Modal.state.id)}> Confirm </Button>
                    <Button variant="danger" className="ms-auto" onClick={props.Modal.setter.cancel}> Cancel</Button>
                </Modal.Footer>
            </div>
            </Modal>
        </div>
    )
}

const ProjectCard = (props)=>{
    const [projects,setProjects] = useState([])
    useEffect(()=>{
      if (props.Project && props.Project.length > 0){
        setProjects(props.Project)
      }
    },[props.Project])
    return (
      <div>
        {
          projects.map((project)=>(
            <div key={project.name} className='w-auto'>
              <Card className="d-flex flex-row p-2 m-3 border-dark fit-content">
                <Card.Img variant="top" src='#' className={`${ProjectModule.image_size}`}/>
                <Card.Body className={`d-flex flex-column ${ProjectModule.text_box_width}`}>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Text className={`${ProjectModule.text_box_overflow} h-100` }>
                        {project.description}
                    </Card.Text>
                </Card.Body>
                <button type="button" className={`btn btn-xs btn-danger img-circle mt-auto mb-auto ms-auto me-5 ${ProjectModule.button_size}`} id={project._id} onClick={(e)=>props.ModalSetter({"show":true,"id":e.target.id,"name":project.name})}>
                    &#xff38;
                </button>
            </Card>
            </div>
          ))
        }
      </div>
    )
}

const FormModal = (props)=>{
    const [formVal,setFormVal] = useState({
        name: '',
        link: '',
        image_path:'',
        description: ''
    })
    const handleSubmit = ()=>{
        props.Data.setter(formVal)
        props.Modal.setter(false)
        setFormVal({
          name: '',
          link: '',
          image_path:'',
          description: ''
      })
    }
    const { mode, toggleMode } = useContext(DarkModeContext)
    return (
        <div>
          <Modal
            show={props.Modal.state}
            onHide={props.Modal.setter}
            className="d-flex flex=column "
            dialogClassName={`${AppModule.dialog_width}`}
          >
            <div className={mode == true ? "dark" : ""}>
            <Modal.Header closeButton>
              <Modal.Title>Add Project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group as={Row} className="mb-3">
                <Col>
                  <Form.Label htmlFor="name" column sm={10}>
                    Name
                  </Form.Label>
                </Col>
                <Col sm={15}>
                  <Form.Control
                    id="name"
                    value={formVal.name}
                    name="section"
                    onChange={(e)=>setFormVal({...formVal,name:e.target.value})}
                    type="text"
                    maxLength="20"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Col>
                  <Form.Label htmlFor="link" column sm={10}>
                    Link
                  </Form.Label>
                </Col>
                <Col sm={15}>
                  <Form.Control
                    value={formVal.link}
                    name="link"
                    id="link"
                    onChange={(e)=>setFormVal({...formVal,link:e.target.value})}
                    maxLength="50"
                    type="text"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Col>
                  <Form.Label htmlFor="image" column sm={10}>
                    Image
                  </Form.Label>
                </Col>
                <Col sm={15}>
                  <Form.Control
                    value={formVal.image}
                    id="image"
                    name="image"
                    onChange={(e)=>setFormVal({...formVal,image_path:e.target.value})}
                    type="text"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Col>
                  <Form.Label htmlFor="description" column sm={10}>
                    Project Description
                  </Form.Label>
                </Col>
                <Col sm={15}>
                  <Form.Control
                    id="description"
                    value={formVal.description}
                    name="description"
                    as="textarea"
                    maxLength="60"
                    onChange={(e)=>setFormVal({...formVal,description:e.target.value})}
                  />
                </Col>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <div className="text-center">
                <Button variant="success" onClick={handleSubmit}>
                  Submit
                </Button>
              </div>
            </Modal.Footer>
            </div>
          </Modal>
        </div>
    )
}

/**
 * <Form.Group as={Row} className="mb-3">
                <Col>
                  <Form.Label htmlFor="image" column sm={10}>
                    Image
                  </Form.Label>
                </Col>
                <Col sm={15}>
                  <Form.Control
                    value={formVal.image}
                    id="image"
                    name="image"
                    onChange={(e)=>setFormVal({...formVal,image_path:e.target.value})}
                    type="file"
                  />
                </Col>
              </Form.Group>
 */