import React, { Component } from 'react'
import { UserConsumer } from './userContext';

class CompF extends Component {
  render() {
    return (
      <UserConsumer>
        {/* we need to specify a function to consume from our provider in the UserConsumer*/}
        {
          (username) => {
            // function takes in user name from the provider, and then returns jsx:
            return <div>Hello {username}</div>
            //username being consumed from the provider.
          }
        }
      </UserConsumer>
    )
  }
}

export default CompF
