import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseTotal from './ExpenseTotal';

const ExpenseDashboardPage = ({ history }) => (
    <div>
        <ExpenseTotal />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;
