import React from 'react';
import ReactDOM from 'react-dom';

const HeaderPortalWrapper = ({ children }) => {

  return ReactDOM.createPortal(
    <div style={{
      background: 'gray',
      position: 'fixed',
      zIndex: '2',
      bottom: '0'
    }}>
      {children}
    </div >,
    document.getElementById('header-root')
  )
}

export default HeaderPortalWrapper
