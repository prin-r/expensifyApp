import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('test ExpenseListItem with expenses', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('test ExpenseListItem with nothing', () => {
    const wrapper = shallow(<ExpenseListItem />);
    expect(wrapper).toMatchSnapshot();
});