import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllCategoriesThunk = createAsyncThunk(
  'categories/fetchAllCategories',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://wallet.goit.ua/api/transaction-categories'
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
