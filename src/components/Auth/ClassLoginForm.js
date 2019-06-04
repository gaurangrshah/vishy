import React, { Component } from 'react';
import { FullStrapModal } from '../Portals/Modal/FullModal';

export const RenderForm = ({userName, password, isLoggedIn, handleSubmit, handleChange, error, success}) => (
  <form onSubmit={handleSubmit}>
    Hi
    <input name="userName" type="text" value={userName} onChange={handleChange} is-valid/>
    <input name="password" type="text" value={password} onChange={handleChange} required/>
    <input type="submit" value="submit" />
  </form>
)

export const RenderWelcome = ({userName, loggedIn, success, error, handleLogout}) => (

  <div>
    <h1>Hey {userName}</h1>
    <p>{loggedIn && success ? <p> {success}</p> : () => {
      console.log('error displaying success msg');
    }}</p>
    <p>{loggedIn && error ? <p>{error}</p> : () => { console.log('error displaying error message 🙃')}
  }</p>
    <button onClick={handleLogout()}>Logout</button>
  </div>
)


class ClassLoginForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userName: '',
      password: '',
      isLoggedIn: props.isLoggedIn || false,
      error: '',
      success: '',
    }
  }


  handleLogout = (e) => {
    e.preventDefault();
    e.persist();
    this.setState({isLoggedIn: !this.state.isLoggedIn, password: ''})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    e.persist();
    // console.log(e.target.input.name)
    // just loggin state on submit --
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
      // toggle login on submit
      success: `Welcome ${this.state.userName}`
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    console.log('val change:', { name, value })
    this.setState({[name]: value})
  }


  render() {
    const   renderLogic = () => {
      const { userName, password, isLoggedIn, error, success } = this.state
        return (this.state.userName && this.state.isLoggedIn) ? (
          <RenderWelcome handleLogout={() => this.handleLogout.bind(this)}/>
        ) : (
          <RenderForm username={userName} password={password} loggedIn={isLoggedIn} success={success} error={error} handleSubmit={this.handleSubmit.bind(this)} handleChange={this.handleChange.bind(this)} />
        )
    }
    return (
      <FullStrapModal modalTitle="FullScreen Yet?">
        {renderLogic()}
      </FullStrapModal >
    )
  }
}

export default ClassLoginForm