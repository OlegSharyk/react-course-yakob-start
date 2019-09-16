import React, { Component} from 'react';
import CommentList from './CommentList'

export default class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }

        // this.toggleOpen = this.toggleOpen.bind(this)
    }
    
    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getBody() {
        if (!this.state.isOpen) return null;
        const { article } = this.props;
        return (
            <section>
                {article.text}
                <CommentList comments={article.comments} />
            </section>
        )
    }

    render() {
        const {article} = this.props;
        const {isOpen} = this.state;

        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={this.toggleOpen.bind(this)}>{isOpen ? 'Close' : 'Open'}</button>
                {this.getBody()}
            </div>
        )
    }
}


// export default function Article(props){
//     const { article } = props;

//     return (
//         <div>

//             <h3>{article.title}</h3>
//             <section>{article.text}</section>
//         </div>
//     )
// }