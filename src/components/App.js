import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Articles from './routes/Articles';
import CommentsPage from './routes/CommentsPage';
import UserForm from './UserForm';
import 'react-select/dist/react-select.css';
import Filters from './Filters';
import Counter from './Counter';
import NewArticle from './routes/NewArticle';
import NotFound from './routes/NotFound';

class App extends Component {
    static PropTypes = {};

    state = {
        selection: null,
    };

    changeSelection = selection => this.setState({ selection });

    render() {
        return (
            <Router>
                <div>
                    <div>
                        <div>
                            <h2>Main menu</h2>
                            <div>
                                <NavLink activeStyle={{ color: 'red' }} to="/counter">
                                    Counter
                                </NavLink>
                            </div>
                            <div>
                                <NavLink activeStyle={{ color: 'red' }} to="/filters">
                                    Filters
                                </NavLink>
                            </div>
                            <div>
                                <NavLink activeStyle={{ color: 'red' }} to="/articles">
                                    Articles
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <UserForm />
                    <Switch>
                        <Route path="/counter" component={Counter} />
                        <Route path="/filters" component={Filters} />
                        <Route path="/articles/new" component={NewArticle} />
                        <Route path="/articles" component={Articles} />
                        <Route path="/comments" component={CommentsPage} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
