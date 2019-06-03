import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import ToastPortalWrapper from '../../Portals/ToastPortalWrapper';
import { useToggle } from '../../utils/Toggle/useToggle';

export default (props) => {

  const [toggle, handleToggle] = useToggle(true)

  return (
    (toggle || props.isOpen) ? (
      <ToastPortalWrapper id="console-toast">
        <Toast>
          <ToastHeader icon="info" onClick={(e) => handleToggle(e)}>
            {props.toastHeader}
          </ToastHeader>
          <ToastBody>
            {toggle && props.toastBody}
          </ToastBody>
        </Toast>
      </ToastPortalWrapper>
    ) : (
        null
      )
  );
};
