import React from 'react';
import ReactDOM from 'react-dom';

const PortalWrapper = ({ children }) => {

  return ReactDOM.createPortal(
    <div style={{
      background: 'gray',
      position: 'fixed',
      zIndex: '1',
    }}>
      {children}
    </div >,
    document.getElementById('header-root')
  )
}

export default PortalWrapper
