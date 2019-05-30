import React, { Component } from 'react';
import Twrap from '../../utils/Twrap/Twrap';
import CompC from './CompC';
import { UserProvider } from './userContext';

export class UserApp extends Component {
  render() {
    return (
      <Twrap
        title="context"
        source="http://www.youtube.com/watch?v=j3j8St50fNY"
      >
        <UserProvider value="GameOn">
          {/* overriding defining the "value" from context that we want UserProvider to maintain for us */}
          <CompC />
          {/* rendering CompC wrapped with the UserProvider allowing all descendents access if needed */}
        </UserProvider>
      </Twrap>
    )
  }
}

export default UserApp
