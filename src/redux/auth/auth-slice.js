import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { registration, logIn, logOut, refreshUser } from './auth-operations';

const handlePending = state => {
  state.isLoggedIn = false;
  state.error = null;
}
const handleRejected = (state, { payload }) => {
  state.isLoggedIn = false;
  state.error = payload;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { id: nanoid(), username: null, email: null, balance: 0 },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(registration.pending, handlePending)
      .addCase(registration.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(registration.rejected,handleRejected)

      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, handleRejected)

      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, state => {
        state.user = { username: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, handleRejected)

      .addCase(refreshUser.pending, state => {
        state.isLoggedIn = true;
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.error = payload;
      }),
});

export const authReducer = authSlice.reducer;
