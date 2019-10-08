import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { commentSelectorFactory } from '../selectors';

function Comment({ comment }) {
    return (
        <div>
            <p>{comment.text}</p>
            <p style={{ textAlign: 'right' }}>
                <strong>{comment.user}</strong>
            </p>
        </div>
    );
}

Comment.PropTypes = {
    id: PropTypes.string.isRequired,
    // from connect
    comment: PropTypes.shape({
        text: PropTypes.string,
        user: PropTypes.string,
    }).isRequired,
};

const mapStateToProps = () => {
    const commentSelector = commentSelectorFactory();
    // console.log('commentSelector', commentSelector);

    return (state, ownProps) => {
        return {
            comment: commentSelector(state, ownProps),
        };
    };
};

export default connect(mapStateToProps)(Comment);
