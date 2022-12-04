import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrency } from './operations';

const currencySlice = createSlice({
  name: 'bank',
  initialState: {
    currency: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCurrency.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCurrency.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.currency = payload;
      })
      .addCase(fetchCurrency.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const currencyReducer = currencySlice.reducer;
