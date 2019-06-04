import { useState } from 'react';

export const useToggle = (defaultBool) => {
  const [toggle, setToggle] = useState(defaultBool || false)
  const handleToggle = (val) => {
    setToggle({ toggle: val });
  };
  return [toggle, handleToggle]
}


// pull into any componet you want to toggle, and dustructure:
// const [toggle, handleToggle] = useToggle();
