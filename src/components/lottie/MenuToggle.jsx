import React, { useState } from 'react';
import Lottie from 'react-lottie';
import * as cubeLottie from './cube.json';

function MenuToggle() {
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
    <div className='ms-auto' onClick={handleClick}>
      <Lottie
        options={defaultOptions}
        height={30}
        width={30}
        isStopped={isStopped}
      />
    </div>
  );
}

export default MenuToggle;
