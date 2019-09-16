import React, { Component } from 'react';
import Comment from './Comment';

// ES6 syntax
// CommentList.defaultProps = {
//   comments: []
// }

export default class CommentList extends Component {
  // ES6 syntax
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     isCommentsOpen: false
  //   };
  // }

  // ES7 syntax
  static defaultProps = {
    comments: []
  };

  state = {
    isCommentsOpen: false
  };

  toggleOpen = () => {
    this.setState({
      isCommentsOpen: !this.state.isCommentsOpen
    });
  };

  renderBody() {
    if (!this.state.isCommentsOpen) return null;

    const { comments } = this.props;
    if (!comments.length) return <p>No comments yet</p>;

    return (
      <ul>
        {this.props.comments.map((comment, index) => (
          <li key={comment.id}>
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { isCommentsOpen } = this.state;
    return (
      <div>
        <p>
          <button onClick={this.toggleOpen.bind(this)}>
            {isCommentsOpen ? 'Hide Comments' : 'Show Comments'}
          </button>
        </p>
        {this.renderBody()}
      </div>
    );
  }
}
