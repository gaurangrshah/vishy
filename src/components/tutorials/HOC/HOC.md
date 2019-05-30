## Higher Order Components (HOC)

A pattern where a function takes a component as an argument and returns a new enhanced component. Most often used to share common functionalities within applications without having to repeat any code. 

> *At the most basic level higher order components help us lift up state, without having to lift up state - giivng us the abiltity to change state from any component wrapped with the HOC.* 

ex.

```react
const NewComponent = higherOrderCompoent(originalComponent)
```

> NewComponent is equal to the higherOrderComponent with the original component passed in as an agrument. 
>
> - Typically, a HOC will add additional data or functionality to a typical component.

The new (wrapped) component is often referred to as an EnhancedComponent.

> NewComponent = EnhancedComponent (i.e….)
>
> ```react
> const EnhancedComponent = higherOrderComponent(originalComponent)
> ```





Implement basic HOC pattern:

```react
import React from 'react';

const UpdatedComponent = (OriginalComponent) => {
// UpdatedComponent is an HOC and takes 1 argument:  OriginalComponent and returns NewComponent

  class NewComponent extends React.Component {
    // the NewComponent is a class component and must render something...
    render() {
    
      // we return the OriginalComponen from NewComponent's render method.
      return <OriginalComponent />
    }
  }
  
  // return the NewComponent from the initial arrow function where it was defined.
  return NewComponent
}

```

> This is the basic HOC pattern, but usually we use this pattern to add to the original component's data or functionality, we can do that by simply passing a prop to the component that wasn't originally available to it
>
> ```react
> return <OriginalComponent name='Teddy'/>
> ```
>
> we make sure to return the original component with any of the updated props needed for any functional enhancements. 



Now we can import this UpdatedComponent into another component to test it's functionality. 

```react
import UpdatedComponent from './withCounter'

class ClickCounter extends Component {
  //...
}

export default UpdatedComponent(ClickCounter)
```

> And then we have to ensure to wrap the exported OriginalComponent with UpdatedComponent.

This can be done with any component that needs to adopt this functionality or consume the data availble from the HOC. In our case we'll be sharing our prop: "name" that we passed in. 

In our counter example we are above to output the name to the button:

```react
{/* this.props.name grabs the name prop from the UpdatedComponent HOC */}
<button onClick={this.incrementCount}>{this.props.name}Clicked {this.state.count} Times</button>
```





Now instead we can use the counter functionality, and and leverage the HOC to handle that for us for both of our counters. We're going to grab the constructor and the click counter method from the class method and bring that into the HOC



```react
import React from 'react';

export const UpdatedComponent = (OriginalComponent) => {
  // UpdatedComponent is an HOC and takes 1 argument:  OriginalComponent and returns NewComponent
  class NewComponent extends React.Component {
    // the NewComponent is a class component and must render something...
    constructor(props) {
      // constructor from the counter component
      super(props)
      // initialize state
      this.state = {
        // intialize count property on state.
        count: 0
      }
    }

    // incrementCount from the counter component.
    incrementCount = () => {
      //increment count from state by taking in prevState
      this.setState(prevState => {
        // and returning a new state object with the updated value from the counter.
        return { count: prevState.count + 1 }
      })
    }

    render() {
      // we return the OriginalComponen from NewComponent's render method.
      return <OriginalComponent count={this.state.count} incrementCount={this.incrementCount} />
    }
  }
  // return the NewComponent from the initial arrow function where it was defined.
  return NewComponent
}

```

> NOTE: the following line:
>
> ```react
> return <OriginalComponent count={this.state.count} incrementCount={this.incrementCount} />
> ```
>
> we're giving the original component access to this components count property from state and the incrementCount method. 



Then in each component where we want to use this functionality and access the count property from state:

```react
render() {
  const {count, incrementCount} = this.props;
  return /* ... */
}
```

> destructure `count` and `incrementCount` from `props`. 

then remove references to `count` and `incrementCount`

```react
//<button onClick={this.incrementCount}>Clicked {this.state.count} Times</button>
<button onClick={incrementCount}>Clicked {count} Times</button>
```

> updates syntax to use `count` and `incrementCount` from the destructured props instead of referencing `this`.



This allows us to update the count variable from the state on the HOC from any component wrapped with this HOC. 

There is one caveat, we should always name the HOC with the functionality we woudl like it to add to our component so renaming our `UpdatedComponent`  HOC from the example to better reflect the functionality it adds: 

```react
// export const UpdatedComponent = (OriginalComponent) => { /* ... */ }
export const withCounter = (WrappedComponent) => { /* ... */ }
```

> we've also renamed `OriginalComponent` as `WrappedComponent`



In the same vain, we've used "NewComponent" to represent our wrapped component, that is usually referenced with the same name as the HOC but capitalized: `WithCounter`

```react
export const withCounter = (WrappedComponent) => {
  // withCounter is an HOC and takes 1 argument:  WrappedComponent and returns NewComponent
  class WithCounter extends React.Component {
    // the WithCounter is a class component and must render something...
    constructor(props) {
      // constructor from the counter component
      super(props)
      // initialize state
      this.state = {
        // intialize count property on state.
        count: 0
      }
    }

    // incrementCount from the counter component.
    incrementCount = () => {
      //increment count from state by taking in prevState
      this.setState(prevState => {
        // and returning a new state object with the updated value from the counter.
        return { count: prevState.count + 1 }
      })
    }

    render() {
      // we return the WrappedComponent from WithCounter's render method.
      return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} />
    }
  }
  // return the WithCounter from the initial arrow function where it was defined.
  return WithCounter
```



Finally, we'll make sure we're wrapping our components with: `WithCounter` instead of `UpdatedCounter` - changing both the import and export statements accordingly: 

```react
import { withCounter } from './withCounter';

export default withCounter(ClickCounter)
```



We also need to make one additional change to the functionality that takes into account any additional props that get passed into the rendered wrapped components in order to do that we have to make sure our HOC knows to handle those for us:

```react
 render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props} // using the spread operator to spread out any props from the WrappedComponent, before returning it.
        />
      );
    }
```





### Passing Props through the HOC

Now if were to include any other props to our rendered component, we'd be able to access them from our component as we would've normally. 

```react
<ClickCounter name="this guy" />
```

> and we should be able to access the name prop anywhere in <ClickCounter/>
>
> ```react
> const { count, incrementCount, name } = this.props;
> <button onClick={incrementCount}>{name} Clicked {count} Times</button>
> ```



### Passing Params into HOC

What if instead of incrementing the count by (+1), what if we wanted to allow the component to pass in the value we want to increment it by?

In order to do this we'll first add another param to the withCounter HOC: 

```react
// export const withCounter = (WrappedComponent) => {/* ... */}
export const withCounter = (WrappedComponent, incrementNum) => {/* ... */}
```



Then we can use the `incrementNum` param, to set our increment count:

```react
 // incrementCount from the counter component.
    incrementCount = () => {
      //increment count from state by taking in prevState
      this.setState(prevState => {
        // and returning a new state object with the updated value from the counter.
        return { count: prevState.count + (incrementNum || 1) }
				// setting a default value to '1' incase no value is provided
      })
    }
```



Now finally we have to pass in the arguments where we are wrapping the actual components: 

```react
export default withCounter(ClickCounter, 5)
// added a second value to the wrapped component, to set the param for the incrementNum value.

```

