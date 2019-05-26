import React, { Component } from 'react'
import Twrap from '../Twrap/Twrap';



export const ChildComponent = (props) => {
  return (
    <Twrap
      title="methods-as-props"
    >
      <button onClick={props.greetHandler}>Greet Parent</button>
      {/* creating a button to handle our greetparent method from parent */}
      {/* using the greetHandler method to handle our event onClick */}

      {/* using an arrow func to pass params back to parent component */}
      <button onClick={() => props.greetHandler2('child')}>Greet Parent</button>

    </Twrap>
  )
}


export class ParentComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // creating a parentName on parent state to share with the child
      parentName: 'Parent'
    }

    //explictly binding the method to the component
    this.greetParent = this.greetParent.bind(this);

    //explictly binding the method to the component -- used for arrow demo
    this.greetFromChild = this.greetFromChild.bind(this);

  }

  greetParent() {
    // greet method defined in parent, using "this" binds it to component.
    console.log('Hello ' + this.state.parentName)
  }

  greetFromChild(childName) {
    // expecting a param from child when this gets called.
    // greet method defined in parent, using "this" binds it to component.
    console.log('Hello ' + this.state.parentName + ' from ' + childName)
    // logging childName that gets passed in from child via props.
  }

  render() {
    return (
      <ChildComponent greetHandler={this.greetParent} greetHandler2={this.greetFromChild} />
      // passing in our methods from parent to child as props -- methods to children are passed as references to the method on the parent
    )
  }
}


export default ParentComponent;
