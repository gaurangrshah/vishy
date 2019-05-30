import React, { createContext } from 'react'

// every component created with the React.createContext() has access to both a provider and a consumer.
const UserContext = createContext('New Guy')
// added the string 'New Guy' as a default value to the UserContext.

// assigning user context provider to a more applicable name before exporting:
const UserProvider = UserContext.Provider
// assigning user context consumer to a more applicable name before exporting:
const UserConsumer = UserContext.Consumer

// exporting the UserContext.Provider & UserContext.Consumer as UserProvider and UserConsumer
export { UserProvider, UserConsumer }

export default UserContext
// exporting UserContext as default export to consumed directly from children.
