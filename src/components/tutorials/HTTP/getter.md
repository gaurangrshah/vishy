# React HTTP

---------------------------------

React is a UI framework, so by definition React is not concerned with how you handle HTTP requests. It actually is not concerned with the server at all. React components simply read props & state and render the UI. 

Knowing this. we can understand that in order for React to render anything for us, we just need to ensure that data finds its way into either props, or state for our components. 

![](http://ww4.sinaimg.cn/large/006tNc79ly1g3j80c3ookj30pi0a0wew.jpg)



Since React is not concerned with how we make requests, we can utilize one of many HTTP libraries: We'll take a look at one of the more popular libraries called: [`axios`](https://github.com/axios/axios), there's many other libraries including the Fetch API which can also handle this just as well. 

install axios via:

```shell
yarn add axios
```

OR 

```shell
npm i axios
```

(depending on which package manage you're using).



We'll be using [JSONPlaceholder](https://jsonplaceholder.typicode.com)'s API, in order to fetch and render some dummy data. 

## Get Requests via Axios

We'll be making a `GET` request to `/posts` which will fetch an array of posts to display in the UI

Create a new component: <PostList/>

```react
import React, { Component } from 'react'

class PostList extends Component {
  render() {
    return (
      <div>
        List of Posts
      </div>
    )
  }
}

export default PostList
```



Let's get this rendering at the app root:

```react
<PostList />
```



this will simply output the string "List of Posts"



Now we can configure PostList, to handle our request:

1. import axios into <PostList/>

```react
import axios from 'axios'
```



2. Then let's intialize state with our expected `posts` array:

```react
  constructor(props) {
    super(props)
    // initialize state
    this.state = {
    // initialize property "posts" default to empty array.
       posts: []
    }
  }
```



3. Utilize axios to make a `GET` request to the JSONPlaceholder API:

```react
componentDidMount() {
  axios.get('https://jsonplaceholder.typicode.com/posts')
  // invoking the get method from axios, which takes one arg: the API endpoint for the request
}
```

> we place the request in the componentDIdMount lifecycle method, so that the request occurs when the component first finishes rendering and is only executed once during a components lifetime. 



Next we can handle the data that we get as a response:

```react
componentDidMount() {
  axios.get('https://jsonplaceholder.typicode.com/posts')
  // invoking the get method from axios, which takes one arg: the API endpoint for the request
    .then(response => { // if the response is successful, then gets called, and handles the response
    console.log(response) // logging the repsonse to the console. 
  })
    .catch(error=> { // if there is an error, handle error
    console.warn(error) // logging error to the console. 
  })
}
```

> We use` .then(response => {/* ... */}) `to handle our repsonse when its successful and `.catch(error => {/* ... */})` when our request fails, helps us handle the error. 

> We should be able to either our response or our error logged to the console: 
>
> ![image-20190530010049115](http://ww4.sinaimg.cn/large/006tNc79ly1g3j9aknri2j30s903vdgu.jpg)



SInce we are able to get back an successful response, we can take this data and assign it to the state property we initialized: `posts`;

```react
.then(response => { 
  this.setState({posts: response.data}) 
  // setting state with data from request response.
})
```



Next we can use this data to render to our UI: 

```react
render() {
    const { posts } = this.state;
	  // destructure the posts array from state. 
  
  return (
      <div>
        {
          posts.length // ensure there is atleast 1 post, if so...
          ?            
            // map thru the posts array and render a div with the post.title
            posts.map(post => <div key={post.id}>{post.title}</div>) 
					:
            // if array is empty then render `null` (nothing).            
            null
        }
      </div>
    )
  }
```





We can actually add the error message to state as a property as well:

```react
    this.state = {
 // initialize property "posts" default to empty array & errorMsg = empty string.
      posts: [],
      errorMsg: ''
    }
```



Then we can update the `catch(error)` to now setState with an error message if our request fails:

```react
      .catch(error => { 
        this.setState({ errorMsg: 'error retrieving data' })
        //setting state with an error message if the request fails.
      })
```



Finally we can conditionally render the errorMsg if one exists:

```react
render() {
  const { posts, errorMsg } = this.state;
  // destructure the posts & errorMsg array from state.

  return (
    <div>
      {
        posts.length 
         ?
          posts.map(post => <div key={post.id}>{post.title}</div>) 
         :
           null
       }
      {/* // if there is an error we can display the message here otherwise return null */}
      {errorMsg ? <div>{errorMsg}</div> : null}
    </div>
  )
}
```



now if we try an incorrect API endpoint we will see our error message rendered to the DOM:

![image-20190530012028353](http://ww3.sinaimg.cn/large/006tNc79ly1g3j9v1fhnkj30im0c0gmt.jpg)

