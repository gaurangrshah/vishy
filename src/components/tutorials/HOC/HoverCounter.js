import React, { Component } from 'react'

class HoverCounter extends Component {
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
      <div>
        <h2 onMouseOver={this.incrementCount}>Hovered {this.state.count} times</h2>
        <p>Hover Counter</p>
      </div>
    )
  }
}

export default HoverCounter
