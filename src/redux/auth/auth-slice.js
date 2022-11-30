import { createSlice } from '@reduxjs/toolkit';
import { registration, logIn, logOut, refreshUser } from './auth-operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { username: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(registration.pending, state => {
        state.isLoggedIn = true;
      })
      .addCase(registration.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(registration.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(logIn.pending, state => {
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.pending, state => {
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, {payload}) => {
        state.isRefreshing = false;
        state.error = payload;
      }),
});

export const authReducer = authSlice.reducer;
