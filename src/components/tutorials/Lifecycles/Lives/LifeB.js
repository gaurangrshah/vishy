import React, { Component } from 'react'

export default class LifeB extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'ThisGuy'
    }
    console.log('LifeB: Constructor');
  }


  // make sure to include the static keyword or else the method gets ignored
  static getDerivedStateFromProps(props, state) {
    // must return a new representation of state or null
    console.log('LifeB: static derived');
    return null;
  }

  componentDidMount() {
    console.log('LifeB: cDidMount')
  }

  shouldComponentUpdate() { /* Update */
    console.log('LifeB: shouldUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) { /* Update */
    console.log('LifeB: snapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() { /* Update */
    console.log('LifeB: didUpdate');
  }

  render() {
    console.log('LifeB: render')
    return (
      <div>
        LifeB
        <p>see logs</p>
      </div>
    )
  }
}
