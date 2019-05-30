## RenderProps

Offers an alternative way to share functionality between components. The term `render prop` refers to a <u>technique for sharing code</u> between React components using a <u>prop whose value is a function</u>. 

Implementing the RenderProps Pattern.

Creater a user component: 

```react
import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <div>
        Teddy
      </div>
    )
  }
}

export default User

```



Render the user Component: 

```react
<User name="Tornado"/>
```

> We've also passed in a prop: `name`  = "Tornado"



Back in <User/>  - render name from props:

```react
return (
      <div>
        {this.props.name || "User name"}
      </div>
    )
```

> we've also added some default props incase no name gets passed in. 





Let's go one step further and pass in a function that will return the name of the user. 

```react
<User name={() => 'Tornado'} />
```

> using an arrow function allows us to retain a reference to the component where the function was called.
>
> We can now use this to once again refactor the return statement in <User/> to render the name returned by the function. 
>
> ```react
> return (
>       <div>
>         {this.props.name() || "User name"}
>       </div>
>     )
> ```
>
> **NOTE**: that we're calling the function `name()` in line from props, which will then return the username, retaining a reference to where it was called from. 



Next, we'll pass in params to the function assigned to the name prop, based on the params that get passed in we'll conditionally render our elements:

```react
<User name={(isLoggedIn) => 'Tornado'} />
```

> here we're passing in `isLoggedIn` as a param, based on the value of `isLoggedIn` we can conditionally display a message to the user. 

```react
<User name={(isLoggedIn) => isLoggedIn ? 'Hello Tornado' : 'Hello Guest'} />
```

> we've updated the logic to check if the value of `isLoggedIn` is true or false, if true we return: 'Hello Tornado' and when false we return: 'Hello Guest'.

This means our name prop in the user component can now accept an argument:

```react
{this.props.name(true) || "User name"}
```

> we've currently just passed in true, to signify that the user is logged in. 

Now let's change the prop to be called `render` and make sure we're using that in our component as well.

```react
// <User name={(isLoggedIn) => isLoggedIn ? 'Hello Tornado' : 'Hello Guest'} />
<User render={(isLoggedIn) => isLoggedIn ? 'Hello Tornado' : 'Hello Guest'} />
```

```react
// {this.props.name(false) || "User name"}
{this.props.render(false) || "User name"}
```



Now we've demonstrated the first part of `render prop` the ability to have a prop whose value is a function. In this case our function helps us dictate what gets output to the user. 



Next let's take a look at how we can share code between components using `render props`:

We'll create a new file, called: `Counter.js` that will house the shared functionality we want to share between our components in our case the state which contains the `count` value, and the incrementCount method that we are using in both of our components. We'll centralie that code in <Counter/>:

```react
import React, { Component } from 'react'

export class Counter extends Component {
  constructor(props) {
    super(props)
    // setup constructor to initialize state
    this.state = {
      //initialie state with the count property set to '0'
      count: 0
    }
  }

  incrementCount = () => {
    // handle incrementCount onClick
    this.setState(prevState => {
      // call this.setState, passing in prevState.
      return { count: prevState.count + 1 }
      // returning new state, for the count by adding 1 to prevState
    })
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Counter
```

> we can also remove the constructor with the state and the incrementCount method from both original counter components. 

> **NOTE**: that we haven't added anything to the JSX in the counter component. instead we'll want to handle what gets' rendered through `render props` we do that by by assigning the arguments we want to apply in the <Counter/> render method:
>
> ```react
>  render() {
>     return (
>       <div>
>         {this.props.render(this.state.count, this.incrementCount)}
>         {/* passing in two arguments to our render props function */}
>       </div>
>     )
>   }
> ```
>
> 

Now when we render the new counter component we can pass in the `render props` accordingly:

```react
          <Counter
            render={(count, incrementCount) => (
              // inside render props, our function takes in our two arguments, count & incrementCount
              <ClickCounter2 count={count} incrementCount={incrementCount} />
            )}
          />
```

> We've passed in the `count` & `incrementCount` as props, then we use the same function to return our <ClickCounter2/> component with the ability to pass down the props into it for the newly rendered component to use. 



We can render as many counters as we need to allow any components rendered by <Counter/> to use it's functionality. 

```react
					<Counter
            render={(count, incrementCount) => (
              <HoverCounter2 count={count} incrementCount={incrementCount} />
            )}
          />
```





We'll want to update our <ClickCounter2/> to be able to handle count & incrementCount from props rather than from state.

```react
    // const { count } = this.state;

    // destructure count & incrementCount from props, via render props
    const { count, incrementCount } = this.props
   
    return (
      
      // <h2 onMouseOver={this.incrementCount}>
      <h2 onMouseOver={incrementCount}>
        Hovered {count} times
      </h2 >
      
    )
```



Now we're able to share the same counter functionalities between two componets whose behavior is similar. but have different implementations to it altogether. 



### Rendering Props using `props.children`

In order to see this, we'll duplicate <Counter2 /> to <Counter3 />2

Then in this method we can pass in the function in between the opening and closing tags of the <Counter3/> 

```react
<Counter3>

{(count, incrementCount) => (
    // inside render props, our function takes in our two arguments, count & incrementCount
    <ClickCounter2 count={count} incrementCount={incrementCount} />
  )}

</Counter3>
```

> instead of accessing our function via `props.render`, it is now available to us via `props.children`

```react
render() {
  return (
    <div>
      {/* {this.props.render(this.state.count, this.incrementCount)} */}
      {this.props.chlidren(this.state.count, this.incrementCount)}
      {/* passing in two arguments to our render children function */}
    </div>
  )
}
```



And this should still give our component the same behavior and functionality. 



### Rendering `props.children` as a function

duplicate <Counter2/>  to  <Counter3/> We'll start by defining the function where we render <Counter3/>:

```react
<Counter3>
  {(count, incrementCount) => (
    <ClickCounter2
      count={count}
      incrementCount={incrementCount}
      />
  )}
</Counter3>
```

> In this implementation instead of passing the function as props, we're defining in between the opening and closing brackets of the <Counter3/> component. This allows us to use `props.children` from inside the <Counter3/> to render the result of our function call:

```react
render() {
    const { count } = this.state;
    return (
      this.props.children(count, this.incrementCount)
    )
    //  passing in two arguments to our render children as parameters to a function
  }
```

> Here we've utitlized `this.props.children` passing in the arguments from the <Counter3/> state and the incrementCount method which increments the count variable assigned in state.

The result is that we get <ClickCounter2/> rendered wrapped in the functionality provided by <Counter3/> to increment & maintain the count value on state. 



**NOTE**: since we've duplicated <Counter2/> to create <Counter3/> we are still able to render <HoverCounter2/> wrapped in the similar functionality of <Counter2/> while still passing the function as a prop and using `this.props.render` from <Counter2/> to handle the function instead. 



<Counter2/> returning enhanced <HoverCounter2>:

```react
<Counter2
  renderCounter={(count, incrementCount) => (
    <HoverCounter2
      count={count}
      incrementCount={incrementCount}
      />
  )}
  />
```

> **Note:** we've changed the prop name to "renderCounter", to better signify what it does. 

<Counter2/>  rendering the function results via `props.renderCounter`:

```react
render() {
    const { count } = this.state;
    return this.props.renderCounter(count, this.incrementCount)
    //  passing in two arguments to our render props function
  }
```

> as a comparison `this.props.renderCounter()` functions the same as `this.props.children()` both will handle the data in the same way, just a matter of preference in which syntax to use. 