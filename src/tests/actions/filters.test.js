import {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from '../../actions/filters';
import moment from 'moment';

test('should generate action object for set start date action object', ()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate:moment(0)
    });
});

test('should generate action object for set end date action object', ()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
    });
});

test('should generate action object for set text filter', ()=>{
    const action = setTextFilter('bill');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text:'bill'
    });
});

test('should generate action object for sort by amount',()=>{
    expect(sortByAmount()).toEqual({type:'SORT_BY_AMOUNT'});
});

test('should generate action object for sort by date',()=>{
    expect(sortByDate()).toEqual({type:'SORT_BY_DATE'});
});
