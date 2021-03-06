import React from "react";
import { useInput } from '../utils/useInput/useInput';


export default (props) => {
  const { value: firstName, bind: bindFirstName, reset: resetFirstName } = useInput('');
  const { value: lastName, bind: bindLastName, reset: resetLastName } = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitting Name ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" {...bindFirstName} />
      </label>
      <label>
        Last Name:
        <input type="text" {...bindLastName} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );

}


// using in StdModal.
