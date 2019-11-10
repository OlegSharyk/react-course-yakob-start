import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';
import CommentForm from './CommentForm';

class CommentList extends Comment {
    componentWillReceiveProps({ isOpen, article, loadArticleComments }) {
        if (!this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded) {
            loadArticleComments(article.id);
        }
    }

    render() {
        const { article, isOpen, toggleOpen } = this.props;
        const text = isOpen ? 'hide comments' : 'show comments';

        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {renderBody({ article, isOpen })}
            </div>
        );
    }
}

// function CommentList({ comments = [], isOpen, toggleOpen }) {
//     const buttonText = isOpen ? 'hide comments' : 'show comments';

//     return (
//         <div>
//             <p>
//                 <button onClick={toggleOpen}>{buttonText}</button>
//             </p>
//             {renderBody({ comments, isOpen })}
//         </div>
//     );
// }

CommentList.PropTypes = {
    comments: PropTypes.array,
    //from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func,
};

function renderBody({ comments, isOpen }) {
    if (!isOpen) return null;
    if (commentsLoading) return <Loader />;
    if (commentsLoaded) return null;
    if (!comments.length)
        return (
            <div>
                <p>No comments yet</p>
                <CommentForm articleId={id} />
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
            <CommentForm articleId={id} />
        </div>
    );
}

export default toggleOpen(CommentList);
