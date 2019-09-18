import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import accordion from '../decorators/accordion'

class ArticleList extends Component {
static PropTypes = {
    articles: PropTypes.array.isRequired,
    //from accordion
    openItemId: PropTypes.string,
    toggleOpenItems: PropTypes.func.isRequired
}

    state = {
        openArticleId: null
    }

    toggleOpenArticle = (openArticleId) => ev => {
        this.setState({openArticleId})
    }

    render(){
        const articleElements = this.props.articles.map((article) => (
            <li key={article.id}>
                <Article 
                    article={article} 
                    isOpen={article.id === this.state.openArticleId} 
                    toggleOpen = {this.toggleOpenArticle(article.id)}
                />
            </li>
        ))

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default accordion(ArticleList)