import React, { Component } from 'react';
import { withCounter } from './withCounter';

class HoverCounter extends Component {

  render() {

    const { count, incrementCount } = this.props;

    return (
      <div>
        <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
        <p>Hover Counter</p>
      </div>
    )
  }
}

export default withCounter(HoverCounter, 10)
// added a second value to the wrapped component, to set the param for the incrementNum value.
