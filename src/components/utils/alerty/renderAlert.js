import React, { useEffect, useRef } from 'react';
import { useToggle } from '../../utils/Toggle/useToggle';
import { StrapInfoToast } from '../../Toasts/strappd/StrapInfoToast';

/* Can be used to render alerts and handle alerts from any component,  */

const RenderAlert = ({ message, inputValue, type, isOpen, duration = 1800 }) => {

  const timer = useRef(null); /* created a ref to use for the timer. */
  const [toggle, handleToggle] = useToggle(isOpen)

  // console.log('MESSAGE::RenderAlert:', { message })

  useEffect(() => {
    console.log('preTimeOut', { toggle })

    if (toggle && duration) {
      // timer only applies when toggle is active
      timer.current = setTimeout(() => {
        // setups new timer using the ref timer.current
        handleToggle(!toggle) // handleToggle fires after timeout
        // console.log('timedOut', toggle)
      }, duration) // duration gets passed in.
    }

    return () => {
      /* cleanup -- removing timer */
      // console.log('cleared', toggle);
      clearTimeout(timer.current)
    }
    // removed all dependencies (only runs useEffect once when component mounts.)
  }, [])



  return (
    <StrapInfoToast
      isOpen={toggle} /* toggle sets toggle value for alert */
      toastHeader={type}
      /* passes in the type to the toast header where the appropriate icon is set. */
      toastBody={message} /* sets the body for the toast, using the value from message. */
      toastValue={inputValue || ''}
    />
  )
}


export { RenderAlert }



/**
*
* @param {*} message: [string]
* @param {*} inputValue: [value] passes in the currentvalue of the input being saved.
* @param {*} type: [string] adds appropriate class to toastHeader
* @param {*} isOpen: [bool] toggles the alert
* @param {*} duration: [num] defaults to 1800
* @param {*} timer: created as a ref to use to clear the setTimeout after an alert fires.
* @param {*} toggle: [bool] used as local state to handle when the alert fires.
*
*
* @returns {*} a toast notification, when isOpen is toggled
*/
