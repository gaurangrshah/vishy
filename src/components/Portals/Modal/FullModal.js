import React from 'react';
import StrapModalMod from './StrapModalMod';

export const FullStrapModal = (props) => {
  return (
    <StrapModalMod toggleButtonLabel={props.buttonLabel} modalTitle={props.modalTitle} isOpen={props.isOpen} hideButton={props.hideButton} buttonType={props.buttonType} handeSubmit={props.handleSubmit} className={"modal-full" || props.className}>

      {props.children}

    </StrapModalMod>
  )
}
