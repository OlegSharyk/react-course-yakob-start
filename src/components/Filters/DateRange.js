import React, { Component } from 'react';
import { connect } from 'react-redux';
import DayPicker, { DateUtils } from 'react-day-picker';
import { changeDateRange } from '../../ActionCreators';

import 'react-day-picker/lib/style.css';

class DateRange extends Component {
    handleDayClick = day => {
        const { changeDateRange, range } = this.props;
        changeDateRange(DateUtils.addDayToRange(day, range));
    };

    render() {
        const { from, to } = this.props.range;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`;
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={day => DateUtils.isDayInRange(day, { from, to })}
                    onDayClick={this.handleDayClick}
                />
                {selectedRange}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        range: state.filters.dateRange,
    };
}

const mapDispatchToProps = { changeDateRange };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DateRange);
