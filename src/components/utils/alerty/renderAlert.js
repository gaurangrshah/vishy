import React, { useEffect, useRef } from 'react';
import { useToggle } from '../../utils/Toggle/useToggle';
import { StrapInfoToast } from '../../Toasts/strappd/StrapInfoToast';

const RenderAlert = ({ message, type = 'info', duration = 1800 }) => {

  const timer = useRef(null); /* created a ref to use for the timer. */
  const [toggle, handleToggle] = useToggle(true)

  useEffect(() => {
    console.log('preTimeOut', toggle)

    if (toggle && duration) {
      // timer only applies when toggle is active
      timer.current = setTimeout(() => {
        // setups new timer using the ref timer.current
        handleToggle(!toggle) // handleToggle fires after timeout
        console.log('timedOut', toggle)
      }, duration) // duration gets passed in.
    }

    return () => {
      /* cleanup -- removing timer */
      console.log('cleared', toggle);
      clearTimeout(timer.current)
    } // dependencies for this component (speicifically for this above logic. )
  }, [duration, toggle, handleToggle])



  return (
    <StrapInfoToast
      isOpen={toggle} /* toggle sets toggle value for alert */
      toastHeader={type}
      toastBody={message}
    />
  )
}


export { RenderAlert }
