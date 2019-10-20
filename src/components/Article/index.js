import React, { PureComponent } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import CommentList from '../CommentList';
import { CSSTransitionGroup } from 'react-transition-group';
import './style.css';
import { connect } from 'react-redux';
import { deleteArticle, loadArticle } from '../../ActionCreators';
import { Loader } from '../Loader';

class Article extends PureComponent {
    static PropTypes = {
        // article: PropTypes.object.isRequired
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func,
    };

    state = {
        updateIndex: 0,
    };

    componentWillReceiveProps({ isOpen, loadArticle, article }) {
        if (isOpen && !article.text && !article.loading) loadArticle(article.id);
    }

    getBody() {
        const { article, isOpen } = this.props;
        if (!isOpen) return null;
        if (article.loading) return <Loader />;
        return (
            <section>
                {article.text}
                <button onClick={() => this.setState({ updateIndex: this.state.updateIndex + 1 })}>
                    update
                </button>
                <CommentList
                    ref={this.setCommentsRef}
                    comments={article.comments}
                    key={this.state.updateIndex}
                />
            </section>
        );
    }

    setContainerRef = ref => {
        this.container = ref;
        // console.log('~~~~', ref)
    };

    setCommentsRef = ref => {
        this.container = ref;
        // console.log('~~~~', findDOMNode(ref))
    };

    handleDelete = () => {
        const { deleteArticle, article } = this.props;
        deleteArticle(article.id);
        // console.log('~~~ delete article');
    };

    render() {
        const { article, isOpen, toggleOpen } = this.props;

        return (
            <div ref={this.setContainerRef}>
                <h3>{article.title}!!!</h3>
                <button onClick={toggleOpen}>{isOpen ? 'Close' : 'Open'}</button>
                <button onClick={this.handleDelete}>Delete me</button>
                <CSSTransitionGroup
                    transitionName="article"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={500}
                    component="div">
                    {this.getBody()}
                </CSSTransitionGroup>
            </div>
        );
    }
}

export default connect(
    null,
    { deleteArticle, loadArticle },
)(Article);
