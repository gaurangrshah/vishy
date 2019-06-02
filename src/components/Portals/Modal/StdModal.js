import React from 'react';
import StrapModal from './StrapModal';

export const StdModal = (props) => {
  return (
    <StrapModal toggleButtonLabel={props.buttonLabel} modalTitle={props.modalTitle} isOpen={props.isOpen} hideButton={props.hideButton} buttonType={props.buttonType} handeSubmit={props.handleSubmit}>

      {props.children}

    </StrapModal>
  )
}
