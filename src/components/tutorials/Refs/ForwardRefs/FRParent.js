import React, { Component } from 'react'
import Twarp from '../../../utils/Twrap/Twrap';
import FRInput from './FRInput'

class FRParent extends Component {
  constructor(props) {
    super(props)

    this.inputRef = React.createRef()
  }

  clickHandler = () => {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <Twarp
        title="Forward-refs"
        source="http://www.youtube.com/watch?v=RLWniwmfdq4"
      >
        <FRInput ref={this.inputRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </Twarp>
    )
  }
}

export default FRParent
