import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenseTotal from '../selectors/expenseTotal';

export const ExpenseTotal = ({ expenseCount, expenseTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totaling {numeral(expenseTotal / 100).format('$0,0.00')}</h1>
        </div>
    );
};

const mapStateToProps = ({ expenses }) => {
    return selectExpenseTotal(expenses);
};

export default connect(mapStateToProps)(ExpenseTotal);