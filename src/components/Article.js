import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import CommentList from './CommentList';

class Article extends Component {
  static PropTypes = {
    // article: PropTypes.object.isRequired
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired
  };

  componentWillReceiveProps(nextProps){
    console.log('~~~~~', 'updating', this.props.isOpen, nextProps.isOpen);
  }

  componentWillMount() {
    console.log('~~~~~', 'mounting');
  }

  getBody() {
    const { article, isOpen } = this.props;
    if (!isOpen) return null;
    return (
      <section>
        {article.text}
        <CommentList ref = {this.setCommentsRef} comments={article.comments} />
      </section>
    );
  }

  setContainerRef = ref => {
    this.container = ref;
    console.log('~~~~', ref)
  }

  setCommentsRef = ref => {
    this.container = ref;
    console.log('~~~~', findDOMNode(ref))
  }

  render() {
    const { article, isOpen, toggleOpen } = this.props;

    return (
      <div ref={this.setContainerRef}>
        <h3>{article.title}!!!</h3>
        <button onClick={toggleOpen.bind(this)}>
          {isOpen ? 'Close' : 'Open'}
        </button>
        {this.getBody()}
      </div>
    );
  }

  componentDidMount() {
    console.log('~~~~~', 'mount');
  }
}

export default Article;
