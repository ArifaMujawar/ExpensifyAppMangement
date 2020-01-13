import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter'; 
import './firebase/firebase';

const store = configureStore();

store.dispatch(addExpense({description:'Gas Bill', amount:0,createdAt: 1000}));
store.dispatch(addExpense({description:'Water Bill', amount :4500, createdAt:0}));
store.dispatch(addExpense({description:'Rent', amount :109000, createdAt:0}));
store.dispatch(addExpense({description:'milk', amount :9000, createdAt:300}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters); 
console.log('visibleExpenses tetsing');

const jsx = (
    <Provider store = {store}>
    
        <AppRouter />   
    
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));


