import React, { Component } from 'react';
import Twrap from '../../utils/Twrap/Twrap'

export class ConditionalRendering extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: true
    }
  }

  render() {

    return (
      <Twrap
        title="conditional-render"
        source="https://www.youtube.com/watch?v=7o5FPaVA9m0"
      >
        <p>message to user:</p>
        {/* short circuit operator + default */}
        {(this.state.isLoggedIn && <div>Welcome</div>) || <div>Goodbye</div>}
        <button onClick={() => {
          this.setState({
            isLoggedIn: !this.state.isLoggedIn
          })
        }}
        >
          {(this.state.isLoggedIn) ? "LogOut" : "Login"}
        </button>
      </Twrap >
    )

    /*  Conditional Ternary with variable
        let message = (this.state.isLoggedIn) ? (
          <div> Welcome </div>
        ) : (
            <div>GoodBye</div>
          );

        return message
     */
    /* *  ternary rendering
      return (this.state.isLoggedIn) ? (<div> Welcome </div>) : (<div>GoodBye</div>);
    */
    /* * Standard If / Else
      if(this.state.isLoggedIn) {
        return (<div> Welcome </div>)
      } else {
        return  (<div>GoodBye</div>)
      }
    */

  }
}

export default ConditionalRendering
