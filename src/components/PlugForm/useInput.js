import { useState } from "react";

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: e => setValue(e.target.value)
    }
  };
};
