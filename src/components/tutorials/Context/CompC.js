import React, { Component } from 'react'
import CompE from './CompE';

class CompC extends Component {
  render() {
    return (
      <div>
        <CompE />
        {/* 1st child component gettng rendered */}
      </div>
    )
  }
}

export default CompC
