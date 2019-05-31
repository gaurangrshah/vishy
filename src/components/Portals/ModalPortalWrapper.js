import React from 'react';
import ReactDOM from 'react-dom';

const ModalPortalWrapper = (props) => {
  return ReactDOM.createPortal(
    <div style={{
      background: props.bckg || 'gray',
      position: 'absolute',
      margin: '0 auto',
      width: '60%',
      height: '50%',
      zIndex: '1',
    }}>
      {props.children}
    </div >,
    document.getElementById('modal-root')
  )
}

export default ModalPortalWrapper;
