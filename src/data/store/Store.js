import React, { useState } from 'react';
// import db from '../../../api/db.json'

const currUser = 'user1'

export const UserContext = React.createContext(currUser)

const Store = ({ children }) => {
  const [user, setUser] = useState(currUser)

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  )
}

export default Store;