import React from 'react';
import DebugCheckbox from './DebugCheckbox';
import DebugHomebox from './DebugHomebox';
import DebugUserLinks from './DebugUserLinks';
import DebugUserInfo from './DebugUserInfo';
import { useSelector } from 'react-redux';

function DebugMenu() {
  const isDebug = useSelector((state) => state.debugCheckbox.value);

  //   return (
  //     <div>
  //       <div className='nodebug-container'>
  //         <DebugCheckbox />
  //         {isDebug && (<DebugUserLinks />)}
  //         {isDebug && (<DebugUserInfo />)}
  //       </div>
  //       <div className='nodebug-container2'>
  //         <DebugHomebox />
  //       </div>
  //     </div>
  //   );
  // }

  return isDebug ? (
    <div className='debug-container'>
      <DebugCheckbox />
      <DebugUserLinks />
      <DebugUserInfo />
      <DebugHomebox />
    </div>
  ) : (
    <div>
      <div className='nodebug-container'>
        <DebugCheckbox />
      </div>
      <div className='nodebug-container2'>
        <DebugHomebox />
      </div>
    </div>
  );
}

export default DebugMenu;
