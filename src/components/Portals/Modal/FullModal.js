import React from 'react';
import LoginModalStrap from './LoginModalStrap';

export const FullStrapModal = (props) => {
  return (
    <LoginModalStrap
      isOpen={props.isOpen || false}
      modalTitle={props.modalTitle}
      modalButtonTitle="Send Now"
      toggleButtonLabel={"Login" || props.buttonLabel}
      className={props.className}
      isLoggedIn={props.isLoggedIn}
      loginButtonTitle="Login"
      logoutButtonTitle={props.logoutButtonTitle || "Logout"}
      loginProps={props.loginProps}
      logoutProps={props.logoutProps}
      hideButton={props.hideButton}
    >
      {props.children}
    </LoginModalStrap>
  )
}


/*

FullStrapMod, just builds out and passes down our forms props to StrapModalMod, which is handling the rendering logic for logged in and logged out users.

*/
