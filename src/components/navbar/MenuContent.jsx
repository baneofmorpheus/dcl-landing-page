import MenuClose from '../lottie/MenuClose.jsx';

import './style.scss';

function MenuContent() {
  return (
    <div id='menu-content'>
      <MenuClose />
      <div className='d-flex flex-column h-100 align-items-center justify-content-center'>
        <a className='mb-2' href='#a'>
          Home
        </a>
        <a className='mb-2' href='#a'>
          Services
        </a>
        <a className='mb-2' href='#a'>
          About
        </a>
        <a className='mb-2' href='#a'>
          Contact
        </a>
      </div>
    </div>
  );
}

export default MenuContent;
