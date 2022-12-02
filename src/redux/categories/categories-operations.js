import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiJlNzc3ZjBhMi0wMjEwLTQ4NDYtYWIwMS1hMmQwMGExMWZmYzciLCJpYXQiOjE2Njk3MjA0OTYsImV4cCI6MTAwMDAwMDE2Njk3MjA0OTZ9.b8u-cBgeoILhDoP23uhxgOqcEm__wUmhMKsbLbQ3z54`;

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
