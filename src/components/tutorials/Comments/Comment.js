import React, { Component } from 'react'

export class Comment extends Component {

  constructor(props) {
    super(props)

    this.state = {
      editing: false
    }
  }


  edit = () => {
    console.log('editing'); // runs onClick => "edit"
    this.setState({ editing: true })
    // toggles the state of editing
  }

  remove = () => {  // runs onClick => "remove"
    console.log('removing');
    this.props.remove(this.props.index);
    // calling the remove method form parent passed down from props.
    // using the passed in index attribute from props, to target this item to remove.
  }

  save = () => {  // runs onClick => "save"

    const val = this.refs.newText.value;
    const index = this.props.index
    this.props.update(val, index)
    console.log('saving', { val, index });
    // grabs the value from the textarea ref, and the index of the item via props.
    this.setState({ editing: false })     // toggles the state of editing
  }

  // view to be conditionally rendered when state is toggled: editing: false
  renderNormal = () => (
    <div className="commentContainer">

      <span onClick={this.edit}><span className="commentText">{this.props.children}</span></span>
      <span className="btn-xs btn-danger" onClick={this.remove}>X</span>
    </div>
  )

  // Form to be conditionally rendered when state is toggled: editing: true
  renderForm = () => (
    <div className="commentContainer">
      {/* assigned a ref here to be able to grab the value from the textarea. */}
      <textarea ref="newText" defaultValue={this.props.children}></textarea>
      <span className="btn-xs btn-danger" onClick={this.remove}>X</span>
      <span onClick={this.save} className="btn-success">Save</span>
    </div>
  )

  render() {
    // conditionally rendering one or the other based on the state of "editing"
    return (
      <>
        {(this.state.editing) ? (
          this.renderForm()
        ) : (
            this.renderNormal()
          )}
      </>
    )
  }
}
export default Comment;
