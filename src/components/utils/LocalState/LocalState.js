import { useState, useEffect } from 'react';


function useLocalStorageState(key, defaultValue) {
  const [state, setState] = useState(() => {
    let value
    try {
      value = JSON.parse(localStorage.getItem(key) || JSON.stringify(defaultValue))
    } catch (e) {
      value = defaultValue
    }
    return value
  })
  useEffect(
    () => {
      localStorage.setItem(key, state)
    },
    [key, state]
  )
  return [state, setState]
}


export default useLocalStorageState;
