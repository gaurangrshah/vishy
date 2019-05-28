import React, { Component } from 'react'
import LifeB from './LifeB';

export default class LifeA extends Component {

  constructor(props) { /* Mount */
    super(props)

    this.state = {
      name: true
    }
    console.log('LifeA: Constructor');

  }

  // make sure to include the static keyword or else the method gets ignored
  static getDerivedStateFromProps(props, state) { /* Mount + Update */
    // must return a new representation of state or null

    console.log('LifeA: static derived');
    return null;
  }

  componentDidMount() { /* Mount */
    console.log('LifeA: cDidMount')
  }

  shouldComponentUpdate() { /* Update */
    console.log('LifeA: shouldUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) { /* Update */
    console.log('LifeA: snapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() { /* Update */
    console.log('LifeA: didUpdate');
  }

  changeState = () => {
    this.setState({
      name: !this.state.name
    })
  }

  render() { /* Mount + Update */
    console.log('LifeA: render')
    return (
      <div>
        LifeA
        <p>{this.state.name}</p>
        <p>see logs</p>
        <button onClick={this.changeState}>{this.state.name ? "This Guy" : "ThatGuy"}</button>
        <br />
        <LifeB />
      </div>
    )
  }
}
