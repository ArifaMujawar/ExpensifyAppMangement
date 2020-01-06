import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpensesSummary';
const ExpenseDashboardPage = () => (
    <div>
        <ExpenseSummary />
        <ExpenseList />
        <ExpenseListFilters />
    </div>
);
export default ExpenseDashboardPage;