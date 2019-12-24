
store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});


const expenseOne = store.dispatch(addExpense({description:'rent', amount:100,createdAt:-321000}));
const expenseTwo = store.dispatch(addExpense({description:'lunch', amount:9000, createdAt:-3000}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

//store.dispatch(setTextFilter('lun'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
//store.dispatch(setStartDate());
// store.dispatch(setEndDate(123));

const demoState = {
    expenses:[{
        id: 'jdfhc',
        description: 'jan rent',
        note: 'jhficsdkbcksfjnc',
        amount: '3746',
        createdAt: 0
    }],
    filters:{
        text: 'sjdkds',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};