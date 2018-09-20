import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state',() => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('test REMOVE_EXPENSE by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('test REMOVE_EXPENSE if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '999'
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('test ADDEXPENSE ', () => {
    const expense = {
        id: '4',
        description: 'Photo',
        note: '',
        amount: 9999,
        createAt: moment().endOf('month').valueOf()
    };
    const action = {
        type: 'ADDEXPENSE',
        expense
    };

    const state = expensesReducer(expenses,action);
    expect(state).toEqual([ ...expenses, expense ]);
});

test('test EDIT_EXPENSE by id', () => {
    const updates = {
        amount: 678,
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates
    };

    const state = expensesReducer(expenses,action);
    expect(state[1].amount).toBe(updates.amount);
});

test('test EDIT_EXPENSE id not found', () => {
    const updates = {
        description: 'Photo',
        amount: 678,
        createAt: moment().endOf('month').valueOf()
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: '999',
        updates
    };

    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});