import React, { Component } from 'react';
import { EditorState, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


export class ControlledEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    if (props.richContent) {
      // if richContent exists on props (from DraftFactory.js: localHost getrequest.)
      console.log('loadedRichContent')

      this.state.editorState = EditorState.createWithContent(convertFromRaw(JSON.parse(props.richContent)));
      // update state with the richContent from props, after parsing the raw object.


    } else {
      this.state.editorState = EditorState.createEmpty();
      // else create an empty editor.
      console.log('EditorState:Empty')
    }

    //binding the save method that gets passed in to the editor
    this.handleUpdate = (content) => props.handleUpdate(content)
  }


  onEditorStateChange = (editorState, props) => {
    const contentState = editorState.getCurrentContent();
    // console.log('💾 saved!', convertToRaw(contentState));

    this.handleUpdate(contentState);
    this.setState({
      editorState,
    });

  };

  render() {
    const { editorState } = this.state;
    // const strung = JSON.stringify(convertToRaw(editorState.getCurrentContent()))

    return (
      <>

        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
        {/* <span>{strung}</span> */}

      </>
    )
  }
}
