import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import ToastPortalWrapper from '../../Portals/ToastPortalWrapper';

export const StrapInfoToast = (props) => {
  return (
    (props.isOpen) ? (
      <ToastPortalWrapper>
        <Toast>
          <ToastHeader icon="info">
            {props.toastHeader}
          </ToastHeader>
          <ToastBody>
            {props.toastBody}
          </ToastBody>
        </Toast>
      </ToastPortalWrapper>
    ) : (
        null
      )
  );
};
