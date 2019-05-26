import React, { Component } from 'react'
import Twrap from '../Twrap/Twrap'

export default class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }
  // Working example with incremented counter using setState,use perferred solution below, instead.
  increment() {
    this.setState({
      // running setState, first arg: object that represents changed state
      count: this.state.count + 1 // property & value to be changed on state
    }, () => console.log('state updated:', this.state.count))
    // second arg: a callback func. that runs after set state. be sure to place any code that needs to run after setState in the callback, and not after the setState call -- see logs to see why.

    //NOTE: setState is an async call, so use the callback to avoid logging disparities when debugging. for example see the log below and the difference between both logs:
    console.log('prevState?:', this.state.count)
    // the disparity occurs because this log statement runs before setState is actually done making the update. So this logs the state that we just updated from. while the callback gives us the actual state after setState was called.
  }


  incrementFive() {

    // this demonstrates how react handles multiple calls to set state, but bundling all the changes together, so react sees all five of these calls and things, you want to increment by 1, because of this it will disregard the 4 other calls as it sees them as duplicates, therefore it deduces that you only want this update to occur once.  -- click incrementx5 and check console.

    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }




  // When ever we want to update state based on prevState, we are required to use a func instead of an object, like the working increment solution above.
  incrementPreferred() {
    console.log('good state:', this.state.count);

    // the first argument when setState depends on prevState, is a function that takes in prevState as the first argument and then returns a new state.
    this.setState((prevState, props) => ({
      // the second argument is the props object, and can also be passed in.
      count: prevState.count + 1 // never mutate state directly so we passed state to prevState to change it then return back as count into our state.
    }));
  }

  // Now if we try to see what happens when we run the above code 5 times we'll quickly see the difference:

  incrementFivePref() {

    // this demonstrates how react handles multiple calls to set state, but bundling all the changes together, so react sees all five of these calls and things, you want to increment by 1, because of this it will disregard the 4 other calls as it sees them as duplicates, therefore it deduces that you only want this update to occur once.  -- click incrementx5 and check console.

    this.incrementPreferred()
    this.incrementPreferred()
    this.incrementPreferred()
    this.incrementPreferred()
    this.incrementPreferred()
  }



  render() {
    return (
      <Twrap
        title="counter-setState"
        source="https://www.youtube.com/watch?v=uirRaVjRsf4"
      >
        <div>count - {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.incrementFive()}>Incrementx5</button>
        <button onClick={() => this.incrementPreferred()}>IncrementPref</button>
        <button onClick={() => this.incrementFivePref()}>IncrementPrefx5</button>
      </Twrap>
    )
  }
}
