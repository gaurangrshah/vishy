import React, { Component } from 'react';
import axios from 'axios';
// importing axios to handle requests
import PostList from './PostList'
import Twrap from '../../utils/Twrap/Twrap'



class Getter extends Component {
  constructor(props) {
    super(props)
    // initialize state
    this.state = {
      // initialize property "posts" default to empty array.
      posts: [],
      errorMsg: '',
      showPosts: false
    }

    this.renderPosts = this.renderPosts.bind(this);
  }

  renderPosts = () => {
    this.setState({
      showPosts: !this.state.showPosts
    })
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      // invoking the get method from axios, which takes one arg: the API endpoint for the request
      .then(response => { // if the response is successful, then gets called, and handles the response
        // console.log(response) // logging the repsonse to the console.
        this.setState({ posts: response.data.slice(0, 10) }) // setting state with data from request response. using slice to limit to the first 10 results.
      })
      .catch(error => { // if there is an error, handle error
        console.warn(error) // logging error to the console.
        this.setState({ errorMsg: 'error retrieving data' })
        //setting state with an error message if the request fails.
      })
  }


  render() {
    const { posts, showPosts, errorMsg } = this.state;
    // destructure the posts & errorMsg array from state.

    return (
      <Twrap
        title="getter"
        source="http://www.youtube.com/watch?v=NEYrSUM4Umw"
      >

        <button onClick={this.renderPosts}>List {posts.length} Posts</button>
        {/* {renderPosts ?  : null} */}
        {showPosts ? <PostList renderArr={posts} errorMsg={errorMsg} /> : null}
        {/* // if there is an error we can display the message here otherwise return null */}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </Twrap>
    )
  }
}

export default Getter
