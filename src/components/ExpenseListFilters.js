import React from 'react';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import {connect} from 'react-redux';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component{
    state = {
        calendarFocused : null  
    };
    onFocusChange = (calendarFocused) => {
        this.setState(()=>({calendarFocused}));
    };
    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onSortChange = (e) => {
        if(e.target.value === 'date'){
            this.props.sortByDate();
         }else if(e.target.value === 'amount'){
            this.props.sortByAmount();
    }};
    onTextChange =(e) => {
        this.props.setTextFilter(e.target.value);
};

    render(){
        return(
            <div>
                <input type="text" value={this.props.filters.text} onChange = {this.onTextChange}/>  
                <select value = {this.props.filters.sortBy} onChange = {this.onSortChange }>
                <option value = "date">Date</option>
                <option value = "amount">Amount</option>
                </select>
                <DateRangePicker
                startDate ={this.props.filters.startDate}
                endDate = {this.props.filters.endDate}
                onDatesChange = {this.onDatesChange}
                focusedInput= {this.state.calendarFocused}
                onFocusChange = {this.onFocusChange}
                showClearDates={true}
                numberOfMonths ={1}
                isOutsideRange= {()=> false}
                />
            </div>
        );
    }
}




const mapStateToProps = (state) => ({
    filters : state.filters
});
const mapDispatchToProps = (dispatch) => ({
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setTextFilter: (text) => dispatch(setTextFilter(text))
});

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters);