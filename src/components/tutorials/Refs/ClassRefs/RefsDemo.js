import React, { Component } from 'react';
import Twrap from '../../../utils/Twrap/Twrap';



class RefsDemo extends Component {
  constructor(props) {
    super(props)

    // creates an inputRef from react.createref
    this.inputRef = React.createRef();

    // 2nd approach of creating refs (callback refs):
    this.cbRef = null; // defining a ref. as a property.
    // attaching ref to dom node. using  method assignment.
    this.setCbRef = element => {
      this.cbRef = element
    }
  }

  componentDidMount() {
    // to set focus on a referenced input:
    // this.inputRef.current.focus();
    // console.log(this.inputRef)


    // logging out what our ref is attached to.  // [object] {current: input}
    // console.log(this.inputRef);

    // this current property of type input offers methods and other objects related to the referenced element.


    // 2nd approach cbRef
    if (this.cbRef) {
      // --cbref gets attached when the component mounts.
      this.cbRef.focus();
      // -- cbref gets called with null when component unmounts.
    }

    // 3rd Approach
    // this.thirdInput.focus();

  }

  clickHandler = () => {

    const values = {
      st: this.inputRef.current.value,
      nd: this.cbRef.value,
      // rd: this.thirdInput.value
    }
    console.log(values)
  }


  render() {
    return (

      <Twrap
        title="refs"
        toggle={false}
        source="http://www.youtube.com/watch?v=FXa9mMTKOu8"
      >
        <input
          type="text"
          ref={this.inputRef}
        /><br />
        <input
          type="text"
          ref={this.setCbRef}
        /><br />
        <input
          type="text"
        // ref={input => { this.thirdInput = input }}
        /><br />
        <button onClick={() => this.clickHandler()}>Click</button>
        <span>uncomment this.thidInput to see the 3rd version...</span>
      </Twrap>

    )
  }
}


export default RefsDemo;
