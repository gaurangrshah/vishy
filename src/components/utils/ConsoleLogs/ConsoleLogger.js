import React from 'react'
import { Hook, Console, Decode } from 'console-feed'
import ConsoleToast from '../../Toasts/strappd/ConsoleToast';

export default class ConsoleLogger extends React.Component {
  state = {
    logs: []
  }

  componentDidMount() {
    Hook(window.console, log => {
      this.setState(({ logs }) => ({ logs: [...logs, Decode(log)] }))
    })

    console.log(`Hello world!`)
  }

  render() {
    return (
      <div>
        <ConsoleToast toastHeader="Console" isOpen={true} toastBody={<Console logs={this.state.logs} variant="dark" />} />
      </div>
    )
  }
}
