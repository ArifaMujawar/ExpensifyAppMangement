import {addExpense, removeExpense, editExpense} from '../../actions/expenses';


test('Should setup remove expense object', ()=>{
const action = removeExpense({id:'123acb'});
expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id:'123acb'
});
});

test('should setup edit expense object', ()=>{
    const action = editExpense('123ab',{note:'edit note value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id:'123ab',
        updates:{note:'edit note value'}
    });
});

test('should set up add expense action object with provided values',()=>{
    const expenseData = {
        description:'this is add expense',
        note:'yo yo',
        amount:123,
        createdAt:123123
              
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id:expect.any(String)
        }
    });
}); 

test('should set up add expense action object with default values',()=>{
    const expenseData = {
        description:'',
        note:'',
        amount:'',
        createdAt:''
    };
    const action= addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id:expect.any(String)
        }
    });
});