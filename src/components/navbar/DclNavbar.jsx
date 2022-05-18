import { Container, Navbar } from 'react-bootstrap';
import logo from '../../assets/images/dcl-logo.png';
import './style.scss';
import MenuToggle from '../lottie/MenuToggle.jsx';

function DclNavbar() {
  return (
    <div className='App'>
      <Navbar fixed='top' className='pt-2 pb-2' bg='dark' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>
            <img id='logo-img' className='img-fluid' src={logo} alt='' />
          </Navbar.Brand>

          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          {/* <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link className='text-white me-5' href='#home'>
                Home
              </Nav.Link>
              <Nav.Link className='text-white me-5' href='#home'>
                Services
              </Nav.Link>
              <Nav.Link className='text-white me-5' href='#home'>
                About
              </Nav.Link>
              <Nav.Link className='text-white ' href='#home'>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse> */}
          <MenuToggle />
        </Container>
      </Navbar>
    </div>
  );
}

export default DclNavbar;
