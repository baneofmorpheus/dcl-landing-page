import { Container, Navbar } from 'react-bootstrap';
import logo from '../../assets/images/dcl-logo.png';
import './style.scss';
import { MenuOpen } from './Menu.jsx';

function DclNavbar() {
  return (
    <div className='App'>
      <Navbar fixed='top' className='pt-2 pb-2' bg='dark' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>
            <img id='logo-img' className='img-fluid' src={logo} alt='' />
          </Navbar.Brand>

          <MenuOpen />
        </Container>
      </Navbar>
    </div>
  );
}

export default DclNavbar;
