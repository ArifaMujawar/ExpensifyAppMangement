import {startAddExpense,addExpense, removeExpense, editExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { database } from 'firebase';

const createMockStore = configureMockStore([thunk]);

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
    
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: expenses[2]
    });
}); 

test('should add expense to database and store',(done)=>{
    const store = createMockStore({});
    const expenseData = {
        description: 'MOuse',
        amount: 3000,
        note:'This one is better',
        createdAt: 1000
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0].toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        }));
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot)=>{
            expect(snapshot.val()).toEqual(expenseData);
            done();
        });;

});

test('should add expense with defaults to database and store',(done)=>{
    const store = createMockStore({});
    const expenseDefaults = {
        description: '',
        amount: 0,
        note:'',
        createdAt: 0
    };

    store.dispatch(startAddExpense()).then(() => {
        const actions = store.getActions();
        expect(actions[0].toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        }));
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot)=>{
            expect(snapshot.val()).toEqual(expenseDefaults);
            done();
        });;


}, 30000); 

// test('should set up add expense action object with default values',()=>{
//     const expenseData = {
//         description:'',
//         note:'',
//         amount:'',
//         createdAt:''
//     };
//     const action= addExpense(expenseData);
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             ...expenseData,
//             id:expect.any(String)
//         }
//     });
// });