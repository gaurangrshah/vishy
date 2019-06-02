import React, { Component } from 'react'

export class ClassCounterFinal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      name: ''
    }
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`
  }

  /*
    componentDidUpdate(prevProps, prevState) {
      console.log('updating document title')
      // this implementation causes unecessary re-renders
      document.title = `Clicked ${this.state.count} times`
    }
   */


  componentDidUpdate(prevProps, prevState) {
    // the preferred method is to only run the update after comparing currCount to prevCount
    // and only update when the values are different.
    if (prevState.count !== this.state.count) {
      console.log('updating document title')
    }
    document.title = `Clicked ${this.state.count} times`
  }

  render() {
    return (
      <div>
        <p>using componentDidUpdate to minimize unnecc. re-renders. </p>
        Name: <input type="text" value={this.state.name} onChange={e => {
          this.setState({ name: e.target.value })
        }} />

        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click {this.state.count} times</button>

      </div>
    )
  }
}

export default ClassCounterFinal
