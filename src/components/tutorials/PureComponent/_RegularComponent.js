import React, { Component } from 'react'

export class RegComp extends Component {
  render() {
    console.log('Reg render')
    // this component will update everytime parent re-renders
    return (
      <div>
        regComp {this.props.name}
      </div>
    )
  }
}

export default RegComp


/*
  Regular Components do not implement the "shouldComponentUpdate" method.
  - returns true by default.
*/
