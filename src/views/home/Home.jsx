import DclNavbar from "../../components/DclNavbar.jsx";
import Services from "../../components/services/Services.jsx";
import Brands from "../../components/brands/Brands.jsx";
import About from "../../components/about/About.jsx";
import { Container, Row, Col, Button } from "react-bootstrap";
import heroImage from "../../assets/images/vehicle.png";

import "@fortawesome/fontawesome-svg-core/styles.css";

import "./style.scss";

function Home() {
  return (
    <div className="App">
      <DclNavbar />

      <Row className=" pb-md-5 mb-md-5 pt-5 mt-4 d-flex d-md-none">
        <Col
          id="call-to-action"
          xs="12"
          md="6"
          className="mt-lg--5 mb-md-5  pb-5 pe-0 ps-0"
        >
          <div id="hero-content">
            <h1 className="mb-4">Your One Stop Automobile Shop</h1>

            <p className="mb-4">
              Reliable,Efficient and Proffesional Automobile Diagnostics and
              Repair Center.
            </p>

            <Button className="d-none d-md-inline-block" variant="dark">
              Book an Appointment now.
            </Button>
            <Button className="d-md-none" variant="light">
              Book an Appointment now.
            </Button>
          </div>
        </Col>
      </Row>
      <Container className="pt-0  pt-lg-5">
        <Row
          className="pt-5 pb-md-5 d-none  d-md-flex mb-md-5"
          id="hero-section"
        >
          <Col xs="12" md="6" className="mt-lg--5 mb-md-5 pt-5 pb-5">
            <div>
              <h1 className="mb-4">Your One Stop Automobile Shop</h1>

              <p className="mb-4">
                Reliable,Efficient and Proffesional Automobile Diagnostics and
                Repair Center.
              </p>

              <Button className="d-none d-md-inline-block" variant="dark">
                Book an Appointment now.
              </Button>
              <Button className="d-md-none" variant="light">
                Book an Appointment now.
              </Button>
            </div>
          </Col>
          <Col className="d-none d-md-block" xs="12" md="6">
            <div>
              <img src={heroImage} alt="" className="img-fluid w-100" />
            </div>
          </Col>
        </Row>

        <Services />

        <Brands />
      </Container>
      <Container fluid={true} className="">
        <About />
      </Container>
    </div>
  );
}

export default Home;
