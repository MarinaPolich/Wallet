import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const instance = axios.create({
  baseURL: 'https://api.monobank.ua',
});

// const apiURL = 'https://api.monobank.ua/bank/currency';

export const fetchCurrency = createAsyncThunk(
  'bank/currency',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get('/bank/currency');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
