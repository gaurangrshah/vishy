import { useState } from "react";

export const useInput = (initialValue, callback) => {
  // callback will fire after input values have been updated.

  const [value, setValue] = useState(initialValue || '');

  return {
    value,
    reset: () => setValue(""),
    submit: (newValue) => {
      setValue(newValue)
      console.log('🔺 udpate:useInput', value)
      return (callback) ? callback() : null
    },
    bind: {
      value,
      onChange: e => setValue(e.target.value)
    }
  };
}

/*
  used by useForm, holder.js
*/
