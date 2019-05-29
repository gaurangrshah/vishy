import React, { Component } from 'react';
import Twrap from '../../utils/Twrap/Twrap';
import HoverCounter from './HoverCounter';

class ClickCounter extends Component {
  constructor(props) {
    super(props)
    // initialize state
    this.state = {
      // intialize count property on state.
      count: 0
    }
  }

  incrementCount = () => {
    //increment count from state by taking in prevState
    this.setState(prevState => {
      // and returning a new state object with the updated value from the counter.
      return { count: prevState.count + 1 }
    })
  }


  render() {
    return (
      <Twrap
        title="HOCpt1"
        source="http://www.youtube.com/watch?v=B6aNv8nkUSw"
      >
        <button onClick={this.incrementCount}>Clicked {this.state.count} Times</button>
        {/* button with click handler that increments the count from state */}
        <HoverCounter />
      </Twrap>
    )
  }
}

export default ClickCounter


/*
 * At the most basic level higher order components help us lift up state, without having to lift up state.
*/
