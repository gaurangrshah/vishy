import React from 'react';

export const withCounter = (WrappedComponent, incrementNum) => {
  // withCounter is an HOC and takes 1 argument:  WrappedComponent and returns NewComponent
  // passing in a second argument: incrementNum to show how HOC's can accept params, used to set the increment value of our counter.

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
        return { count: prevState.count + (incrementNum || 1) }
        // setting a default value to '1' incase no value is provided
      })
    }

    render() {
      // we return the WrappedComponent from WithCounter's render method.
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props} // using the spread operator to spread out any props from the WrappedComponent, before returning it.
        />
      );
    }
  }
  // return the WithCounter from the initial arrow function where it was defined.
  return WithCounter
}
