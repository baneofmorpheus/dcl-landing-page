import DclNavbar from "../../components/DclNavbar.jsx";
import Services from "../../components/services/Services.jsx";
import { Container, Row, Col, Button } from "react-bootstrap";

import "./style.css";

function Home() {
  return (
    <div className="App">
      <DclNavbar />
      <Container className="pt-5">
        <Row className="pt-5 pb-5 mb-5" id="hero-section">
          <Col className="mt-5 mb-5 pt-5 pb-5">
            <div>
              <h1 className="mb-4">Your One Stop Automobile Shop</h1>

              <p className="mb-4">Reliable,Efficient and Proffesional</p>

              <Button variant="primary">Book an Appointment now.</Button>
            </div>
          </Col>
        </Row>

        <Services />
      </Container>
    </div>
  );
}

export default Home;
