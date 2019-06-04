import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// "https://reactstrap.github.io/components/modals/"








class LoginModalStrap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: props.isOpen || false,
      // toggle modal open via props.isOpen={bool}
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    // console.log('run toggle')
    this.setState(prevState => ({
      modal: !prevState.modal,
      // toggles whatever the current value is to the opposite.
    }));
  }

  loginProps = {
    color: "primary",
    onClick: this.props.handleSubmit
  }

  logoutProps = {
    color: "danger",
    onClick: this.props.handleLogout
  }


  render() {

    return (
      <>
        <Button
          color={this.props.buttonColor || "danger"}
          onClick={this.toggle}>{this.props.toggleButtonLabel || "Open Me"}
        </Button>
        <Modal
          isOpen={this.props.isOpen || this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader
            toggle={this.toggle}
          >
            {this.props.modalTitle}
          </ModalHeader>

          <ModalBody>
            {(!this.state.loggedIn) ? this.props.children : null}

          </ModalBody>

          <ModalFooter>

            {renderer(this.props.isLoggedIn, renderLogin, this.loginProps, renderLogout, this.logoutProps)}

          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default LoginModalStrap;



export const renderer = (condition, comp1, props1, comp2, props2) => {
  if (!condition) {
    return comp1(null, props1)
  } else {
    return comp2(null, props2)
  }
}



export const renderLogout = (logoutButtonTitle = "Logout", props) => {
  // pass in a falsy value to condition to hide button on eval.
  return (
    <Button
    // color="danger"
    // onClick={handleLogout}
    {...props}
    >
      {/* {console.log('logged IN')} */}
      {logoutButtonTitle || "Logout"}
    </Button >
  )
}


export const renderLogin = (loginButtonTitle = "login", props) => {
  // pass in a falsy value to condition to hide button on eval.

  return (
    <Button
    // color="primary"
    // onClick={handleSubmit}
    {...props}
    >

      Hello
      {/* {console.log('logged IN')} */}
      {loginButtonTitle || "Login"}
    </Button >
  )
}
