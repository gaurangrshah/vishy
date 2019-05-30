import React, { Component } from 'react'
import axios from 'axios';
import Twrap from '../../utils/Twrap/Twrap';

class Poster extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // initialize form field values on state.
      userId: '',
      title: '',
      body: '',
      success: null,
      error: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e) => {
    // destructuring the input name and value from the onClick event.
    const { name, value } = e.target;
    // sets the state from the event target. utitiling the name attribute from each input
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    // post request takes two args,
    // 1st: API Endpoint URL
    // 2nd: the data we want to send (this.state)
    axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
      .then(response => {
        this.setState({ success: true })
        console.log(response)
      }) // setState & log response if successful
      .catch(error => {
        this.setState({
          error: true
        })
        console.warn(error)
      }); // log error if unsuccessful

    this.setState({
      userId: '',
      title: '',
      body: '',

    }) // reset form
  }


  render() {
    const { userId, title, body, success, error } = this.state;
    return (
      <Twrap
        title="poster"
        source="http://www.youtube.com/watch?v=x9UEDRbLhJE"
      >
        <form onSubmit={this.handleSubmit}>
          <p>
            <input type="text" name="userId" value={userId} onChange={this.handleChange} />
          </p>
          <p>
            <input type="text" name="title" value={title} onChange={this.handleChange} />
          </p>
          <p>
            <input type="text" name="body" value={body} onChange={this.handleChange} />
          </p>
          <input type="submit" value="submit" />
          <p>
            {success ? "Thank You For Your Submission" : null}
          </p>
          <p>{error ? "Sorry something seems to have gone terribly wrong" : null}</p>
        </form>
      </Twrap>
    )
  }
}

export default Poster
