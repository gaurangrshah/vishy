## HTTP POST REQUESTS:

----------------------------------

We'll start with a simple form, mainting the values from state, and a simple onChange and onSubmit handler.

```react
import React, { Component } from 'react'

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
    console.log(this.state);
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

```



currently when we submit we're logging to the console. Instead we'll want to implement axios to POST our data via an http request using axios:

```react
import axios from 'axios'
```



make the post request in the submit handler: 

```react
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
```

And with a successful post request we get back a status code of `201` and we can see our posted data has now been assigned a unique id: `101` 

![image-20190530024720517](http://ww3.sinaimg.cn/large/006tNc79ly1g3jcde5bppj30sk06egmv.jpg)