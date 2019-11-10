import React, { PureComponent } from 'react';
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
        id: PropTypes.string.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func,
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
        }),
    };

    state = {
        updateIndex: 0,
    };

    componentDidMount() {
        const { loadArticle, article } = this.props;
        if (!article || (!article.text && !article.loading)) loadArticle(article.id);
    }

    getBody() {
        const { article, isOpen } = this.props;

        if (!isOpen) return null;
        if (article.loading) return <Loader />;
        return (
            <section>
                article.text
                {article.text}
                <CommentList
                    article={article}
                    ref={this.setCommentsRef}
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

        if (!article) return null;

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
    (state, ownProps) => {
        return {
            article: state.articles.entities.get(ownProps.id),
        };
    },
    { deleteArticle, loadArticle },
)(Article);
