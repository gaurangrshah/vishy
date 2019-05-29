import React, { Component } from 'react'
import Input from './ClassRefs';
import Twarp from '../../../utils/Twrap/Twrap';

class FocusInput extends Component {
  constructor(props) {
    super(props)
    // instantiating a new ref to apply to our input element.
    this.componentRef = React.createRef();
  }

  clickHandler = () => {
    // assigning the method from the child component to the click from parent
    this.componentRef.current.focusInput()
  }

  render() {
    return (
      <Twarp
        title="refs"
        source="http://www.youtube.com/watch?v=FXa9mMTKOu8"
      >
        <Input ref={this.componentRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </Twarp>
    )
  }
}

export default FocusInput
