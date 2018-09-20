import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// add expense
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createAt = 0
    } = {}
) => ({
    type: 'ADDEXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createAt
    }
});
// remove expense
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
// edit expense
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
// set text filter
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});
// sort by date
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
});
// sort by amount
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
}); 
// set start date
const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});
// set end date
const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case('ADDEXPENSE'):
            return [
                ...state,
                action.expense
            ];
        case('REMOVE_EXPENSE'):
            return state.filter(({ id }) => id !== action.id );
        case('EDIT_EXPENSE'):
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if (sortBy === 'date') {
            return a.createAt < b.createAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
});

const expense1 = store.dispatch(addExpense({description: 'Rent', amount: 100, createAt: -21000}));
const expense2 = store.dispatch(addExpense({description: 'Coffee', amount: 300, createAt: -1000}));

// store.dispatch(removeExpense({id: expense1.expense.id}));

// store.dispatch(editExpense(expense2.expense.id, {amount: 500}));

//store.dispatch(setTextFilter("ffe"));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// // store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));

const demoState = {
    expense: [{
        id: 'dsgdsfsg',
        description: 'Momo Rent',
        note: 'this was the final payment for that',
        amount: 5400,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sort: 'date', //date or amount 
        startDate: undefined,
        endDate: undefined
    }
};

