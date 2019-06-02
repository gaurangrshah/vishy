import React from 'react';
import { useInput } from '../../utils/useInput/useInput';


export default () => {
  const { value: userName, bind: bindUserName, reset: resetUserName, submit: submitUserName } = useInput({
    name: '',
    isLoggedIn: false,
    placeholder: 'Enter a user name'
  }, 'name')


  // console.log('value:', userName.name)

  const logout = () => {
    console.log(userName);
    return resetUserName();
  }


  return (

    <form className="loginApp" onSubmit={(e) => submitUserName(e, { ...userName, name: userName.name, isLoggedIn: !userName.isLoggedIn })}>
      {(userName.name && userName.isLoggedIn) ? (
        <>
          <h2>Logged In As: {userName.name}</h2>
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
