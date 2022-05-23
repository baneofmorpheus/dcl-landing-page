import React, { useState, useContext, useRef } from 'react';
import { GlobalContext } from '../../helpers/GlobalContext.js';
import Lottie from 'react-lottie';
import * as cubeLottie from './lottie/cube.json';
import * as closeLottie from './lottie/close.json';
import { Container, Navbar } from 'react-bootstrap';
import { Transition } from 'react-transition-group';
import { Link } from 'react-scroll';
import './style.scss';

export const MenuClose = () => {
  const [isStopped] = useState(false);
  const context = useContext(GlobalContext);
  const dispatch = context[1];

  const handleCloseClick = () => {
    dispatch({ type: 'TOGGLE_MENU', payload: false });
  };
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: closeLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div
      id='lottie-close'
      className='d-flex  cursor-pointer justify-content-end mt-3 me-5'
      onClick={handleCloseClick}
    >
      <Lottie
        options={defaultOptions}
        height={45}
        width={45}
        isStopped={isStopped}
      />
    </div>
  );
};

export const MenuOpen = () => {
  const [isStopped] = useState(false);
  const context = useContext(GlobalContext);
  const dispatch = context[1];

  const handleOpenClick = () => {
    dispatch({ type: 'TOGGLE_MENU', payload: true });
  };

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: cubeLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className='ms-auto cursor-pointer' onClick={handleOpenClick}>
      <Lottie
        options={defaultOptions}
        height={30}
        width={30}
        isStopped={isStopped}
      />
    </div>
  );
};
export const MenuContent = () => {
  const [store] = useContext(GlobalContext);
  const nodeRef = useRef(null);
  const context = useContext(GlobalContext);
  const dispatch = context[1];

  const handleCloseClick = () => {
    dispatch({ type: 'TOGGLE_MENU', payload: false });
  };
  const duration = 800;
  const defaultStyle = {
    transition: `visibility ${duration}ms ease-in-out,opacity ${duration}ms ease-in-out`,
    opacity: 0,
    visibility: 'visible',
    backgroundColor: '#000',
  };
  const transitionStyles = {
    entering: { opacity: 0 },
    entered: {
      opacity: 1,
      backgroundColor: '000',
      zIndex: 9999,
      visibility: 'visible',
    },
    exiting: { opacity: 1 },
    exited: { opacity: 0, zIndex: 1, visibility: 'hidden' },
  };
  return (
    <Transition nodeRef={nodeRef} in={store.menuOpen} timeout={300}>
      {(state) => (
        <Navbar
          // nodeRef={nodeRef}
          fixed='top'
          className='pt-2 pb-2'
          bg='dark'
          expand='lg'
        >
          <Container>
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
              // className={store.menuOpen ? 'd-block' : 'd-none'}

              id='menu-content'
            >
              <MenuClose />
              <div
                id='menu-container'
                className='d-flex flex-column  align-items-center justify-content-center'
              >
                <Link
                  to='home'
                  className='mb-4 cursor-pointer'
                  onClick={handleCloseClick}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Home
                </Link>

                <Link
                  to='services'
                  className='mb-4 cursor-pointer'
                  onClick={handleCloseClick}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Services
                </Link>
                <Link
                  to='contact-us'
                  className='mb-4 cursor-pointer'
                  onClick={handleCloseClick}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact
                </Link>
                <Link
                  to='about-us'
                  className='mb-4 cursor-pointer'
                  onClick={handleCloseClick}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  About
                </Link>
              </div>
            </div>
          </Container>
        </Navbar>
      )}
    </Transition>
  );
};
