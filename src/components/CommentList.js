import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';

function CommentList({ comments = [], isOpen, toggleOpen }) {
  const buttonText = isOpen ? 'hide comments' : 'show comments';

  return (
    <div>
      <p>
        <button onClick={toggleOpen}>{buttonText}</button>
      </p>
      {renderBody({ comments, isOpen })}
    </div>
  );
}


CommentList.PropTypes = {
  comments: PropTypes.array,
  //from toggleOpen decorator
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func
}

function renderBody({ comments, isOpen }) {
  if (!isOpen) return null;
  if (!comments.length) return <p>No comments yet</p>;

  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <Comment comment={comment} />
        </li>
      ))}
    </ul>
  );
}

export default toggleOpen(CommentList);
