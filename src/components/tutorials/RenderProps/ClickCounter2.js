import React, { Component } from 'react'

class ClickCounter2 extends Component {


  render() {
    // destructure count from state
    // const { count } = this.state;

    // destructure count & incrementCount from props, via render props
    const { count, incrementCount } = this.props
    return (
      <button onClick={incrementCount}>
        {/* onclick the button calls incrementCount */}
        clicked {count} times
        {/* the count value from state is output here */}
      </button>
    )
  }
}

export default ClickCounter2
