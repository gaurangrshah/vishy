import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <div>
        {this.props.render(false) || "User name"}

      </div>
    )
  }
}

export default User
