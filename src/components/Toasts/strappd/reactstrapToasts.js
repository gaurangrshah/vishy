import React from 'react';
import PropTypes from 'prop-types';
import { Toast, ToastBody, ToastHeader, Spinner } from 'reactstrap';

const strapToasts = (props) => {
  return (
    <div>
      <Toast>
        <ToastHeader icon="primary">
          Reactstrap
        </ToastHeader>
        <ToastBody>
          This is a toast with a primary icon — check it out!
        </ToastBody>
      </Toast>
      <Toast>
        <ToastHeader icon="secondary">
          Reactstrap
        </ToastHeader>
        <ToastBody>
          This is a toast with a secondary icon — check it out!
        </ToastBody>
      </Toast>
      <Toast>
        <ToastHeader icon="success">
          Reactstrap
        </ToastHeader>
        <ToastBody>
          This is a toast with a success icon — check it out!
        </ToastBody>
      </Toast>
      <Toast>
        <ToastHeader icon="danger">
          Reactstrap
        </ToastHeader>
        <ToastBody>
          This is a toast with a danger icon — check it out!
        </ToastBody>
      </Toast>
      <Toast>
        <ToastHeader icon="warning">
          Reactstrap
        </ToastHeader>
        <ToastBody>
          This is a toast with a warning icon — check it out!
        </ToastBody>
      </Toast>
      <Toast>
        <ToastHeader icon="info">
          Reactstrap
        </ToastHeader>
        <ToastBody>
          This is a toast with an info icon — check it out!
        </ToastBody>
      </Toast>
      <Toast>
        <ToastHeader icon="light">
          Reactstrap
        </ToastHeader>
        <ToastBody>
          This is a toast with a light icon — check it out!
        </ToastBody>
      </Toast>
      <Toast>
        <ToastHeader icon="dark">
          Reactstrap
        </ToastHeader>
        <ToastBody>
          This is a toast with a dark icon — check it out!
        </ToastBody>
      </Toast>
      <Toast>
        <ToastHeader icon={<Spinner size="sm" />}>
          Reactstrap
        </ToastHeader>
        <ToastBody>
          This is a toast with a custom icon — check it out!
        </ToastBody>
      </Toast>
    </div>
  );
};

// strapToasts.propTypes = {
//   className: PropTypes.string,
//   color: PropTypes.string, // default: 'success'
//   isOpen: PropTypes.bool,  // default: true
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   // Controls the transition of the toast fading in and out
//   // See Fade for more details
//   transition: PropTypes.shape(Fade.propTypes),
// }

export default strapToasts;
