import React, { Component } from 'react';
import Comment from './Comment';

export default class CommentList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isCommentsOpen: false
        }
    }

    toggleOpen = () => {
        this.setState({
            isCommentsOpen: !this.state.isCommentsOpen
        })
    }

    renderBody(){
        if (!this.state.isCommentsOpen) return null;
        return (
            <ul>
                {
                    this.props.comments.map((comment, index) => (
                        <li key={comment.id}>
                            <Comment comment={comment} />
                        </li>
                    ))
                }
            </ul>
        )
    }

    render(){
        const { isCommentsOpen } = this.state;
        return(
            <div>
                <p>
                    <button onClick={this.toggleOpen.bind(this)}>{isCommentsOpen ? 'Close Comments' : 'Open Comments'}</button>
                </p>
                    {this.renderBody()}
            </div>           
        )
    }

}