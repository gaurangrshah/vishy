import React, { Component } from 'react'
import LifeA from './Lives/LifeA';
import Twrap from '../../utils/Twrap/Twrap';

export default class Lifecycles extends Component {
  render() {
    return (
      <Twrap
        title="lifecycles"
        source="www.youtube.com/watch?v=qnN_FuFNq2g"
      >
        <LifeA />
      </Twrap>
    )
  }
}


/*
  * Lifecycle Methods:
    - Mounting: right before a component instance is rendered to the DOM.
      -- Available Methods: constructor, static getDerivedStateFromProps, render, componentDidMount


        * Constructor(props) --   gets called whenever a new component is created.
          - used to initialize state or binding event handlers to the class component.
          - No side-effects in constructor, e.g.: no Http requests in the constructor.
          - must call super - which calls the base class constructor.
          -- only after we pass props into super do we have access to "this.props" in any component
          --- NOTE: constructor is the ONLY place where wou can change or set state by directly overwriting "this.state" -- must use "this.setState()" outside of the constructor.


        * static getDerivedStateFromProps(props, state) -- a static method, where state relies on changes to props over time.
          - since this is a static method it does not have access to the "this" keyword.
          -- that means we cannot call this.setState() in this method.
          --- NOTE: must return an object that represents the new state.
          -- no sideFX allowed. -- eg. no http requests, or fetching data.


        * render() -- only required method for a class component. reads props and states and returns jsx.
          - a pure function, should always return the same results given the same input.
          -- NOTE: DO NOT change state, interact with DOM, or make any ajax calls inside render.
          -- an children components being rendered, will have their lifecycle methods executed also.

        *componentDidMount() -- invoked immediately after a component and all of it's children have been rendered to the DOM.
          - This is where sideEffects should occur. Interact with DOM, perform ajax calls, load data, etc.
          -- perform initializations that require DOM nodes
          -- make requests that load data.

    - Updating: occurs on re-render either when props or state are updated.
      -- Available Methods: static getDerivedStateFromPops, shouldComponetUpdate, render, getSnapshotBeforeUpdate, componentDidUpdate

        * static getDerivedStateFromProps(props, state) - called everytime the component is re-rendered.
          -- used to set the state based on changes to the props.
          -- DO NOT cause any side effects.

        * shouldComponentUpdate(props, state) - recieves updated props & state, and dictates whether the component should update or not based on changes.
          -- by default class components will re-render whenever the props their recieve or their state changes.
          -- can prevent that default rendering behavior by returning false.
          -- can compare existing state and props to updated (nextState, nextProps) state and props.
          -- after comparison, returns true or false, true will case a re-render.
          -- DO NOT cause any side effects, or data requests, no setState from here either.

        * render - the only required method - reads, props & state and returns UI (jsx)
          - No state changes or DOM interactions, or ajax calls from here.

        * getSnapshotBeforeUpdate(prevProps, prevState) - takes in prevProps & prevState - called right before changes to the virtual DOM are reflected to the DOM.
          - used to capture information from the DOM. eg. capture user scroll position, and maintain that position after update -- allowing to perform calculations on that data.
          -- will either return null or return a value , returned value is passed as the third parameter to the next method.
          -- used to read the current DOM state and returns a value or null.

        * componentDidUpdate(prevProps, prevState, snapshot) - gets called after the render is finished in the re-render cycles meaning that the component and all its children have rendered to the DOM after an update.
          -- can utilize sideFX such as requests - but must compare the prevProps with newProps and then decide whether or not to make the request.

    - Unmounting: right before a component is removed from the DOM.
      -- Available Methods: componentWillUnmount

        * componentWillUnmount() - invoked immediately before a component is unmounted and destroyed.
          -- used to clean up tasks such as: cancelling network requests, removing event handlers, cancelling any subscriptions, and invaludating timers.
          -- DO NOT call setState - this component will not be re-rendered after unMounting.

    - Error Handling: errors during rendering, in a lifecycle or in the constructor of any child.
      -- Available Methods: static getDerivedStateFromError, componentDidCatch

        * static getDerivedStateFromError(error)
        * componentDidCatch(error, info)
          -- both get called when there is an error, either during rendering or in a lifecycle method or in the constructor of any child component.
*/
