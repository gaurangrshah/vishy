import React, { Component } from 'react'
import Comment from './Comment'

export class Board extends Component {
  constructor(props) {
    super(props)

    this.state = {
      comments: [
        'this is comment num 1',
        'this is comment num 2',
        'this is comment num 3'
      ]
    }
  }




  addComment = (text) => {
    const arr = this.state.comments;
    arr.push(text);
    this.setState({ comments: arr })
  }


  removeComment = (i) => {
    console.log('remove from board', { i })
    const arr = this.state.comments;
    arr.splice(i, 1); // splice the array to remove the item at the index we pass in, and returns a new array.
    //2nd argument speficies how many items to remove from the array after the item at the index we specify.
    this.setState({ comments: arr }) // using setState to update state with the updated array with one removed item.
  }

  updateComment = (newText, i) => {
    console.log('Updating', { i })
    var arr = this.state.comments;
    arr[i] = newText; // updates the text newText at the index we target.
    this.setState({ comments: arr });
  }

  eachComment = (text, i) => {
    console.log('text, i:', { text, i })
    return (

      <Comment
        key={i}
        index={i}
        add={this.addComment}
        update={this.updateComment}
        remove={this.removeComment}
      >
        {text}
      </Comment>


    )
    //definig an index for the Component so that we can use it to better target each comment., the key is used by React and is generally otherwise avoided from code.
  }

  render() {
    return (
      <div>
        <button className="btn-xs btn-info create" onClick={this.addComment.bind(null, ['Ham', 'Bacon Tuna', 'Salami'])}>Add New</button>
        <div className="board">{this.state.comments.map(this.eachComment)}</div>
      </div>
    )
  }

}

export default Board;
