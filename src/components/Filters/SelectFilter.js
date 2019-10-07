import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { changeSelection } from '../../ActionCreators';

import 'react-select/dist/react-select.css';

class SelectFilter extends Component {
    handleChange = selected => this.props.changeSelection(selected.map(option => option.value));

    render() {
        const { articles, selected } = this.props;

        const options = articles
            ? articles.map(article => ({
                  label: article.title,
                  value: article.id,
              }))
            : [];

        return (
            <Select options={options} value={selected} multi={true} onChange={this.handleChange} />
        );
    }
}

function mapStateToProps(state) {
    return {
        selected: state.filters.selected,
        articles: state.articles,
    };
}

const mapDispatchToProps = { changeSelection };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SelectFilter);
