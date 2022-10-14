import React, {useState,useEffect, useContext} from "react";
import {Button,Row,Col,Form,Modal,Nav} from "react-bootstrap";
import TeamModule from "../../css/admin/AdminTeam.module.css";
import axios from "axios";
import DarkModeContext from "../../context/darkMode/DarkModeContext"
import "./admin.css"

const AdminTeamManagement = () =>{
    const [modalMsg,setModalMsg] = useState("")
    const [showModal,setShowModal] = useState(false)
    const [confirmMethod,setConfirmMethod] = useState({func:null})
    // Information State
    const [teamInfo, setTeamInfo] = useState({})
    const [allTeam,setAllTeam] = useState([])
    const [students,setStudents] = useState([]);
    const { mode, toggleMode } = useContext(DarkModeContext)
    const [infoState,setInfoState] = useState("");

    const handleConfirm = (e)=>{
        if (confirmMethod.func === "select"){
            axios.post("/teams/getTeamMembers",{"team_name":confirmMethod.team_name})
            .then((res)=>{
                let temp_members = []
                for (let member of res.data.members){
                    temp_members = [...temp_members,{student_num:member.student_num,role:member.role}]
                }
                setTeamInfo({team_name: confirmMethod.team_name,members:temp_members})
            })
        }else if(confirmMethod.func === "deleteMember"){
            axios.post("/teams/removeTeamMember",{
                "team_name":confirmMethod.team_name,
                "student_num":confirmMethod.student_num
            }).then((res)=>{
                axios.post("/teams/getTeamMembers",{"team_name":confirmMethod.team_name})
                .then((res)=>{
                    let temp_members = []
                    for (let member of res.data.members){
                        temp_members = [...temp_members,{student_num:member.student_num,role:member.role}]
                    }
                    setTeamInfo({team_name: confirmMethod.team_name,members:temp_members})
                })
                if (infoState === "student"){
                    getStudents();
                }else if (infoState === "mentor"){
                    getMentors();
                }
                alert(`Successfully Deleted ${confirmMethod.student_num} From ${confirmMethod.team_name}`)
            }).catch((e)=>{
                alert(e)
            })
        }else if(confirmMethod.func === 'create'){
            console.log(confirmMethod.team_name)
            axios.post("/teams/createTeam",{
                "team_name":confirmMethod.team_name
            }).then((res)=>{
                alert(`Successfully Created ${confirmMethod.team_name}`)
                confirmMethod.handler("");
                getAllTeams()
            }).catch((e)=>{
                alert(e)
            })
        }else if(confirmMethod.func === 'delete'){
            axios.post("/teams/deleteTeam",{"team_name":confirmMethod.team_name})
            .then((res)=>{
                alert(`Successfully Deleted Team ${confirmMethod.team_name}`)
                setTeamInfo({})
                getAllTeams()
            }).catch((e)=>{
                alert(e)
            })
        }else if(confirmMethod.func === "add"){
            if (teamInfo){
                console.log(confirmMethod.role);
                axios.post("/teams/addTeamMember",{"team_name":teamInfo.team_name,"student_num":confirmMethod.student_num,'role':confirmMethod.role})
                .then((res)=>{
                    axios.post("/teams/getTeamMembers",{"team_name":teamInfo.team_name})
                    .then((res)=>{
                        let temp_members = []
                        for (let member of res.data.members){
                            temp_members = [...temp_members,{student_num:member.student_num,role:member.role}]
                        }
                        setTeamInfo({team_name: teamInfo.team_name,members:temp_members})
                    })
                    if (confirmMethod.role === "student"){
                        console.log("hello");
                        getStudents();
                    }else{
                        getMentors();
                    }
                    alert(`Successfully Added Student to ${teamInfo.team_name}`)
                }).catch((e)=>{
                    alert(e)
                })
            }else{
                alert("Please Select a team");
            }
        }
        setShowModal(false)
    }
    const getAllTeams = ()=>{
        axios.get("/teams/getAllTeams")
        .then((res)=>{
            let teams = []
            for (let team of res.data.teams){
                teams = [...teams,{"team_name":team.team_name}]
            }
            setAllTeam(teams)
        })
    }
    const getStudents = ()=>{
        axios.get("/teams/getStudentApp")
        .then((res)=>{
            let students = res.data.students;
            students.map((student)=>{
                student["role"] = "student";
            })
            setStudents(students);
        })
    }
    const getMentors = ()=>{
        axios.get("/teams/getMentorApp")
        .then((res)=>{
            let students = res.data.students;
            students.map((student)=>{
                student["role"] = "mentor";
            })
            setStudents(students);
        })
    }
    const getInfo = {
        "student":getStudents,
        "mentor":getMentors
    }
    const handleCancel = (e)=>{
        setShowModal(false)
    }
    const handleShowModal = (e)=>{
        setShowModal(false)
    }
    useEffect(()=>{
        axios.get("/teams/getAllTeams")
        .then((res)=>{
            let teams = []
            for (let team of res.data.teams){
                teams = [...teams,{"team_name":team.team_name}]
            }
            setAllTeam(teams)
        })
    },[])
    const modalFunc = {
        "setConfirmMethod": setConfirmMethod,
        "setModalMsg" : setModalMsg,
        "setShowModal" : setShowModal
    }
    return (
        <div >
            <Row>
                <Col sm={6} className="ps-2">
                    <SelectedTeam SelectedTeam={teamInfo} SetSelectedTeam={setTeamInfo} ModalFunc={modalFunc}/>
                </Col>
                <Col sm={6} className="pe-2">
                    <InfoSection ModalFunc={modalFunc} AllTeams={allTeam} Students={students} Info={getInfo} InfoState={setInfoState}/>
                </Col>
            </Row>
            <Modal show={showModal} onHide={handleShowModal} className="d-flex flex=column" dialogClassName="w-50 m-auto">
                <div className={mode === true ? "dark" : ""}>
                <Modal.Header>
                    <strong>Please Confirm</strong>
                </Modal.Header>
                <Modal.Body>
                    {modalMsg}
                </Modal.Body>
                <Modal.Footer className="d-flex p-1 ps-2 pe-2">
                    <Button onClick={handleConfirm}> Confirm </Button>
                    <Button variant="secondary" className="ms-auto" onClick={handleCancel}> Cancel </Button>
                </Modal.Footer>
                </div>
            </Modal>
        </div>
    )
}

