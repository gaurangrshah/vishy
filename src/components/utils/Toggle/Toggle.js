import React, { Component } from "react";
import {Button } from 'reactstrap';

export default class Toggle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      on: this.props.toggle || false,
    };
  }

  handleKeyUp = (e) => {
    this.setState({
      on: !this.state.on
    });
  }


  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };

  render() {
    return (
      <>
        {this.state.on && <div>{this.props.children}</div>}
        {/* this method preforms the conditional check and renders if both items
        hold true. So only if the component has children and the state of
        "on: true" will we render the children. */}
        <Button onClick={this.toggle} onKeyUp={this.handleKeyUp}>{this.props.title}</Button>
      </>
    );
  }
}
