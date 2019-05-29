import React from 'react';
import useLocalStorageState from '../../utils/LocalState/LocalState';
import Twrap from '../../utils/Twrap/Twrap';


function LocalStorageState() {
  const [count, setCount] = useLocalStorageState('my-app:count', 0);
  return (
    <Twrap
      title="useLocalStorage-customHook"
      source="https://www.youtube.com/watch?v=yu3dnHrnps4"
    >
      <>
        <button onClick={() => setCount(0)}>clear</button>
        <button onClick={() => setCount(count + 1)}>{(count > 0) ? count + " (+1)" : "+1"}</button>
      </>
    </Twrap>
  )
}


export default LocalStorageState;
