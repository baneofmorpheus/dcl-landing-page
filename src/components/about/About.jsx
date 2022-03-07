import { Row, Col } from "react-bootstrap";
import { Fragment } from "react";

import acuraImage from "../../assets/images/acura.png";
import "./style.scss";

function About() {
  return (
    <Fragment>
      <Row className="mt-5 bg-dark pt-5 pb-5">
        <Col xs="12 " className="mt-5 mb-5" md="6">
          <img src={acuraImage} className="img-fluid about-img" alt="" />
        </Col>
        <Col className="mt-5 mb-5" xs="12 " md="6">
          <h5 className="text-center text-white mb-3">About Us</h5>
          <p className="text-white">
            As an independent garage established in 2009, Digital Carsolutions
            Ltd has built up long-standing relationships with many of its
            customers, through its focus on customer care, professional
            expertise, standard and quality of work. <br /> Digital Carsolutions
            Ltd is fully equipped with the most advanced diagnostic equipment
            and tools and has access to the most up to date manufacturers’
            technical data which enables our workshop to offer dealership level
            diagnostic services, vehicle servicing, electrical, mechanical,
            cooling system repairs, automobile upholstery as well as body
            repairs. Our highly skilled technicians are fully qualified to work
            on most makes and models and fix them with exceptional expertise.{" "}
            <br />
            The quality of our work is paramount, so we endeavor to use genuine
            OE parts or parts of equivalent quality, as well as top-branded
            lubricants and motor oil on your vehicle(s). We try our utmost to
            provide first class, efficient and friendly service, from fault
            diagnosis to analysis through to providing sound advice on all
            technical, electrical and mechanical problems. At Digital
            Carsolutions Ltd, we offer real value for money and a cost-effective
            alternative to the franchised main dealers. As an independent auto
            workshop, Digital Carsolutions Ltd is small enough to offer
            personalized service, fully equipped to service and repair most of
            today’s technologically advanced vehicles, guaranteed to use of
            quality parts or parts of equivalent standard. Invest in the latest
            diagnostic equipment. Employ highly skilled technicians . Represent
            real value for money Allow us pamper and show love to your car(s)
          </p>
        </Col>
      </Row>
    </Fragment>
  );
}

export default About;
