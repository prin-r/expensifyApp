import selectExpensesTotal from '../../selectors/expenseTotal';
import expenses from '../fixtures/expenses'

test('test select of expense total if no expense',() => {
    const res = selectExpensesTotal([]);
    expect(res).toEqual({expenseCount: 0 , expenseTotal: 0});
});

test('test select of expense total with single expense',() => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toEqual({expenseCount: 1 , expenseTotal: 195});
});

test('test select of expense total with multiple expenses data',() => {
    const res = selectExpensesTotal(expenses);
    expect(res).toEqual({expenseCount: 3 , expenseTotal: 114195});
});