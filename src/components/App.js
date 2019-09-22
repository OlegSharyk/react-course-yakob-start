import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import ArticleChart from './ArticleChart';
import UserForm from './UserForm';
import 'react-select/dist/react-select.css';
import Filters from './Filters';

class App extends Component {
    static PropTypes = {};

    state = {
        selection: null,
    };

    changeSelection = selection => this.setState({ selection });

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id,
        }));

        return (
            <div>
                <UserForm />
                <Filters articles={this.props.articles} />
                <ArticleList articles={this.props.articles} />
                <ArticleChart articles={this.props.articles} />
            </div>
        );
    }
}

export default App;
