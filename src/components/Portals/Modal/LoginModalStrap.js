import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { renderer, renderLogin, renderLogout } from '../../utils/renderHelpers/renderHelpers'
// "https://reactstrap.github.io/components/modals/"
// working use for handling full screen modal

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

            {renderer(!this.props.isLoggedIn, renderLogin, this.props.loginProps, renderLogout, this.props.logoutProps)}
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default LoginModalStrap;
