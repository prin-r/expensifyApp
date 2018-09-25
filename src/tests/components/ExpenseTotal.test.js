import React from 'react';
import expenses from '../fixtures/expenses';
import { ExpenseTotal } from '../../components/ExpenseTotal';
import { shallow } from 'enzyme';

test('test total expense component with 1 expense', () => {
    const wrapper = shallow(<ExpenseTotal expenseCount={1} expenseTotal={999} /> );
    expect(wrapper).toMatchSnapshot();
});

test('test total expense component with multiple expenses', () => {
    const wrapper = shallow(<ExpenseTotal expenseCount={3} expenseTotal={3478409023858} /> );
    expect(wrapper).toMatchSnapshot();
});