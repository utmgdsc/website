import React, { useContext } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import DarkModeContext from "../../context/darkMode/DarkModeContext";

const ContactUs = () => {
  const { mode, toggleMode } = useContext(DarkModeContext);
  return (
    <div className={mode === true ? "main dark" : "main"}>
      <Container>
        <Row>
          <h3>Contact Us</h3>
          <Col>
            <ul>
              <h4 className="lead">Follow us on social media!</h4>
              <br />
              <Button
                type="submit"
                variant="primary"
                href="https://www.facebook.com/utmdsc"
              >
                <FaFacebook /> @utmdsc
              </Button>
              <br />
              <br />
              <Button
                type="submit"
                variant="info"
                href="https://twitter.com/dscutm/"
              >
                <FaTwitter /> @dscutm
              </Button>
              <br />
              <br />
              <Button
                type="submit"
                variant="dark"
                href="https://www.instagram.com/dscutm/"
              >
                <FaInstagram /> @dscutm
              </Button>
              <br />
              <br />
              <Button
                type="submit"
                variant="light"
                href="mailto:team@dscutm.com"
              >
                <AiOutlineMail /> team@dscutm.com
              </Button>
            </ul>
          </Col>
          <Col>
            <iframe
              id="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.7750527720214!2d-79.66511628425863!3d43.548730767197384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b43e3135af203%3A0x713c168866b9f492!2sUniversity%20of%20Toronto%20Mississauga!5e0!3m2!1sen!2sca!4v1569695244401!5m2!1sen!2sca"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
