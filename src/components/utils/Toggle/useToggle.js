import { useState } from 'react';

export const useToggle = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = (e) => {
    setToggle(!toggle);
  };
  return [toggle, handleToggle]
}


// pull into any componet you want to toggle, and dustructure:
// const [toggle, handleToggle] = useToggle();
