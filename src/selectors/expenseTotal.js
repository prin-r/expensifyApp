export default (expenses) => {
    const total = expenses.length === 0 ?
                    0 : expenses
                        .map(expense => expense.amount)
                        .reduce((t , amount) => t + amount);
    return {
        expenseCount:expenses.length, 
        expenseTotal:total
    };
};