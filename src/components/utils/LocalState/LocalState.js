import { useState, useEffect } from 'react';


function useLocalStorageState(key, defaultValue, input) {
  // defaultValue and input are optional, input appies form handling.
  const [state, setState] = useState(() => {
    let value
    try {
      value = JSON.parse(localStorage.getItem(key) || JSON.parse(localStorage.getItem(key)).defaultValue || JSON.stringify(defaultValue))
      // data in local storage? if not then set it from defaultValue
    } catch (e) {
      value = defaultValue
      // if any errors, value defaults to defaultValue
    }
    return value
  })

  useEffect(
    () => {
      localStorage.setItem(key, state)
    },
    [key, state]
  )
  if (input) {
    const formHandler = {
      reset: (e) => e.target.value = "",
      bind: {
        state,
        onChange: e => setState(e.target.value)
      }
    }
    return { state, setState, formHandler };
  } else {
    return [state, setState,]
  }


}


export default useLocalStorageState;
