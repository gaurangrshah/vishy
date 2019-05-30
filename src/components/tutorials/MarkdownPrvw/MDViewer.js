import React, { Component } from 'react';
import marked from 'marked';
import Twrap from '../../utils/Twrap/Twrap';
import './md.css'

class MDViewer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      markdown: {}
    }
  }

  componentDidMount() {
    const readmePath = require("../../tutorials/HOC/HOC.md");
    fetch(readmePath)
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({
          markdown: marked(text)
        })
      })
  }

  render() {
    const { markdown } = this.state
    return (
      <Twrap
        title="mdviewer"
        source="https://stackoverflow.com/questions/42928530/how-do-i-load-a-markdown-file-into-a-react-component"
      >
        <div className="markdown-body">
          <article dangerouslySetInnerHTML={{ __html: markdown }}>
          </article>
        </div>
      </Twrap>
    )
  }
}

export default MDViewer
