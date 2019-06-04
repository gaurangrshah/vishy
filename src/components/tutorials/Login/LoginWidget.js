import React from 'react';
import { useInput } from '../../utils/useInput/useInput';
import { useToggle } from '../../utils/Toggle/useToggle';



export default () => {
  const [toggle, handleToggle] = useToggle();
  const { value: userName, bind: bindUserName, reset: resetUserName, submit: updateUserName } = useInput(null)

  const logout = () => {
    handleToggle(false)
    console.log('logout!!', toggle)
    return resetUserName();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    e.persist();

    handleToggle(true)
    console.log('🔓isLoggedIn?', userName, toggle)

    updateUserName(userName)

    console.log('🚪isLoggedIn?', userName, toggle)
    resetUserName();
    return toggle
  }

  return (

    <form className="loginApp" onSubmit={(e, handleToggle) => handleSubmit(e)}>
      {(userName && toggle) ? (
        <>
          <h2>Logged In As: {userName}</h2>
          <button type="submit" onClick={() => logout()}>Logout</button>
        </>
      ) : (
          <>
            <input type="text" {...bindUserName} required />
            <button type="submit" value="submit">Login</button>
          </>
        )}
    </form >
  )
}
