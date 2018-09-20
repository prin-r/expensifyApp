import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';
import moment from 'moment';

test('test setTextFilter with provided values', () => {
    const text = 'Some value';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: text
    });
});

test('test setTextFilter default', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('test sortByDate', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('test sortByAmount', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('test setStartDate default', () => {
    const action = setStartDate();
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: undefined
    });
});

test('test setStartDate with provided values', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('test endStartDate default', () => {
    const action = setEndDate();
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: undefined
    });
});

test('test endStartDate with provided values', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});