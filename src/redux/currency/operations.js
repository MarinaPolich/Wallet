import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const apiURL = 'https://api.monobank.ua/bank/currency';


export const fetchCurrency = createAsyncThunk(
  'bank/currency',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(apiURL);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
