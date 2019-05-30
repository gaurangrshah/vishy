import React, { Component } from 'react'
import axios from 'axios';

class Poster extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // initialize form field values on state.
      userId: '',
      title: '',
      body: ''
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
      .then(response => console.log(response)) // log response if successful
      .catch(error => console.warn(error)); // log error if unsuccessful
  }


  render() {
    const { userId, title, body } = this.state;
    return (
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
      </form>
    )
  }
}

export default Poster
