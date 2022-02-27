import DclNavbar from "../../components/DclNavbar.jsx";
import Services from "../../components/services/Services.jsx";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import heroImage from "../../assets/images/vehicle.png";
import mechanicImage from "../../assets/images/mechanic.jpeg";
import mechanic2Image from "../../assets/images/mechanic2.jpeg";
import mechanic3Image from "../../assets/images/mechanic3.jpeg";
import "./style.scss";

function Home() {
  return (
    <div className="App">
      <DclNavbar />

      {/* <Row className="mt-5 bg-dark">
        <Col className="mt-5" xs="12">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={mechanicImage}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={mechanic2Image}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={mechanic3Image}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row> */}

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
      </Container>
    </div>
  );
}

export default Home;
