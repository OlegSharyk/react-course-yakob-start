import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import ArticleChart from './ArticleChart';
import UserForm from './UserForm';

class App extends Component {
    static PropTypes = {

    }

    render(){
        return (
            <div>
                <UserForm />
                <ArticleList articles={this.props.articles} />
                <ArticleChart articles={this.props.articles}  />
            </div>            
        )
    }
}

export default App;