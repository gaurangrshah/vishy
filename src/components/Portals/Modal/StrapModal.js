import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// "https://reactstrap.github.io/components/modals/"

class StrapModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: props.isOpen || false, // toggle modal open via props.isOpen={bool}
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    // console.log('run toggle')
    this.setState(prevState => ({
      modal: !prevState.modal   // toggles whatever the current value is to the opposite.
    }));
  }

  render() {
    // standard reactStrap components, now with props for each atrribute.
    return (
      <>
        <Button
          color={this.props.buttonColor || "danger"}
          onClick={this.toggle}
        >
          {this.props.toggleButtonLabel || "Open Me"}
        </Button>
        <Modal
          isOpen={this.props.isOpen || this.state.modal}
          toggle={this.toggle}
          className={this.props.className}>
          <ModalHeader
            toggle={this.toggle}
          >
            {this.props.modalTitle}
          </ModalHeader>
          <ModalBody>
            {this.props.children}
          </ModalBody>
          <ModalFooter>
            {
              (!this.props.hideButton) &&
              <Button
                type={"submit" || null} // working, but not applying to form.
                color="primary"
                onClick={this.props.handleSubmit || this.toggle}
              >
                {this.props.modalButtonTitle || "Do Something"}
              </Button>
            }
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default StrapModal;


