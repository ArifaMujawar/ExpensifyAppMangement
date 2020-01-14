import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {startSetExpenses} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter'; 
import './firebase/firebase';

const store = configureStore();


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters); 
console.log('visibleExpenses tetsing');

const jsx = (
    <Provider store = {store}>
        <AppRouter />   
        </Provider>
);

ReactDOM.render(<p>Loading....</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});

