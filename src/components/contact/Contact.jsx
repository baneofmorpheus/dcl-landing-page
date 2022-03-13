import { Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { Fragment, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Toast } from "primereact/toast";

import "./style.scss";

// #TODO  integrate email sending functionality

function Contact() {
  const toast = useRef(null);

  return (
    <Fragment>
      <Row className="mt-0 md-mt-5 mb-3 dcl-contact align-items-center  pt-5 pb-5">
        <Col className="mb-5 md-mb-0" md="6">
          <h5 className="text-center text-dark mb-4">Contact Us</h5>
          <Toast ref={toast} />
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                className="bg-dark text-white"
                placeholder="Your Name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                className="bg-dark text-white"
                placeholder="Phone Number"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                className="bg-dark text-white"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                className="bg-dark text-white"
                as="textarea"
                rows={5}
                placeholder="Your Message"
              />
            </Form.Group>

            <div className="text-center">
              <Button
                onClick={() => {
                  toast.current.show({
                    severity: "success",
                    summary: "Success Message",
                    detail: "Order submitted",
                  });
                }}
                className=" w-50"
                variant="dark"
                type="button"
              >
                <Spinner
                  size="sm"
                  className="me-2"
                  variant="light"
                  animation="border"
                />{" "}
                Submit
              </Button>
            </div>
          </Form>
        </Col>
        <Col xs="12 " md="6" className="text-center">
          <a
            className="d-block text-decoration-none mb-4 text-dark"
            href="https://goo.gl/maps/XWKNEMTAowoiEQTB9"
          >
            <FontAwesomeIcon
              className="me-2 dcl-icon"
              icon={solid("location-dot")}
            />
            <span>
              36 Eze Gbakagbaka Avenue off Chelsea Fuel Station, Woji Elelenwo
              Road Woji, Port Harcourt, Rivers State.
            </span>
          </a>
          <p>
            <FontAwesomeIcon
              className="me-2 dcl-icon"
              icon={solid("mobile-screen-button")}
            />
            <span>08033123865 , 07017081067 , 08057609828, 08093068017</span>
          </p>
          <a className="text-dark text-decoration-none " href="#.">
            <FontAwesomeIcon
              className="me-2 dcl-icon"
              icon={solid("envelope")}
            />
            <span>contact@digitalcarsolutions.com</span>
          </a>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Contact;
