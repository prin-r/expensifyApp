import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({ 
        type: 'REMOVE_EXPENSE', 
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', {note: 'blabla', createAt: '3513531'});
    expect(action).toEqual({ 
        type: 'EDIT_EXPENSE', 
        id: '123abc',
        updates: {note: 'blabla', createAt: '3513531'}
    });
});

test('should setup add expense action object with provided values', () => {

    const expenseData = {
        description: 'mumu',
        note: 'momo',
        amount: 500,
        createAt: 999
    };

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADDEXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    });
});

test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADDEXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createAt: 0
        }
    });
});