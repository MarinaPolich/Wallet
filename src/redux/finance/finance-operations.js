import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.headers.common.Authorization =
//   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiI1YWQzMGMzMS1lOWU0LTQ3ZDMtODEzYi0yMzU0OGE3ODhjODYiLCJpYXQiOjE2Njk2NDEzMjQsImV4cCI6MTAwMDAwMDE2Njk2NDEzMjR9.Vbj1sYtiPhWsvH1dLrH4dCpVVK3RaatJI162J9IqfqY';

axios.defaults.baseURL = 'https://wallet.goit.ua';

export const getAllTransactionsThunk = createAsyncThunk(
  'finance/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/transactions');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTransactionThunk = createAsyncThunk(
  'finance/addTransaction',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/api/transactions', data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTransactionThunk = createAsyncThunk(
  'finance/deleteTransaction',
  async (transactionId, thunkAPI) => {
    try {
      await axios.delete(`/api/transactions/${transactionId}`);

      return transactionId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editTransactionThunk = createAsyncThunk(
  'finance/editTransaction',
  async (transactionData, thunkAPI) => {
    try {
      const response = await axios.patch(
        `/api/transactions/${transactionData.id}`,
        {
          transactionDate: transactionData.transactionDate,
          type: transactionData.type,
          categoryId: transactionData.categoryId,
          comment: transactionData.comment,
          amount: transactionData.amount,
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
