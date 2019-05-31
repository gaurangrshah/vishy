import React, { useState, useEffect } from "react";
import jsonVals from "../../data/form-vals.json";

const useForm = () => {
  const [vals, setVals] = useState(jsonVals.formVals);
  const updateVals = (newVals) => setVals({ newVals });
  return { vals, updateVals };
};

export default function Enput() {
  const { vals, updateVals } = useForm();
  console.log('jsonVals: ', vals);

  useEffect(() => {
    return () => {
      updateVals(vals)
    };
  }, [vals])

  const handleChange = (e) => {

    console.log(updateVals(vals))
  }
  return (
    <form>
      {console.log(vals)}
      {/* {vals.map((val, i) => {
        console.log(val.name)
        return (
          <input
            key={i}
            type="text"
            name={val.name}
            value={val.value}
            onChange={handleChange}
            placeholder={val.value}
          />
        );
      })} */}
    </form>
  );
}
