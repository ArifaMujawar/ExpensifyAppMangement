import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/Header';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import HelpExpensePage from '../components/HelpExpensePage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import ExpensesTotal from '../selectors/expenses-total';

export const history = createHistory();



const AppRouter = () => (
    <Router history={history}>
        <div>
        <Header />
       
        <Switch>
            <Route path = "/" component= {LoginPage}  exact= {true}/>
            <Route path = "/dashboard" component= {ExpenseDashboardPage} />
            <Route path = "/create" component = {AddExpensePage}/>
            <Route path = "/edit/:id" component= {EditExpensePage} />
            <Route path = "/help" component= {HelpExpensePage} />
            <Route component={NotFoundPage}/>
        </Switch>
        </div>
    </Router>
);
export default AppRouter;