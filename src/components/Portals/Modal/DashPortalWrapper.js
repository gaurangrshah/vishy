import React from 'react';
import ReactDOM from 'react-dom';
import StrapModal from '../Modal/StrapModal';

const DashPortalWrapper = (props) => {
  return ReactDOM.createPortal(
    <StrapModal
      className="modal-full"
      buttonColor="primary"
      toggleButtonLabel="Launch Dash"
      isOpen={''}
      modalTitle="Dashboard"
      hideButton={'' || true}
    >

      {props.children}

    </StrapModal>,
    document.getElementById('dash-root')
  )
}

export default DashPortalWrapper;
