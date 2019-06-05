import { useState } from "react";

export const useInput = (initialValue, callback) => {
  // targetField is the name of the field assigned the the input in the initialValue object.
  const [value, setValue] = useState(initialValue || '');

  // if (typeof initialValue === 'object') {
  // added support for if initial value is an object used in: loginwidget.js


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
  // } else {
  //   return {
  //     // original logic used in useForm.js
  //     value,
  //     reset: () => setValue(""),
  //     bind: {
  //       value,
  //       onChange: e => setValue(e.target.value)
  //     }
  //   };
  // }

}


/*
  used by useForm, holder.js
*/
