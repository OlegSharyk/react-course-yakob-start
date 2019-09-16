import React from 'react';
import PropTypes from 'prop-types';

export default Comment = ({ comment }) => {
  return (
    <div>
      <p>{comment.text}</p>
      <p style={{ textAlign: 'right' }}>
        <strong>{comment.user}</strong>
      </p>
    </div>
  );
};

Comment.PropTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    user: PropTypes.string
  }).isRequired
};
