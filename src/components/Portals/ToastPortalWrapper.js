import React from 'react';
import ReactDOM from 'react-dom';

const ToastPortalWrapper = (props) => {
  return ReactDOM.createPortal(
    <div style={{
      position: 'absolute',
      top: '0',
      right: '2em'
    }}>
      {props.children}
    </div >,
    document.getElementById('toast-root')
  )
}

export default ToastPortalWrapper;
