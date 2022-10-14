
import React, { useContext } from 'react';
import { Container, Col, Row } from "react-bootstrap"
import infosesh from "../../assets/infosession.jpg"
import DarkModeContext from "../../context/darkMode/DarkModeContext"
import "./Homepage.css";
import "./Team.css";
import gdscwordmark from "../../assets/gdscwordmark.svg";
import Person from "./Person";

const Homepage = () => {
    const { mode, toggleMode } = useContext(DarkModeContext)
    return (
        <div className={mode === true ? "main dark" : "main"} style={{ height: "200vh" }}>
            <Container className="mt-auto mb-auto">
                <Row md={1}>
                    <img className='dsclogo' src={gdscwordmark} alt="Google Developer Student Clubs University of Toronto Mississauga" />
                    <p className='dsclogo'>Creating impact and <b>empowering students</b> through technology.</p>
                </Row>
            <Col>
                <Container>
                    <Row className='row'>
                        <Col>
                            <h3>About Us</h3>
                            <div className='lead'>
                                Google Developer Student Clubs (GDSC) is a student-led community backed by Google Developers aimed at empowering undergraduate students from all disciplines to grow their knowledge in technology, build solutions for their local communities, and connect with other members from the Google community.
                            </div>
                        </Col>
                        <Col>
                            <img src={infosesh} alt="dsc_infosesh" style={{ maxWidth: "100%" }}/>
                        </Col>
                    </Row>
                    <br />
                    <Row className='row'>
                        <h3>Creating impact and empowering students through technology</h3>
                        <div className='lead'>
                            Whether you are new to software development or you've been developing for quite a while, GDSC is a place where you can learn new technologies, make your ideas a reality, and collaborate to solve real-world problems. In addition to solving problems, GDSC will allow you to connect with other technology enthusiasts from other GDSC chapters and the Google Developer Community. We will be hosting events and activities for all students throughout the academic year. We hope to see you there!
                        </div>
                    </Row>
                </Container>
                <Container>
                    <h3>Meet the Team</h3>
                    <div className='team'>
                        {/* <Person name="Ilir" role="Pizza Delivery Man" picture={} />
                        <Person name="Ilir" role="Pizza Delivery Man" picture={} />
                        <Person name="Ilir" role="Pizza Delivery Man" picture={} />
                        <Person name="Ilir" role="Pizza Delivery Man" picture={} />
                        <Person name="Ilir" role="Pizza Delivery Man" picture={} />
                        <Person name="Ilir" role="Pizza Delivery Man" picture={} />
                        <Person name="Ilir" role="Pizza Delivery Man" picture={} />
                        <Person name="Ilir" role="Pizza Delivery Man" picture={} />
                        <Person name="Ilir" role="Pizza Delivery Man" picture={} />
                        <Person name="Ilir" role="Pizza Delivery Man" picture={} />
                        <Person name="Ilir" role="Pizza Delivery Man" picture={} />
                        <Person name="Ilir" role="Pizza Delivery Man" picture={} />
                        <Person name="Ilir" role="Pizza Delivery Man" picture={} />
                        <Person name="Ilir" role="Pizza Delivery Man" picture={} />
                        <Person name="Ilir" role="Pizza Delivery Man" picture={} /> */}

                    </div>
                </Container>
            </Col>
            </Container>
        </div>
    )
};

export default Homepage;