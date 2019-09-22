import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
// import { connect } from 'react-redux';
// import { setSelectArticles } from '../../AC';

import 'react-select/dist/react-select.css';

class SelectFilter extends Component {
    // static propTypes = {
    //     //from connect
    //     articles: PropTypes.array.isRequired,
    //     selected: PropTypes.array,
    //     setSelectArticles: PropTypes.func.isRequired,
    // };

    state = {
        selected: [],
    };

    handleChange = selected => this.setState({ selected });

    render() {
        const { selected } = this.state;
        const { articles } = this.props;

        const options = articles.map(article => ({
            label: article.title,
            value: article.id,
        }));

        return (
            <Select options={options} value={selected} multi={true} onChange={this.handleChange} />
        );
    }
}

export default SelectFilter;
