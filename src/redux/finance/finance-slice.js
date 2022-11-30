import { createSlice } from '@reduxjs/toolkit';
import { addTransactionThunk, getAllTransactionsThunk } from './finance-operations';
const initialState = {
    error: null,
    isLoading: false,
    transactions: [],
} 
const financeSlice = createSlice({
  name: 'finance',
  initialState, 
  extraReducers: 
    (builder) => {
        builder
          .addCase(getAllTransactionsThunk.pending, (state) => {
            state.isLoading = true;
            
          })
    
          .addCase(getAllTransactionsThunk.fulfilled, (state, action) => {
            state.transactions = action.payload;
            state.isLoading = false;
            state.error = "";    
          })
    
          .addCase(getAllTransactionsThunk.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
            
          })



          .addCase(addTransactionThunk.pending, (state) => {
            state.isLoading = true;
            
          })
    
          .addCase(addTransactionThunk.fulfilled, (state, action) => {
            state.transactions = [...state.transactions, action.payload];
            state.isLoading = false;
            state.error = "";    
          })
    
          .addCase(addTransactionThunk.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
            
          })
  },
});

export const financeReducer = financeSlice.reducer;
