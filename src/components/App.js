import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import Articles from './routes/Articles';
import CommentsPage from './routes/CommentsPage';
import UserForm from './UserForm';
import 'react-select/dist/react-select.css';
import Filters from './Filters';
import Counter from './Counter';
import NewArticle from './routes/NewArticle';
import NotFound from './routes/NotFound';
import history from '../history';
import PropTypes from 'prop-types';

import LangProvider from './LangProvider';

class App extends Component {
    static PropTypes = {};

    static childContextTypes = {
        user: PropTypes.string,
    };

    getChildContext() {
        return {
            user: this.state.username,
        };
    }

    state = {
        selection: null,
        username: '',
        language: 'ru',
    };

    changeSelection = selection => this.setState({ selection });

    changeLanguage = language => ev => this.setState({ language });

    render() {
        return (
            <ConnectedRouter history={history}>
                <LangProvider language={this.state.language}>
                    <div>
                        <ul>
                            <li onClick={this.changeLanguage('en')}>English</li>
                            <li onClick={this.changeLanguage('ru')}>Russian</li>
                        </ul>
                        <div>
                            <div>
                                <h2>Main menu</h2>
                                <div style={{ display: 'flex', marginBottom: 10 }}>
                                    <div style={{ padding: 5 }}>
                                        <NavLink activeStyle={{ color: 'red' }} to="/counter">
                                            Counter
                                        </NavLink>
                                    </div>
                                    <div style={{ padding: 5 }}>
                                        <NavLink activeStyle={{ color: 'red' }} to="/filters">
                                            Filters
                                        </NavLink>
                                    </div>
                                    <div style={{ padding: 5 }}>
                                        <NavLink activeStyle={{ color: 'red' }} to="/articles">
                                            Articles
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <UserForm value={this.state.username} onChange={this.handleUserChange} />
                        <Switch>
                            <Route path="/counter" component={Counter} />
                            <Route path="/filters" component={Filters} />
                            <Route path="/articles/new" component={NewArticle} />
                            <Route path="/articles" component={Articles} />
                            <Route path="/comments/:page" component={CommentsPage} />
                            <Route path="*" component={NotFound} />
                        </Switch>
                    </div>
                </LangProvider>
            </ConnectedRouter>
        );
    }

    handleUserChange = username => {
        this.setState({ username });
    };
}

export default App;
