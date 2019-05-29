import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // initialize state with a prop to toggle our error
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    // use getDerivedStateFromError to toggle our state when there is an error
    return {
      // when there's an error, set hasError to true.
      hasError: true
    }
  }

  componentDidCatch(error, info) {
    // we can use loggin services here to catch and log the errors
    console.log(error);
    console.log(info);
  }


  render() {
    if (this.state.hasError) {
      return (
        <p>
          <mark>Sorry</mark>
        </p>)
    }
    return this.props.children
  }
}

export default ErrorBoundary
