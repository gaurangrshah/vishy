import React, { Component } from "react";

export default class Toggle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      on: this.props.toggle || false
    };
  }




  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };

  render() {
    return (
      <>
        {this.state.on && <h2>{this.props.children}</h2>}
        {/* this method preforms the conditional check and renders if both items
        hold true. So only if the component has children and the state of
        "on: true" will we render the children. */}
        <button onClick={this.toggle}>{this.props.title}</button>
      </>
    );
  }
}
