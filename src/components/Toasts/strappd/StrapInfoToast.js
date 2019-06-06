import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import ToastPortalWrapper from '../../Portals/ToastPortalWrapper';

/**
*
*
* @param {*} props.toastHeader: handlesicon color based on message type.
* @param {*} props.toastValue: displays value from submitted input
* @param {*} props.toastBody: displays message
* @param {*} props.isOpen: handles togggle functionality.
*
* @returns {*} HOC w/ notification mounted to the toast-root via (ToastPortalWrapper)
*/


export const StrapInfoToast = (props) => {

  const { toastHeader, toastBody = '', toastValue = '', isOpen } = props
  // console.log('🦅displayToast', { toastHeader, toastBody, isOpen });


  return (
    <ToastPortalWrapper>
      <Toast draggable="true" isOpen={isOpen}>
        <ToastHeader icon={toastHeader}>
          {toastHeader}
        </ToastHeader>
        <ToastBody>
          {toastBody} {toastValue}
        </ToastBody>
      </Toast>
    </ToastPortalWrapper>
  )
}



