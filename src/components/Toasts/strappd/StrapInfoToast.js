import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import ToastPortalWrapper from '../../Portals/ToastPortalWrapper';

export const StrapInfoToast = (props) => {


  const { toastHeader = 'info', toastBody = '', isOpen } = props
  console.log('🦅displayToast', { toastHeader, toastBody });
  return (
    <ToastPortalWrapper>
      <Toast draggable="true" isOpen={isOpen}>
        <ToastHeader icon="info">
          {toastHeader}
        </ToastHeader>
        <ToastBody>
          {toastBody}
        </ToastBody>
      </Toast>
    </ToastPortalWrapper>
  )
}

