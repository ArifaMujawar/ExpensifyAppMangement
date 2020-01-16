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
import AppRouter, {history} from './routers/AppRouter'; 
import {firebase} from  './firebase/firebase';

const store = configureStore();


// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters); 
console.log('visibleExpenses tetsing');

const jsx = (
    <Provider store = {store}>
        <AppRouter />   
        </Provider>
);


let hasRendered = false;
const renderApp = () => {
        if(!hasRendered){
            ReactDOM.render(jsx,document.getElementById('app'));
            hasRendered = true;
        }
};

ReactDOM.render(<p>Loading....</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(startSetExpenses()).then(()=>{
            renderApp();
            if(history.location.pathname === '/'){
                history.push('/dashboard');
            }
            console.log('login');
        });
    }else{
        renderApp();
       history.push('/');
       console.log('logout');
    }
});