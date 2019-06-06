import React from 'react';
import ReactDOM from 'react-dom';
import StrapModal from '../Modal/StrapModal';

const DashPortalWrapper = (props) => {
  return ReactDOM.createPortal(
    <StrapModal /* modal used for dashboad page.  */
      className="modal-full"
      buttonColor="primary"
      toggleButtonLabel="Launch Dash"
      isOpen={''} /* FIXME test/debug */
      modalTitle="Dashboard"
      hideButton={'' || true}
    >

      {props.children}
      {/* displays any children in the DashPortal wrapper currently implemented from:  */}

    </StrapModal>,
    document.getElementById('dash-root')
  )
}

export default DashPortalWrapper;
