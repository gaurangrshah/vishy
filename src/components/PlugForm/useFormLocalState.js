import React from 'react';
import useLocalStorageState from '../utils/LocalState/LocalState';
// import { handleSaveToPC } from '../utils/downloadToJSON';

export function LocalNameForm() {

  const { state: firstName, formHandler: { bind: bindFirstName, reset: resetFirstName } } = useLocalStorageState('firstName', 'firstName', true);
  const { state: lastName, formHandler: { bind: bindLastName, reset: resetLastName } } = useLocalStorageState('lastName', 'lastName', true);


  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitting Name ${firstName} ${lastName}`);
    const values = {
      firstName, lastName
    }
    console.log(values);
    localStorage.setItem("form-data", JSON.stringify({ ...values }))
    // handleSaveToPC({ ...values });
    resetFirstName(e);
    resetLastName(e);

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
