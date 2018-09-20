import React from 'react';
import ExpenseForm from './ExpenseForm'
import { editExpense } from '../actions/expenses';
import { removeExpense } from '../actions/expenses';
import { connect } from 'react-redux';

const EditExpensePage = ({ expense, dispatch, history, match }) => {
    return (
        <div>
            Editing the expense with id of {match.params.id}
            <ExpenseForm
                expense={expense}
                onSubmit={(expense) => {
                    dispatch(editExpense(match.params.id, expense));
                    history.push('/');
                }}
            />
            <button onClick={() => {
                dispatch(removeExpense({ id: match.params.id }));
                history.push('/');
            }}>remove</button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find(expense => expense.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditExpensePage);