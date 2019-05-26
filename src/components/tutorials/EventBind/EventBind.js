import React, { Component } from 'react'
import Twrap from '../../utils/Twrap/Twrap'

export class EventBind extends Component {

  //creating state
  constructor(props) {
    super(props)

    this.clickHandler1 = this.clickHandler1.bind(this)
    // this is the binding that makes "Click 1" work by binding in the constructor

    this.state = {
      message: 'Hello'
    }
  }

  clickHandler1() {
    this.setState({
      message: (this.state.message === 'Hello') ? 'Goodbye' : 'Hello'
    })
  }

  clickHandler2 = () => {
    this.setState({
      message: (this.state.message === 'Hello') ? 'Goodbye' : 'Hello'
    })
  }

  render() {
    return (
      <Twrap
        title="event-binding"
        source="https://www.youtube.com/watch?v=kVWpBtRjkCk"
      >
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler1}>Click1</button>
        <button onClick={() => this.clickHandler1()}>Click2</button>
        <button onClick={this.clickHandler1.bind(this)}>Click3</button>

        {/*

        NOTE: in class components we have to be wary of the "this" keyword binding
          the above sytanx loses it's binding,  we want to explictly bind this which there are 2 ways to do:

            1. Click1: in the object constructor: this.clickHanlder = this.clickHandler.bind(this)
                -- most performant method of binding. also the official way in the docs.

            2. Click2: inline arrow function -- NOTE: that we are actually calling the func()
                -- not the most performant, but the easiest way to pass parameters into the handler

            3. Click3: bind in=line: {this.clickHandler.bind(this)} -- least performant.

       */}

        {/*
        There is another approach where we define our handle function using the arrow function syntax, and since it is a method on this class, we are able to retain the this binding to the class --- see: clickHandler2 above., it can be triggered easily with the event below:

          -- Also one of the suggested approaches from the react docs.

      */}

        <button onClick={this.clickHandler2}>Click4</button>

      </Twrap>
    )
  }
}
