 import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {startSetExpenses} from './actions/expenses';
import {login, logout} from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter, {history} from './routers/AppRouter'; 
import {firebase} from  './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import App from './playground/hooks';

// const store = configureStore();

// const jsx = (
//     <Provider store = {store}>
//         <AppRouter />   
//         </Provider>
// );


// let hasRendered = false;
// const renderApp = () => {
//         if(!hasRendered){
//             ReactDOM.render(jsx,document.getElementById('app'));
//             hasRendered = true;
//         }
// };
//ReactDOM.render(<LoadingPage/>, document.getElementById('app'));

// firebase.auth().onAuthStateChanged((user)=>{
//     if(user){
//         console.log('uid',user.uid);
//         store.dispatch(login(user.uid));
//         store.dispatch(startSetExpenses()).then(()=>{
//             renderApp();
//             if(history.location.pathname === '/'){
//                 history.push('/dashboard');
//             }
//             console.log('login');
//         });
//     }else{
//         store.dispatch(logout());
//         renderApp();
//        history.push('/');
//        console.log('logout');
//     }
// });

//uncomment all to return to normal

ReactDOM.render(<App/>, document.getElementById('app'));
