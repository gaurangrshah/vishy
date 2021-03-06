import { Component } from 'react'

export class Counter2 extends Component {
  constructor(props) {
    super(props)
    // setup constructor to initialize state
    this.state = {
      //initialie state with the count property set to '0'
      count: 0
    }
  }

  incrementCount = () => {
    // handle incrementCount onClick
    this.setState(prevState => {
      // call this.setState, passing in prevState.
      return { count: prevState.count + 1 }
      // returning new state, for the count by adding 1 to prevState
    })
  }
  render() {
    const { count } = this.state;
    return this.props.renderCounter(count, this.incrementCount)
    //  passing in two arguments to our render props function
  }
}
export default Counter2
