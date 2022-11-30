import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.headers.common.Authorization =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiI1YWQzMGMzMS1lOWU0LTQ3ZDMtODEzYi0yMzU0OGE3ODhjODYiLCJpYXQiOjE2Njk2NDEzMjQsImV4cCI6MTAwMDAwMDE2Njk2NDEzMjR9.Vbj1sYtiPhWsvH1dLrH4dCpVVK3RaatJI162J9IqfqY';

export const getAllTransactionsThunk = createAsyncThunk(
  'finance/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://wallet.goit.ua/api/transactions'
      );
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTransactionThunk = createAsyncThunk(
  'finance/addTransaction',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://wallet.goit.ua/api/transactions',
        data
      );
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);


