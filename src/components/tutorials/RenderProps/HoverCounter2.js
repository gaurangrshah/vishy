import React, { Component } from 'react'

class HoverCounter2 extends Component {

  render() {
    // destructure count from state
    // const { count } = this.state;

    // destructure count & incrementCount from props, via render props
    const { count, incrementCount } = this.props

    return (
      <h2 onMouseOver={incrementCount}>
        {/* onmouseover the h2 calls incrementCount */}
        Hovered {count} times
        {/* the count value from state is output here */}
      </h2 >
    )
  }
}

export default HoverCounter2
