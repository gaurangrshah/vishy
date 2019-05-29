import React, { Component } from 'react'
import Twrap from '../../../utils/Twrap/Twrap';


const MyInput = (props) => {
  // passing the inputRef into this component to render via props
  return (
    <input ref={props.inputRef} type="text" />
  )
}


const FuncedRef = () => {
  // intializing an empty inputRef
  let inputRef = null;

  const onClick = () => {
    inputRef.focus();
  }

  return (
    <>
      <>
        <span>My Input:</span><br /><MyInput inputRef={(input) => { inputRef = input }} />
        {/* attaching the initialized inputRef to this component-- then passing it down via props */}
      </><br />
      <>
        <input type="submit" value="Focus Input" onClick={onClick} /><br />
      </>
    </>
  )
}


export class KeyedRef extends Component {


  onClick = () => {
    // console.log(this.firstName.value);
    const values = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      age: this.age.value,
    }
    console.log(values);
  }

  onKeyUp = (target, e) => {
    // executes everytime the users let's go of a key.

    // we'll target the enter button being pressed, by its keycode = 13:
    if (e.keyCode === 13) {
      switch (target) {
        case 'firstName':
          this.lastName.focus();
          break
        case 'lastName':
          this.age.focus()
          break
        case 'age':
          this.submit.focus()
          break
        default:
          this.firstName.focus()
      }
    }

    // if (e.keycode === 13) {
    //   // using the lastName ref to set its focus when enter is clicked in firstName
    //   console.log('lucky 13');
    //   this.lastName.focus()
    // };
    // console.log(e.keyCode) // logs the keycode pressed for each key.
  }


  render() {
    return (
      <Twrap
        title="Refs-and-Dom"
        source="https://www.youtube.com/watch?v=tiytyGEodl0&t=1103s"
      >
        <FuncedRef />
        <>
          <span>First name:</span><br />
          <input type="text" ref={input => { this.firstName = input }} onKeyUp={this.onKeyUp.bind(this, 'firstName')} /><br />
        </>
        <>
          <span>Last name:</span><br />
          <input type="text" ref={input => { this.lastName = input }} onKeyUp={this.onKeyUp.bind(this, 'lastName')} /><br />
        </>
        <>
          <span>age:</span><br />
          <input type="text" ref={input => { this.age = input }} onKeyUp={this.onKeyUp.bind(this, 'age')} /> <br />
        </>
        <>
          <input type="submit" value="submit" onClick={this.onClick} ref={input => this.submit = input} />
        </>
      </Twrap>
    )
  }
}
export default KeyedRef
