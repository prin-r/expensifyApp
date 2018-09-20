import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

const setTextFilterLocal = (e,props) => {
    props.dispatch(setTextFilter(e.target.value));
    console.log(e.target.value);
};

const setSortBy = (e,props) => {
    switch (e.target.value) {
        case 'date':
            props.dispatch(sortByDate());
            break;
        case 'amount':
            props.dispatch(sortByAmount());
            break;
        default:
            break;
    };
    console.log(e.target.value);
}

class ExpenseListFilters extends React.Component {

    state = {
        calendarFocused: null
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };

    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e) => setTextFilterLocal(e,this.props)} />
                <select value={this.props.filters.sortBy} onChange={(e) => setSortBy(e,this.props)}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

const ConnectedExpenseListFilters = connect(mapStateToProps)(ExpenseListFilters);

export default ConnectedExpenseListFilters;