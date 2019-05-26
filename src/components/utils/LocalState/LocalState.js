import React, { useState, useEffect } from 'react';
import Twrap from '../Twrap/Twrap'


function useLocalStorageState(key, defaultValue) {
  const [state, setState] = useState(() => {
    let value
    try {
      value = JSON.parse(window.localStorage.getItem(key, state) || JSON.stringify(defaultValue))
    } catch (e) {
      value = defaultValue
    }
    return value
  })
  useEffect(
    () => {
      window.localStorage.setItem(key, state)
    },
    [key, state]
  )
  return [state, setState]
}

function LocalStorageState() {
  const [count, setCount] = useLocalStorageState('my-app:count', 0);
  return (
    <Twrap
      title="useLocalStorage-customHook"
      source="https://www.youtube.com/watch?v=yu3dnHrnps4"
    >
      <button onClick={() => setCount(0)}>clear</button>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </Twrap>
  )
}


export default LocalStorageState;
