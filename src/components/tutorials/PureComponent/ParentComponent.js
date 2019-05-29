import React, { Component } from 'react'
import Twarp from '../../utils/Twrap/Twrap';
import RegComp from './_RegularComponent'
import PureComp from './_PureComponent'
import MemoComp from './_MemoComp'


export class ParentComp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'This Guy'
    }
  }

  componentDidMount() {
    // uncomment to view renderin updates of children components.
    // setInterval(() => {
    // used to demonstrate re-render of child components
    this.setState({
      name: 'This Guy'
    })
    // }, 2000);
  }

  render() {
    console.log('Parent render');
    return (

      <Twarp
        title="PureComponent"
        source="https://www.youtube.com/watch?v=YCRuTT31qR0"
      >
        Parent Component<br />
        <span>check logs</span>
        <MemoComp name={this.state.name} />
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </Twarp>

    )
  }
}

export default ParentComp
