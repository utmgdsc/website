
import React, { useState, useEffect, useCallback } from "react";
import AppModule from "../../css/admin/Application.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const platformName = {
    aws: "AWS",
    google_cloud: "Google Cloud",
    firebase: "Firebase",
    heroku: "Heroku",
    netlify: "Netlify",
    azure: "Azure",
    any: "Any",
  };
  
  const databaseName = {
    sql: "SQL",
    nosql: "NoSQL",
    graph: "Graph",
    any: "Any",
  };
  
  const years = {
    2: "All",
    3: "Third",
    4: "Fourth",
  };
  
  const status = {
    1: "Application",
    2: "Interview",
    3: "Team matching",
    4: "Accepted",
  };
  
  const types = {
    all: "All",
    student: "Student",
    mentor: "Mentor",
  };
  const req_years = {
    "all": 2,
    "third": 3,
    "fourth": 4,
  };
  
export default function Filter(props) {
    // initial states for storing filtering values
    const init_filter = {
      role: "student",
      disablePEY: true,
      hasGroup: false,
      status: 1,
      year: 2,
      complete_pey: false,
      databases: {
        sql: false,
        nosql: false,
        graph: false,
        any: true,
      },
      cloudPlat: {
        aws: false,
        google_cloud: false,
        firebase: false,
        heroku: false,
        netlify: false,
        azure: false,
        any: true,
      },
      cgpa: "1.8",
      status: 1,
    };
    const [filter, setFilter] = useState(init_filter);
    const handleClearFilter = (e) => {
      setFilter(init_filter);
    };
    // disable PEY section when role is not mentor
    const handleDisablePEY = (e) => {
      if (e.target.id === "mentor") {
        setFilter({ ...filter, disablePEY: false, role: e.target.id });
      } else {
        setFilter({
          ...filter,
          disablePEY: true,
          complete_pey: false,
          role: e.target.id,
        });
      }
    };
    // add selected database to state and remove when unselected
    const handleDatabase = (e) => {
      let id;
      id = e.target.id;
      filter["databases"][id] = !filter["databases"][id];
      setFilter({ ...filter, databases: filter["databases"] });
    };
    // add selected cloud platforms to state and remove when unselected
    const handleCloudPlat = (e) => {
      let id;
      id = e.target.id;
      filter["cloudPlat"][id] = !filter["cloudPlat"][id];
      setFilter({ ...filter, cloudPlat: filter["cloudPlat"] });
    };
  
    const handleHasGroup = (e) => {
      setFilter({ ...filter, hasGroup: !filter["hasGroup"] });
    };
    // change state of year in filter
    const handleYear = (e) => {
      setFilter({ ...filter, year: parseInt(e.target.id) });
      console.log(e.target.id);
    };
    // chenge state of complete_pey in filter
    const handleCheckPEY = (e) => {
      setFilter({ ...filter, complete_pey: !filter.complete_pey });
    };
    const handleCGPA = (e) => {
      setFilter({ ...filter, cgpa: e.target.value });
    };
    const handleStatus = (e) => {
      setFilter({ ...filter, status: parseInt(e.target.id) });
    };
    const handleApply = (e) => {
      const req_body = filter;
      req_body.cgpa = parseFloat(req_body.cgpa);
      if (isNaN(req_body.cgpa)){
        alert("Invalid cgpa, set to minimum (1.8) by default")
        req_body.cgpa = 1.8;
      }
      if (req_body.role == "student") {
          
        axios
          .post("/applications/filterStudentApp", req_body)
          .then((res) => {
            console.log(res.data)
            let data = res.data.data;
            for (let i = 0; i < data.length; i++) {
              data[i]["role"] = "Student";
            }
            props.updateApplications(data);
            setFilter({ ...filter, cgpa: req_body.cgpa });
          })
          .catch((errors) => {
            alert(errors);
          });
      } else if (req_body.role == "mentor") {
        axios
          .post("/applications/filterMentorApp", req_body)
          .then((res) => {
            let data = res.data.data;
            console.log(data);
            for (let i = 0; i < data.length; i++) {
              data[i]["role"] = "Mentor";
            }
            props.updateApplications(data);
            setFilter({ ...filter, cgpa: req_body.cgpa });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };
    return (
      <div className={`d-flex flex-column ${AppModule.filter_container} `}>
        <div className="d-flex justify-content-center">
          <h4>Filter</h4>
          <div className={AppModule.align_end}>
            <Button variant="secondary" onClick={handleClearFilter}>
              {" "}
              Clear{" "}
            </Button>
          </div>
        </div>
        <hr></hr>
        <h5>Role</h5>
        <Form>
          {["student", "mentor"].map((type) => (
            <Form.Check
              label={types[type]}
              key={type}
              name="role"
              type="radio"
              id={type}
              checked={filter["role"] === type}
              onChange={handleDisablePEY}
            />
          ))}
        </Form>
        <hr></hr>
        <h5>Year of Study</h5>
        <Form>
          {[2, 3, 4].map((year) => (
            <Form.Check
              label={years[year]}
              key={year}
              name="year"
              type="radio"
              id={year}
              checked={filter["year"] === year}
              onChange={handleYear}
            />
          ))}
        </Form>
        <hr></hr>
        <h5>Database</h5>
        <Form>
          {["any", "sql", "nosql", "graph"].map((db) => (
            <Form.Check
              label={databaseName[db]}
              key={db}
              name="database"
              type="checkbox"
              id={db}
              checked={filter["databases"][db]}
              onChange={handleDatabase}
            />
          ))}
        </Form>
        <hr></hr>
        <h5>Cloud Plat</h5>
        <Form>
          {["any", "google_cloud", "firebase", "heroku", "netlify", "azure"].map(
            (plat) => (
              <Form.Check
                label={platformName[plat]}
                key={plat}
                name="plateform"
                type="checkbox"
                id={plat}
                checked={filter["cloudPlat"][plat]}
                onChange={handleCloudPlat}
              />
            )
          )}
        </Form>
        <hr></hr>
        <h5>Status</h5>
        <Form>
          {[1, 2].map((s) => (
            <Form.Check
              label={status[s]}
              key={s}
              name="status"
              type="radio"
              id={s}
              checked={filter["status"] == s}
              onChange={handleStatus}
            />
          ))}
        </Form>
        <hr></hr>
        <Form className="d-flex align-content-center">
          <Form.Label htmlFor="cgpa" className="mt-auto mb-auto me-2">
            CGPA {">="}{" "}
          </Form.Label>
          <Form.Control
            name="cgpa"
            type="text"
            id="cgpa"
            className={AppModule.text_input}
            value={filter["cgpa"]}
            onChange={handleCGPA}
          />
        </Form>
        <hr></hr>
        {/* <h5>Has Group</h5> */}
        <Form>
          <Form.Check
            label="Has Group"
            name="hasGroup"
            type="checkbox"
            id="hasGroup"
            checked={filter["hasGroup"]}
            disabled={filter["role"] === "mentor"}
            onChange={handleHasGroup}
          />
        </Form>
        <hr></hr>
  
        <h5>PEY</h5>
        <Form className="d-flex flex-column align-content-center">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="completePEY"
              id="PEY"
              checked={filter["complete_pey"]}
              disabled={filter["disablePEY"]}
              onChange={handleCheckPEY}
            />
            <label className="form-check-label" htmlFor="PEY">
              Complete PEY
            </label>
          </div>
        </Form>
        <hr></hr>
        <div className="d-flex">
          <Button className={AppModule.align_end} onClick={handleApply}>
            Apply
          </Button>
        </div>
      </div>
    );
  }
  