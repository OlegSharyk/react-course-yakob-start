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

class App extends Component {
    static PropTypes = {};

    state = {
        selection: null,
    };

    changeSelection = selection => this.setState({ selection });

    render() {
        return (
            <ConnectedRouter history={history}>
                <div>
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
                    <UserForm />
                    <Switch>
                        <Route path="/counter" component={Counter} />
                        <Route path="/filters" component={Filters} />
                        <Route path="/articles/new" component={NewArticle} />
                        <Route path="/articles" component={Articles} />
                        <Route path="/comments/:page" component={CommentsPage} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>
            </ConnectedRouter>
        );
    }
}

export default App;
