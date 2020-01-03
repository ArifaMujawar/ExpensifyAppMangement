import {EditExpensePage} from '../../components/EditExpensePage';
import React from 'react';
import expenses from '../fixtures/expenses';
import {shallow} from 'enzyme';

let editExpense, removeExpense, history, wrapper;
beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push:jest.fn()};
    wrapper = shallow(
        <EditExpensePage 
        editExpense = {editExpense} 
        removeExpense={removeExpense}
        history = {history}
        expense ={expenses[2]}
        />)
});

test('should render Edit Expense page correctly', ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should handle removeExpense', ()=>{
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({
        id: expenses[2].id
    });
});

   