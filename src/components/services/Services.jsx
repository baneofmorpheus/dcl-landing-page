import { Row, Col } from "react-bootstrap";
import { Fragment } from "react";
import service1Image from "../../assets/images/service1.jpg";
import service2Image from "../../assets/images/service2.jpg";
import service3Image from "../../assets/images/service3.jpg";
import "./style.css";

function Services() {
  return (
    <Fragment>
      <Row>
        <Col xs="12 ">
          <h3 className="text-center">Our Services</h3>{" "}
        </Col>
        <Col xs="12 " className="mb-5">
          <div className="dcl-services-container h-100 w-100">
            <div className="dcl-services-container-one ">
              <p className="text-center">Autombile Diagnostics</p>
              <img alt="" className="img-fluid h-100" src={service1Image} />
            </div>
            <div className="dcl-services-container-two ">
              <p className="text-center">Spraying and Controlled Bodywork</p>

              <img alt="" className="img-fluid h-100" src={service2Image} />
            </div>
            <div className="dcl-services-container-three ">
              <p className="text-center">Automobile Servicing</p>

              <img alt="" className="img-fluid h-100" src={service3Image} />
            </div>
          </div>
        </Col>
        <Col xs="12 " className="mt-5 mb-5">
          <div className="dcl-services-container-reversed h-100 w-100">
            <div className="dcl-services-container-one-reversed ">
              <p className="text-center">Towing Service</p>
              <img alt="" className="img-fluid h-100" src={service1Image} />
            </div>
            <div className="dcl-services-container-two-reversed ">
              <p className="text-center">Interstate Service</p>

              <img alt="" className="img-fluid h-100" src={service2Image} />
            </div>
            <div className="dcl-services-container-three-reversed ">
              <p className="text-center">Spare Parts Purchase</p>

              <img alt="" className="img-fluid h-100" src={service3Image} />
            </div>
          </div>
        </Col>
        <Col xs="12 " className="mt-5 mb-5">
          <div className="dcl-services-container h-100 w-100">
            <div className="dcl-services-container-one ">
              <p className="text-center">Interstate Service</p>
              <img alt="" className="img-fluid h-100" src={service1Image} />
            </div>
            <div className="dcl-services-container-two ">
              <p className="text-center">General Consultation</p>

              <img alt="" className="img-fluid h-100" src={service2Image} />
            </div>
            <div className="dcl-services-container-three ">
              <p className="text-center">Pick up Service</p>

              <img alt="" className="img-fluid h-100" src={service3Image} />
            </div>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Services;