const SelectedTeam = (props)=>{
    const [mentors,setMentors] = useState([])
    const [students,setStudents] = useState([])
    const [teamName,setTeamName] = useState("Select a team")
    const [createTeamInfo,setCreateTeamInfo] = useState('')
    const [newMember,setNewMember] = useState("")
    useEffect(()=>{
        if (props.SelectedTeam && Object.keys(props.SelectedTeam).length > 0){
            let temp_students = []
            let temp_mentors = []
            setTeamName(props.SelectedTeam.team_name)
            for (let user of props.SelectedTeam.members){
                if (user.role == "student"){
                    temp_students = [...temp_students,user]
                }else{
                    temp_mentors = [...temp_mentors,user]
                }
            }
            setStudents(temp_students)
            setMentors(temp_mentors)
        }else{
            setTeamName("Select a team")
            setStudents([])
            setMentors([])
        }
    },[props.SelectedTeam])
    const handleTeamName = (e)=>{
        setCreateTeamInfo(e.target.value)
    }
    const handleCreate = (e)=>{
        if (createTeamInfo === ""){
            alert("Team name cannot be zero")
            return
        }
        props.ModalFunc.setModalMsg(`You want to create a team \"${createTeamInfo}\".`)
        props.ModalFunc.setConfirmMethod({func:"create",team_name:createTeamInfo,handler:setCreateTeamInfo})
        props.ModalFunc.setShowModal(true)
    }
    const handleDeleteMember =(e)=>{
        props.ModalFunc.setModalMsg(`You want to remove \"${e.target.id}\" from \"${teamName}\".`)
        props.ModalFunc.setConfirmMethod({func:"deleteMember",team_name:teamName,student_num:e.target.id})
        props.ModalFunc.setShowModal(true)
    }
    const handleDelete = (e)=>{
        props.ModalFunc.setModalMsg(`You want to delete \"${teamName}\".`)
        props.ModalFunc.setConfirmMethod({func:"delete",team_name:teamName})
        props.ModalFunc.setShowModal(true)
    }
    const handleMemberNum = (e)=>{
        setNewMember(e.target.value)
    }
    const handleAddMember = (e)=>{
        if (newMember === ""){
            alert("New member student number cannot be zero")
            return
        }
        props.ModalFunc.setModalMsg(`You want to add "${newMember}"  to team \"${teamName}\".`)
        props.ModalFunc.setConfirmMethod({func:"add",team_name: teamName,student_num:newMember,role:"student"})
        setNewMember("")
        props.ModalFunc.setShowModal(true)
    }
    return (
        <div>
            <div className={`${TeamModule.container_border} p-2 pb-3`}>
                <div>
                    <h1 className="text-center">{teamName}</h1>
                </div>
                <hr></hr>
                <div>
                    <h4 className={`text-center`}>
                        Mentors
                    </h4>
                    <div>
                        {
                            mentors.map((mentor)=>{
                                return(
                                    <div key={mentor.student_num} className={`border-top ${TeamModule.border_clr} ps-2 pt-3 mb-3 d-flex`}>
                                        <div className="mt-auto mb-auto">{mentor.student_num}</div>
                                        <button type="button" className="btn btn-xs btn-danger img-circle ms-auto me-3" id={mentor.student_num} onClick={handleDeleteMember}>
                                            &#xff38;
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <hr></hr>
                <div>
                    <h4 className={`text-center`}>
                        Students
                    </h4>
                    <div>
                        {
                            students.map((student)=>{
                                return(
                                    <div key={student.student_num} className={`border-top ${TeamModule.border_clr} ps-2 pt-3 mb-3 d-flex`}>
                                        <div className="mt-auto mb-auto">{student.student_num}</div>
                                        <button type="button" className="btn btn-xs btn-danger img-circle ms-auto me-3" id={student.student_num} onClick={handleDeleteMember}>&#xff38;</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <hr></hr>
                <div className="d-flex">
                    <Button variant="danger" className="ms-auto me-2" onClick={handleDelete}>Delete Team</Button>
                </div>
            </div>
            <div className={`${TeamModule.container_border} p-2 mt-3`}>
                <Form>
                    <Form.Label htmlFor="team_name" className="text-center"><h4>Create Team</h4></Form.Label>
                    <Form.Control name="team_name" type="text" id="team_name_form" onChange={handleTeamName} value={createTeamInfo}></Form.Control>
                </Form>
                <Button className="mt-3 mb-3 ms-auto me-auto" onClick={handleCreate}> Create</Button>
            </div>
        </div>
    )
}

const InfoSection = (props)=>{
    const [itemKey, setActive] = useState("student");
    const [data,setData] = useState([])
    const handleActive = (e) => {
        // update data
        if (e ==='student'){
            props.Info.student();
            props.InfoState('student');
        }else if (e==="mentor"){
            props.Info.mentor();
            props.InfoState('mentor');
        }else{
            setData(props.AllTeams)
            props.InfoState('team');
        }
        setActive(e);
    };
    useEffect(()=>{
        props.Info.student();
    },[])
    
    useEffect(()=>{
        if(itemKey === 'team'){
            setData(props.AllTeams)
        }
    },[props.AllTeams])
    return (
        <div>
            <Nav justify variant="tabs" activeKey={itemKey} onSelect={handleActive}>
                <Nav.Item>
                    <Nav.Link eventKey="student" href="#">Student</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="mentor" href="#">Mentor</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="team" href="#">Team</Nav.Link>
                </Nav.Item>
            </Nav>
            {
                ((itemKey === "team")?<TeamListItem Data={props.AllTeams} ModalFunc={props.ModalFunc}/>:<StudentListItem Data={props.Students} ModalFunc={props.ModalFunc} Role={itemKey}/>)
            }
        </div>
    )
}

const StudentListItem = (props) =>{
    const handleAdd = (e)=>{
        props.ModalFunc.setModalMsg(`You want to add \"${e.target.id}\" to current team.`)
        props.ModalFunc.setConfirmMethod({func:"add", student_num:e.target.id,role:props.Role})
        props.ModalFunc.setShowModal(true)
        // do something
    }
    return (
        <div>
            {   
                props.Data.map((info)=>(
                    <div className={`border-top ${TeamModule.border_clr} ps-2 pt-3 mb-3 d-flex`} key={info.student_num}>
                        <div className="mt-auto mb-auto">{info.student_num}</div>
                        <Button className="ms-auto me-3" id={info.student_num} onClick={handleAdd}>Add</Button>
                    </div>
                ))
            }
        </div>
    )
}

const TeamListItem = (props) =>{
    const [teams,setTeams] = useState([])
    const handleSelect = (e)=>{
        props.ModalFunc.setModalMsg(`You want to select \"${e.target.id}\" as current team.`)
        props.ModalFunc.setConfirmMethod({func:"select",team_name:e.target.id})
        props.ModalFunc.setShowModal(true)
    }
    useEffect(()=>{
        setTeams(props.Data)
    },[props.Data])
    return (
        <div>
            {   
                teams.map((info)=>(
                    <div className={`border-top ${TeamModule.border_clr} ps-2 pt-3 mb-3 d-flex`} key={info.team_name}>
                        <div className="mt-auto mb-auto">{info.team_name}</div>
                        <Button className="ms-auto me-3" id={info.team_name} onClick={handleSelect}>Select</Button>
                    </div>
                ))
            }
        </div>
    )
}

export default AdminTeamManagement