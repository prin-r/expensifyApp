import React from 'react';
import ExpenseForm from './ExpenseForm'
import { addExpense } from '../actions/expenses';
import { connect } from 'react-redux';

const AddExpensePage = ({ dispatch, history }) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit={(expense) => {
                dispatch(addExpense(expense));
                history.push('/');
            }}
        />
    </div>
);

export default connect()(AddExpensePage);