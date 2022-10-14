import { useState, useEffect, useContext, useCallback } from "react"
import axios from "axios"
import { Edit, Delete } from '@mui/icons-material';
import DarkModeContext from "../../context/darkMode/DarkModeContext"
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody,ModalTitle } from "react-bootstrap"
import "./bugReportLogs.css"
const BugReportLogs = () => {
    const [bugs, setBugs] = useState([])
    const [editBug, setEditBug] = useState({})
    const initialValues = { email: "", bugSeverity: "", bugOccurance: "", information: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [checkedState, setCheckedState] = useState(
        new Array(bugs.length).fill(false)
    );
    const [isOpen, setIsOpen] = useState(false);
    const showModal = useCallback((e, bug) => {
        
        setEditBug(bug)
        
    }, []);

    useEffect(() => {
        if(editBug)
        setFormValues({
            email: editBug.email,
            bugSeverity: editBug.bugSeverity,
            bugOccurance: editBug.occurance,
            information: editBug.information
        })
    }, [editBug])

    useEffect(() => {
        if(editBug.email) {
            setIsOpen(true)
        }else {
            setIsOpen(false)
        }
    }, [editBug])

    const hideModal = useCallback((e) => {
        
        setEditBug({})
    }, []);

    useEffect(() => {
        axios.get("/bugReport", {
            headers: {
                "x-access-token": localStorage.getItem("token")
            }
        })
            .then((res) => {
                setBugs(res.data.bugReportData)
                const isResolved = res.data.bugReportData.map((item) => {
                    return item.resolved
                })
                setCheckedState(isResolved)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    const handleCheckListener = async (e, id, position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState)
        const res = await axios.post("/bugReport/resolved", {
            data: {
                id,
                isResolved: e.target.checked
            },
        }, {
            headers: {
                "x-access-token": localStorage.getItem("token")
            }
        })
    }

    const handleDeleteListener = async (e, id) => {
        const updatedBugsList = bugs.filter((bug) => bug._id != id)
        setBugs(updatedBugsList)
        const res = await axios.post("/bugReport/deleteBug", {
            data: {
                id,
            },
        }, {
            headers: {
                "x-access-token": localStorage.getItem("token")
            }
        })
    }

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        
    }, [formValues]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };
    useEffect((e) => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            axios.post("/bugReport/editBug",
                {
                    data: {
                        id: editBug._id,
                        email: formValues.email,
                        severity: formValues.bugSeverity,
                        occurs: formValues.bugOccurance,
                        information: formValues.information
                    }
                },
                {
                    headers: {
                        "x-access-token": localStorage.getItem("token")
                    }
                }
            ).then((res) => {
                const data = res.data.data
                bugs.forEach((bug) => {
                    if(bug._id === data._id) {
                        bug.email = data.email
                        bug.bugSeverity = data.bugSeverity
                        bug.occurance = data.occurance
                        bug.information = data.information
                    }
                })
                setBugs(bugs)
                hideModal()
            }).catch((err) => {
                console.log(err)
            })
        }
    }, [formErrors])

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "Invalid email format";
        }
        if (!values.bugOccurance) {
            errors.bugOccurance = "Bug Occurance is required"
        }
        if (!values.bugSeverity) {
            errors.bugSeverity = "Bug Occurance is required"
        }
        if (!values.information) {
            errors.information = "Bug Information is required"
        }
        return errors;
    };

    const { mode, toggleMode } = useContext(DarkModeContext)

    return (<div className={mode === true ? "main dark" : "main"}>
        <div className="table-wrapper table-responsive container shadow p-3 mt-5 w-75">
            <table className={mode == true ? "table table-striped" : "table"}>
                <thead>
                    <tr className="text-danger">
                        <th>#</th>
                        <th>Email</th>
                        <th>Bug Severity</th>
                        <th>Occurance</th>
                        <th>Information</th>
                        <th>Resolved</th>
                        <th>Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bugs.map((bug, index) =>
                            <tr key={bug._id}>
                                <td>{(index + 1)}</td>
                                <td>{bug.email}</td>
                                <td>{bug.bugSeverity}</td>
                                <td>{bug.occurance}</td>
                                <td>{bug.information}</td>
                                <td><input type="checkbox" checked={checkedState[index]} onChange={(e) => handleCheckListener(e, bug._id, index)} /></td>
                                <td className="edit-delete">
                                    <Edit onClick={(e) => showModal(e, bug)} />
                                    <Delete onClick={(e) => handleDeleteListener(e, bug._id)} />
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
          
        </div>
        <Modal show={isOpen} onHide={hideModal} >
            <div className={mode == true ? "dark" : ""}>
                <Modal.Header closeButton>
                    <ModalTitle>
                        Edit
                    </ModalTitle>
                </Modal.Header>
                <ModalBody>
                    <form className="mt-3" onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label className="text-left mb-2" htmlFor="">Your Email <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" placeholder="Enter your email" name="email"
                                onChange={handleChange}
                                value={formValues.email}
                            />
                            <p className="text-danger field-error">
                                {formErrors.email}
                            </p>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="bug-severity" className="mb-2">Bug Severity <span class="text-danger">*</span></label>
                            <select name="bugSeverity" id="bug-severity" className="form-control"
                            onChange={handleChange} 
                            value={formValues.bugSeverity}>
                                <option value="">-----Select------</option>
                                <option value="minor"
                                >Minor</option>
                                <option value="moderate"
                                   
                                >Moderate</option>
                                <option value="major"
                                   
                                >Major</option>
                                <option value="game-breaking"
                                    
                                >Game-breaking</option>
                            </select>
                            <p className="text-danger field-error">
                                {formErrors.bugSeverity}
                            </p>
                        </div>
                        <div className="form-group mb-3">
                            <label>How often does it occurs ? <span className="text-danger">*</span></label> <br />
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="bugOccurance" id="rarely" value="rarely"
                                    onChange={handleChange}
                                    checked={formValues.bugOccurance === "rarely"}
                                />
                                <label className="form-check-label" for="rarely">Rarely</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="bugOccurance" id="somewhat-rarely" value="somewhat rarely"
                                    onChange={handleChange}
                                    checked={formValues.bugOccurance === "somewhat rarely"}
                                />
                                <label className="form-check-label" for="somewhat-rarely">Somewhat Rarely</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="bugOccurance" id="somewhat-often" value="somewhat often"
                                   onChange={handleChange}
                                   checked={formValues.bugOccurance === "somewhat often"}
                                />
                                <label className="form-check-label" for="somewhat-often">Somewhat Often</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="bugOccurance" id="commonly" value="commonly"
                                    onChange={handleChange}
                                    checked={formValues.bugOccurance === "commonly"}
                                />
                                <label className="form-check-label" for="commonly">Commonly</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="bugOccurance" id="very" value="very"
                                   onChange={handleChange}
                                   checked={formValues.bugOccurance === "very"}
                                />
                                <label className="form-check-label" for="very">Very</label>
                            </div>
                            <p className="text-danger field-error">
                                {formErrors.bugOccurance}
                            </p>
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="report" className="mb-3">Add your bug information <span className="text-danger">*</span></label>
                            <textarea name="information" className="w-100 form-control" rows='5' placeholder="Report Bug"
                            onChange={handleChange}
                            value={formValues.information}>
                            </textarea>
                            <p className="text-danger field-error">
                                {formErrors.information}
                            </p>
                        </div>
                        <button className="btn btn-success w-100" type="submit">Edit Bug</button>
                    </form>
                </ModalBody>
                </div>
            </Modal>
    </div>)
}

export default BugReportLogs