import { useState } from 'react';


export const useStater = (initialValue = {}) => {
  const [state, setState] = useState(initialValue)

  const updateState = (newState) => setState(newState);

  return { state, updateState }
}


