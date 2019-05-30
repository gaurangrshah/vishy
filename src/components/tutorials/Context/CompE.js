import React, { Component } from 'react'
import CompF from './CompF';

import UserContext from './userContext';
// import UserContext to consume here directly

class CompE extends Component {
  render() {
    return (
      <div>
        <p>
          {console.log(this.context)}
          CompE Context: {this.context}
        </p>
        CompF: <CompF />
        {/* final child component getting rendered */}
      </div>
    )
  }
}

CompE.contextType = UserContext;
export default CompE
