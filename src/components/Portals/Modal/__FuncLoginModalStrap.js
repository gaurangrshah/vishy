import React from 'react'
import { useToggle } from '../../utils/Toggle/useToggle'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { renderer, renderLogin, renderLogout } from '../../utils/renderHelpers/renderHelpers';
// "https://reactstrap.github.io/components/modals/"


function FuncLoginModalStrap(props) {

  const [toggle, handleToggle] = useToggle(false);

  console.log(toggle)

  const loginProps = {
    color: "primary",
    onClick: props.handleSubmit
  }

  const logoutProps = {
    color: "danger",
    onClick: props.handleLogout
  }

  return (
    <>
      <Button
        color={props.buttonColor || "danger"}
        onClick={() => handleToggle(!toggle)}>{props.toggleButtonLabel || "Open Me"}
      </Button>
      <Modal
        isOpen={props.isOpen || toggle}
        toggle={() => handleToggle(!toggle)}
        className={props.className}
      >
        <ModalHeader
          toggle={() => handleToggle(!toggle)}
        >
          {props.modalTitle}
        </ModalHeader>

        <ModalBody>
          {(toggle) ? props.children : null}

        </ModalBody>

        <ModalFooter>

          {renderer(!props.isLoggedIn, renderLogout, logoutProps, renderLogin, loginProps)}

        </ModalFooter>
      </Modal>
    </>
  );
}


export default FuncLoginModalStrap;
