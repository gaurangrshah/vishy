import React, { Component } from 'react';


/*
  At the core useState simply borrows, a bit of the functionality from a class component. This allows us to use state inside of functional components with the added benefit of sharing the functionality with other components.

  Below is an example of how state is executed in a class component:
*/

class ClassCounter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
  }

  incrementCount = () => {
    console.log('incrementing')
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>{this.state.count}</button>
      </div>
    )
  }
}

export default ClassCounter
