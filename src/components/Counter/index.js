import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment } from '../../ActionCreators';

class Counter extends Component {
    static PropTypes = {
        counter: PropTypes.number,
        increment: PropTypes.func.isRequired,
    };

    handleIncrement = () => {
        console.log('~~~increment');
        const { increment } = this.props;
        increment();
    };

    render() {
        return (
            <div>
                <h2>{this.props.counter}</h2>
                <button onClick={this.handleIncrement}>Increment me</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.count,
    };
}

const mapDispatchToProps = { increment };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Counter);
