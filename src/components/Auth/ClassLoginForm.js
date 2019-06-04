import React, { Component } from 'react';
import { FullStrapModal } from '../Portals/Modal/FullModal';
import { displayMessage } from '../utils/form-utils/form-utils';



export const RenderForm = ({ userName, password, handleSubmit, handleChange, error, success }) => {
  return (
    <>
      <input name="userName" type="text" value={userName} onChange={handleChange} />
      <input name="password" type="text" value={password} onChange={handleChange} required />
      {displayMessage(success, error)}
    </>
  )
}

export const RenderWelcome = ({ userName, success, error, handleLogout }) => {
  return (
    <div>
      <h1>Hey {userName}</h1>
      {displayMessage(success, error)}
      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  )
}




class ClassLoginForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userName: '',
      password: '',
      isLoggedIn: false,
      error: '',
      success: '',
    }
  }


  handleLogout = (e) => {
    e.preventDefault();
    e.persist();
    this.setState({ isLoggedIn: !this.state.isLoggedIn, userName: '', password: '', success: '', error: '' })
    console.log('logged out');
  }

  handleSubmit = () => {
    // just loggin state on submit --
    console.log('islogged?', this.state.isLoggedIn)
    if ((this.state.userName).length >= 5) {
      this.setState({
        // state is already being set onChange, this is redundant, remove this when handling via dispatch, context, or server-side.
        isLoggedIn: !this.state.isLoggedIn,
        // toggle login on submit
        success: `Welcome ${this.state.userName}`
      })
      console.log(`success: ${this.state.isLoggedIn}`)
    } else {
      this.setState({
        error: "Please Enter a Valid User Name"
      })
    }






  }

  handleChange = (e) => {
    const { name, value } = e.target
    // console.log('val change:', { name, value })
    this.setState({ [name]: value })
  }


  render() {
    const renderLogic = () => {
      const { userName, password, isLoggedIn, error, success } = this.state
      return (this.state.userName && this.state.isLoggedIn) ? (
        // 🚧 need to handle this logic where, username is validated before accpeted as valid.
        <RenderWelcome
          userName={userName}
          error={error} success={success}
        />
      ) : (
          <RenderForm
            username={userName} password={password}
            success={success} error={error}
            loggedIn={isLoggedIn}
            handleChange={this.handleChange}
          />
        )
    }
    return (
      <FullStrapModal
        modalTitle="FullScreen Yet?"
        handleSubmit={(e) => this.handleSubmit(e)}
        // passing down the handleSubmit (doesnt seem to capture the event on either end) kept (e) for future testing purposes  --- same for handleLogout below
        isLoggedIn={this.state.isLoggedIn}
        handleLogout={(e) => this.handleLogout(e)}
      >

        {renderLogic()}
        {/* calling renderlogic to rendered appropriate fields for logged in vs logged out users */}

      </FullStrapModal >
    )
  }
}

export default ClassLoginForm
