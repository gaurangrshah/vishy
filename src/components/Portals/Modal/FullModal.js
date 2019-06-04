import React from 'react';
import LoginModalStrap from './LoginModalStrap';

export const FullStrapModal = (props) => {
  return (
    <LoginModalStrap
      modalButtonTitle="Send Now"
      toggleButtonLabel={"Login" || props.buttonLabel}
      modalTitle={props.modalTitle}
      isOpen={props.isOpen}
      hideButton={props.hideButton}
      className={"modal-full" || props.className}
      loginButtonTitle="Login"
      handleSubmit={props.handleSubmit}
      logoutButtonTitle={props.logoutButtonTitle || "Logout"}
      handleLogout={props.handleLogout}
      isLoggedIn={props.isLoggedIn}
    >
      {props.children}
    </LoginModalStrap>
  )
}


/*

FullStrapMod, just builds out and passes down our forms props to StrapModalMod, which is handling the rendering logic for logged in and logged out users.

*/
