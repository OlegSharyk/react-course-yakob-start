import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ArticleChart extends Component {
    static PropTypes = {

    }

    componentDidMount() {
        // d3 with this.refs.chart
    }

    componentWillReceiveProps(nextProps) {
        // update chart for new articles
    }

    render() {
        return (
            <div ref = 'chart' />
        )
    }

    componentWillUnmount() {
        // do some cleanup
    }
}

export default ArticleChart;