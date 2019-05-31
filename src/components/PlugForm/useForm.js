import React from "react";
import { useInput } from '../utils/useInput/useInput';
import Twarp from '../utils/Twrap/Twrap';


export function NameForm(props) {
  const { value: firstName, bind: bindFirstName, reset: resetFirstName } = useInput('');
  const { value: lastName, bind: bindLastName, reset: resetLastName } = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitting Name ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  }
  return (
    <Twarp
      title="useForm-working"
    >

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

    </Twarp>
  );
}
