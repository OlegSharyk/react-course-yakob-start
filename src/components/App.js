import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import UserForm from './UserForm';
import 'react-select/dist/react-select.css';
import Filters from './Filters';
import Counter from './Counter';

class App extends Component {
    static PropTypes = {};

    state = {
        selection: null,
    };

    changeSelection = selection => this.setState({ selection });

    render() {
        return (
            <div>
                <UserForm />
                <Counter />
                <Filters articles={[]} />
                <ArticleList />
            </div>
        );
    }
}

export default App;
