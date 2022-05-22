import DclNavbar from '../../components/navbar/DclNavbar.jsx';
import { MenuContent } from '../../components/navbar/Menu.jsx';
import Services from '../../components/services/Services.jsx';
import Brands from '../../components/brands/Brands.jsx';
import About from '../../components/about/About.jsx';
import Contact from '../../components/contact/Contact.jsx';
import { ContextWrapper } from '../../helpers/GlobalContext.js';
import Footer from '../../components/footer/Footer.jsx';
import { Container, Row, Col, Button } from 'react-bootstrap';
import heroImage from '../../assets/images/vehicle.png';

import '@fortawesome/fontawesome-svg-core/styles.css';

import './style.scss';

// #TODO start arranging animation
function Home() {
  return (
    <ContextWrapper>
      <div className=''>
        <DclNavbar />
        <div>
          <MenuContent />
        </div>
        <div id='hero-section' className='bg-dark pt-5 pb-5 mb-md-3 mb-5'>
          <Container className='pt-0 pt-md-5'>
            <Row className='pt-5 pb-md-5  mb-md-5'>
              <Col xs='12' lg='6' className='mt-lg--5 mb-md-5 pt-5 pb-5'>
                <div className='text-white text-center text-md-start'>
                  <h1 className='mb-4'>
                    Repair or service your vehicles without stress.
                  </h1>

                  <p className='mb-4'>
                    Reliable,Efficient and Proffesional Automobile Diagnostics
                    and Repair Center.
                  </p>

                  <Button className='d-none d-md-inline-block' variant='light'>
                    Book an Appointment now.
                  </Button>
                </div>
              </Col>
              <Col className=' ' xs='12' lg='6'>
                <div id='custom-card-parent' className='position-relative'>
                  <div className='p-3 position-absolute me-auto ms-auto d-flex align-items-center custom-card'>
                    <div className=' d-flex align-items-center   p-1'>
                      <img src={heroImage} alt='' className='img-fluid w-100' />
                    </div>
                  </div>
                  <div className=' p-3 position-absolute me-auto ms-auto d-flex align-items-center custom-card'>
                    <div className=' d-flex align-items-center   p-1'>
                      <img src={heroImage} alt='' className='img-fluid w-100' />
                    </div>
                  </div>
                  <div className=' p-3 position-absolute  me-auto ms-auto d-flex align-items-center custom-card'>
                    <div className=' d-flex align-items-center  p-1'>
                      <img src={heroImage} alt='' className='img-fluid w-100' />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Container className='pt-0  pt-lg-5'>
          <Services />

          <Brands />
        </Container>
        <Container fluid={true} className=''>
          <About />
        </Container>
        <Container>
          <Contact />
        </Container>
        <Footer />
      </div>
    </ContextWrapper>
  );
}

export default Home;
