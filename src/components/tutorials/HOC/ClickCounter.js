import React, { Component } from 'react';
import Twrap from '../../utils/Twrap/Twrap';
import HoverCounter from './HoverCounter';
import { withCounter } from './withCounter'

class ClickCounter extends Component {

  render() {
    const { count, incrementCount, name } = this.props;
    // destructure count and incrementCount from props coming from HOC's state.
    return (
      <Twrap
        title="HOC"
        source="http://www.youtube.com/watch?v=B6aNv8nkUSw"
      >
        {/* using the destructured incrementCount & count from propsprops*/}
        <button onClick={incrementCount}>{name} Clicked {count} Times</button>
        {/* button with click handler that increments the count from HOC's state via props. */}
        <HoverCounter />
      </Twrap>
    )
  }
}

export default withCounter(ClickCounter, 10)
// added a second value to the wrapped component, to set the param for the incrementNum value.
