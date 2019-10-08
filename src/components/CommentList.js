import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';
import CommentForm from './CommentForm';

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
    toggleOpen: PropTypes.func,
};

function renderBody({ comments, isOpen }) {
    if (!isOpen) return null;
    if (!comments.length)
        return (
            <div>
                <p>No comments yet</p>
                <CommentForm />
            </div>
        );

    return (
        <div>
            <ul>
                {comments.map(id => (
                    <li key={id}>
                        <Comment id={id} />
                    </li>
                ))}
            </ul>
            <CommentForm />
        </div>
    );
}

export default toggleOpen(CommentList);
