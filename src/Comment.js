import React from 'react';

export default Comment = ({comment}) => {

    return (
        <div>
            <p>{comment.text}</p>
            <p style={{ textAlign: 'right' }}><strong>{comment.user}</strong></p>
        </div>
    )
}