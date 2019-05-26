import React, { Component } from 'react'
import Twrap from '../../utils/Twrap/Twrap'

export class ClassClick extends Component {
  clickHandler() {
    console.log('Clicked me');
  }
  render() {
    return (
      <Twrap
        title="class-click-handlers"
      >
        <button onClick={this.clickHandler}>Click Me</button>
      </Twrap>
    )
  }
}


export const ClickEvents = () => {

  const clickHandler = () => {
    console.log('button clicked');
  }

  return (
    <Twrap
      title="ClickEvents"
    >
      <Twrap
        title="func-click-handlers"
        source="https://www.youtube.com/watch?v=Znqv84xi8Vs"
      >

        <button onClick={clickHandler}>Click</button>
        {/* jsx click handlers are funcs that get passed in as click handlers or event handlers */}
        {/* NOTE: the event handler is a function AND NOT a function call()
      you don't need to call the function, as we only want it to execute when a user clicks */}
      </Twrap>
      <ClassClick />
    </Twrap>
  )
}


