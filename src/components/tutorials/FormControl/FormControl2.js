import React, { useState } from 'react'
import Twrap from '../../utils/Twrap/Twrap'

const FormControl2 = () => {

  //TODO:
  // Local State is setting properly, form data is submitting, but need to bring in useState to load default values from local state.

  const [values, setValues] = useState({
    username: "",
    comments: "",
    topic: ""
  })

  const { username, comments, topic } = values;


  const handleChange = (e) => {
    // the change handler gives access to the event, from which we can access the target's value
    e.preventDefault();
    const { name, value } = e.target;
    console.log(`${name}: ${value}`)
    console.log(value)
    // we've destructured the name  value for e.target giving us access to both the property and the value  -- which we can use to update new state:


    setValues({
      // spreads out all the current values.
      ...values,
      // use the updated name value, to setState for the username property on state.
      [name]: value
    })
    // this causes a re - render to fire for this one item, which will then grab the new value from state and render it back in the element.
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);

    localStorage.setItem("form-data", JSON.stringify({ ...values }))
    console.log({ ...values });
    // since we've already setState with the updated form values with the onchange handler we can just grab the updated state when the users submits the form.
  }

  return (
    <Twrap
      title="form-control2"
      source=""
    >


      <form name="local-form"
        onSubmit={(e) => handleSubmit(e)}
      // the submit handler gets defined on the form tag, not on the submit button itself
      >
        <>
          <label>Username</label><br />
          <input type="text" name="username" value={username} onChange={(e) => handleChange(e)} /><br />
          {/* input field grabs value from state, and calls the onchange handler whenever the value changes. */}
        </>
        <>
          <label>Comments</label><br />
          <textarea name="comments" value={comments} cols="30" rows="10" onChange={(e) => handleChange(e)}></textarea><br />
        </>

        <>
          <label >Topic</label><br />
          <select name="topic" value={topic} onChange={(e) => handleChange(e)}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select><br />
        </>

        <input type="submit" />
        {/* the submit handler is defined in the form tag above. */}
      </form>


    </Twrap >
  )
}

export default FormControl2
