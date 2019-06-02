import React, { Component } from 'react';
import { StrapInfoToast } from '../../Toasts/strappd/StrapInfoToast';

/*
  At the core useState simply borrows, a bit of the functionality from a class component. This allows us to use state inside of functional components with the added benefit of sharing the functionality with other components.

  Below is an example of how state is executed in a class component:
*/

class ClassCounter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      isOpen: false,
    }
  }

  toggleIsOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
    setTimeout(() => {
      this.setState({
        isOpen: !this.state.isOpen,
      })
    }, 500);
  }

  incrementCount = () => {
    console.log('incrementing')
    this.setState({
      count: this.state.count + 1,
    })
    this.toggleIsOpen();
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <button onClick={this.incrementCount}>{this.state.count}</button>
        <StrapInfoToast toastHeader="count value" isOpen={this.state.isOpen} toastBody={this.state.count} />
      </div>
    )
  }
}

export default ClassCounter
