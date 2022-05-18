import React, { useState } from 'react';
import Lottie from 'react-lottie';
import * as cubeLottie from './close.json';
import './style.scss';

function MenuClose() {
  const [isStopped, setStopped] = useState(false);
  // const [isPaused, setPaused] = useState(false);

  const handleClick = () => {
    console.log('handling click');

    if (isStopped) {
      setStopped(false);
    } else {
      setStopped(true);
    }
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
    <div
      id='lottie-close'
      className='d-flex justify-content-end mt-3 me-5'
      onClick={handleClick}
    >
      <Lottie
        options={defaultOptions}
        height={45}
        width={45}
        isStopped={isStopped}
      />
    </div>
  );
}

export default MenuClose;
