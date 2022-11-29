import { createSlice } from '@reduxjs/toolkit';
import { categories, transaction } from './operations';

const initialState = {
  expenseCategories: {},
  incomeCategories: {},
  transaction: [
    {
      id: '',
      transactionDate: '',
      type: '',
      comment: '',
      amount: 0,
      balanceAfter: 0,
      categoryId: '',
      userId: '',
    },
  ],
  // isLoggedIn: false,  ???????????????
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  extraReducers: {
    [categories.fulfilled](state, action) {
      state.expenseCategories = Object.fromEntries(
        action.payload
          .filter(({ type }) => type === 'EXPENSE')
          .map(({ id, name }) => [id, name])
      );
      state.incomeCategories = Object.fromEntries(
        action.payload
          .filter(({ type }) => type === 'INCOME')
          .map(({ id, name }) => [id, name])
      );
      // state.isLoggedIn = true;
    },
    [transaction.fulfilled](state, action) {
      state.transaction = action.payload;
      // state.isLoggedIn = true;
    },
    
  },
});

export const transactionReducer = transactionSlice.reducer;
