import { createSlice } from '@reduxjs/toolkit';
import { getAllCategoriesThunk } from './categories-operations';

const initialState = {
  items: [],
  error: '',
  isLoading: false,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllCategoriesThunk.pending, state => {
        state.isLoading = true;
      })

      .addCase(getAllCategoriesThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = '';
      })

      .addCase(getAllCategoriesThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
