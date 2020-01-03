import {AddExpensePage} from '../../components/AddExpensePage';
import React from 'react';
import expenses from '../fixtures/expenses';
import { shallow } from 'enzyme';


let addExpense, history, wrapper;

beforeEach(() =>{
    addExpense = jest.fn();
     history = {push:jest.fn()};
     wrapper = shallow(<AddExpensePage addExpense = {addExpense} history= {history}/>);

});
test('should render AddExpense Page correctly', ()=>{
        expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);

});