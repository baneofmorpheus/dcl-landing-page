import { Row, Col } from "react-bootstrap";
import { Fragment } from "react";

import acuraImage from "../../assets/images/acura.png";
import "./style.scss";

function About() {
  return (
    <Fragment>
      <Row className="mt-5 bg-dark pt-5 pb-5">
        <Col
          xs={{ order: 2, span: "12" }}
          md={{ order: 1, span: "6" }}
          className="mt-5 mb-5"
        >
          <div className="d-flex align-items-center h-100">
            <img src={acuraImage} className="img-fluid about-img" alt="" />
          </div>
        </Col>
        <Col
          xs={{ order: 1, span: "12" }}
          md={{ order: 2, span: "6" }}
          className="mt-5 mb-5"
        >
          <h5 className="text-center text-white mb-3">About Us</h5>
          <p className="text-white">
            As an independent garage established in 2009, Digital Carsolutions
            Ltd has built up long-standing relationships with many of its
            customers, through its focus on customer care, professional
            expertise, standard and quality of work.
            <br /> Our workshop is fully equipped with the most advanced
            diagnostic equipment and tools. Access to the latest manufacturers’
            technical data enables our workshop to offer dealership level
            diagnostic services, vehicle servicing, electrical, mechanical,
            cooling system repairs, automobile upholstery as well as body
            repairs. Our technicians are professionally trained and can perform
            repairs on most cars and models.. <br /> We prioritize high-quality
            service, so we endeavor to use genuine OE parts or parts of
            equivalent quality, as well as top-branded lubricants and motor oil
            on your vehicle(s). We try our utmost to provide first class,
            efficient and friendly service, from fault diagnosis to analysis
            through to providing sound advice on all technical, electrical and
            mechanical problems. Here, we offer real value for money and a
            cost-effective alternative to the franchised main dealers. As an
            independent auto workshop, Digital Carsolutions Ltd is: <br /> Small
            enough to offer personalized service.
            <br /> Fully equipped to service and repair most of today’s
            technologically advanced vehicles.
            <br /> Guaranteed use of OE quality parts or parts of equivalent
            standard. Invest in the latest diagnostic equipment. <br /> Employ
            highly skilled technicians . Represent real value for money Allow us
            pamper and show love to your car(s)
          </p>
        </Col>
      </Row>
    </Fragment>
  );
}

export default About;
