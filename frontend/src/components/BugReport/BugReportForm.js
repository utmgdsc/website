import React, { useState, useContext, useEffect } from 'react'
import DarkModeContext from "../../context/darkMode/DarkModeContext"
import "bootstrap/dist/css/bootstrap.min.css";
import "./BugReportForm.css"
import axios from "axios"
const BugReportForm = () => {
    const initialValues = { email: "", bugSeverity: "", bugOccurance: "", information: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            axios.post("/mail",
                {
                    data: {
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
                }).then(() => {
                    
                }).catch((err) => {
                    console.log(err)
                })

            axios.post("/bugReport",
                {
                    data: {
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
            ).then(() => {
            }).catch((err) => {
                console.log(err)
            })
            window.location.href = "/"
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

    return (
        <div className={mode === true ? "main dark" : "main"}>
            <div className="container my-5">
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-5 col-md-9 col-sm-12">
                        <div className="bug-form-wrap p-5">
                            <h3 className="my-2 text-center text-danger">Bug Report</h3>
                            <form className="mt-3" onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <label className="text-left mb-2" htmlFor="">Your Email <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" placeholder="Enter your email" name="email"
                                        onChange={handleChange} />
                                    <p className="text-danger field-error">
                                        {formErrors.email}
                                    </p>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="bug-severity" className="mb-2">Bug Severity <span class="text-danger">*</span></label>
                                    <select name="bugSeverity" id="bug-severity" className="form-control"
                                        onChange={handleChange}>
                                        <option value="">-----Select------</option>
                                        <option value="minor" >Minor</option>
                                        <option value="moderate">Moderate</option>
                                        <option value="major">Major</option>
                                        <option value="game-breaking">Game-breaking</option>
                                    </select>
                                    <p className="text-danger field-error">
                                        {formErrors.bugSeverity}
                                    </p>
                                </div>
                                <div className="form-group mb-3">
                                    <label>How often does it occurs ? <span className="text-danger">*</span></label> <br />
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="bugOccurance" id="rarely" value="rarely"
                                            onChange={handleChange} />
                                        <label className="form-check-label" for="rarely">Rarely</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="bugOccurance" id="somewhat-rarely" value="somewhat rarely"
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label" for="somewhat-rarely">Somewhat Rarely</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="bugOccurance" id="somewhat-often" value="somewhat often"
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label" for="somewhat-often">Somewhat Often</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="bugOccurance" id="commonly" value="commonly"
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label" for="commonly">Commonly</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="bugOccurance" id="very" value="very"
                                            onChange={handleChange}
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
                                    ></textarea>
                                    <p className="text-danger field-error">
                                        {formErrors.information}
                                    </p>
                                </div>

                                <button className="btn btn-danger w-100" type="submit">Report Bug</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BugReportForm