import React, { Component } from 'react'
import Twrap from '../../utils/Twrap/Twrap'

export default class FormControl extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username: "",
      // initialize state for the values from the form
      comments: "",
      topic: ""

    }
  }

  handleChange(e) {
    // the change handler gives access to the event, from which we can access the target's value

    const { name, value } = e.target;
    // console.log(`${name}: ${value}`)
    console.log(value)
    // we've destructured the name  value for e.target giving us access to both the property and the value  -- which we can use to update new state:

    this.setState({
      // use the updated name value, to setState for the username property on state.
      [name]: value
    })
    // this causes a re-render to fire for this one item, which will then grab the new value from state and render it back in the element.

  }


  handleSubmit(e) {
    e.preventDefault();
    // console.log(e);
    console.log(this.state)
    // since we've already setState with the updated form values with the onchange handler we can just grab the updated state when the users submits the form.

  }

  render() {

    const { username, comments, topic } = this.state;

    return (
      <Twrap
        title="form-control"
        source="https://www.youtube.com/watch?v=7Vo_VCcWupQ"
      >


        <form
          onSubmit={this.handleSubmit.bind(this)}
        // the submit handler gets defined on the form tag, not on the submit button itself
        >
          <>
            <label>Username</label><br />
            <input type="text" name="username" value={username} onChange={this.handleChange.bind(this)} /><br />
            {/* input field grabs value from state, and calls the onchange handler whenever the value changes. */}
          </>
          <>
            <label>Comments</label><br />
            <textarea name="comments" value={comments} cols="30" rows="10" onChange={this.handleChange.bind(this)}></textarea><br />
          </>

          <>
            <label >Topic</label><br />
            <select name="topic" value={topic} onChange={this.handleChange.bind(this)}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select><br />
          </>

          <input type="submit" />
          {/* the submit handler is defined in the form tag above. */}
        </form>

        {/* <p>{localState}</p> */}


      </Twrap >
    )
  }
}


/*
  Input elements have value props/attributes. we re able to listen for changes on these values with the onChange prop which takes a function. This allows us store the value in state using setState, and listen for changes to that state via the onChange handler. When the value changes a change event is fired off, then the value is assigned to the new state using setState. Which fires off a render method and the new value from state is displayed back inside the input. A controlled element reads its value from state, and can update that value in state.
*/
