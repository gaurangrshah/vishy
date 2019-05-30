import React from 'react';
import ReactDOM from 'react-dom';

const PortalWrapper = ({ children }) => {

  return ReactDOM.createPortal(
    <div style={{
      background: 'gray',
      padding: '2em',
      position: 'fixed',
      width: '100%',
      height: '3%',
      zIndex: '1',
      overflow: 'scroll',
    }}>
      {children}
    </div >,
    document.getElementById('header-root')
  )
}

export default PortalWrapper
