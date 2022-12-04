import { createSlice } from '@reduxjs/toolkit';
import { sortByDate } from 'helpers/sorters';
import {
  addTransactionThunk,
  deleteTransactionThunk,
  editTransactionThunk,
  getAllTransactionsThunk,
} from './finance-operations';

const sortFunc = (arr) => arr.sort(sortByDate).reverse();
const calcBalance = (arr) => arr.map((item, index, arr) => {
  item.balanceAfter =
    (arr[index - 1]?.balanceAfter ?? 0) + item.amount;
  return item;
});
const initialState = {
  error: null,
  isLoading: false,
  transactions: [],
};
const financeSlice = createSlice({
  name: 'finance',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllTransactionsThunk.pending, state => {
        state.isLoading = true;
      })

      .addCase(getAllTransactionsThunk.fulfilled, (state, action) => {
        state.transactions = calcBalance(sortFunc(action.payload));
        state.isLoading = false;
        state.error = '';
      })

      .addCase(getAllTransactionsThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      .addCase(addTransactionThunk.pending, state => {
        state.isLoading = true;
      })

      .addCase(addTransactionThunk.fulfilled, (state, action) => {
        state.transactions = calcBalance(sortFunc([...state.transactions, action.payload]));
        state.isLoading = false;
        state.error = '';
      })

      .addCase(addTransactionThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      .addCase(deleteTransactionThunk.pending, state => {
        state.isLoading = true;
      })

      .addCase(deleteTransactionThunk.fulfilled, (state, action) => {
        state.transactions = calcBalance(sortFunc(state.transactions.filter(
          transaction => transaction.id !== action.payload
        )));
        state.isLoading = false;
        state.error = '';
      })

      .addCase(deleteTransactionThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      .addCase(editTransactionThunk.pending, state => {
        state.isLoading = true;
      })

      .addCase(editTransactionThunk.fulfilled, (state, action) => {
        state.transactions = calcBalance(sortFunc(state.transactions.map(item => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        })));
        state.isLoading = false;
        state.error = '';
      })

      .addCase(editTransactionThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const financeReducer = financeSlice.reducer;
