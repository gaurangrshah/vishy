import React from 'react';
import { Button } from 'reactstrap';

/* renderer, gets passed a truthy value   */
export const renderer = (condition, comp1, props1, comp2, props2) => {
  // pass in a falsy value to condition to toggle render.
  if (condition) {
    return comp1(null, props1)
  } else {
    return comp2(null, props2)
  }
}



export const renderLogout = (logoutButtonTitle = "Logout", props) => {
  return (
    <Button
      // color="danger"
      // onClick={handleLogout}
      {...props}
    >
      {/* {console.log('logged IN')} */}
      {logoutButtonTitle || "Logout"}
    </Button >
  )
}


export const renderLogin = (loginButtonTitle = "login", props) => {
  // pass in a falsy value to condition to hide button on eval.

  return (
    <Button
      // color="primary"
      // onClick={handleSubmit}
      {...props}
    >
      {/* {console.log('logged IN')} */}
      {loginButtonTitle || "Login"}
    </Button >
  )
}
