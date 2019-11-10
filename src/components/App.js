import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import Articles from './routes/Articles';
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
            <Router>
                <div>
                    <div>
                        <h2>Main menu</h2>
                        <div>
                            <NavLink activeStyle={{ color: 'red' }} to="/counter">
                                Counter
                            </NavLink>
                            <NavLink activeStyle={{ color: 'red' }} to="/filters">
                                Filters
                            </NavLink>
                            <NavLink activeStyle={{ color: 'red' }} to="/articles">
                                Articles
                            </NavLink>
                        </div>
                    </div>
                    <UserForm />
                    <Route path="/counter" component={Counter} />
                    <Route path="/filters" component={Filters} />
                    <Route path="/articles" component={Articles} />
                </div>
            </Router>
        );
    }
}

export default App;
