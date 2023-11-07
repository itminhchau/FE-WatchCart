import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi';
import StorageKeys from 'constants/storage-keys';

export const login = createAsyncThunk('users/login', async (payload, thunkAPI) => {
  const res = await userApi.login(payload);
  if (res && res.data.errCode === 0) {
    localStorage.setItem(StorageKeys.TOKEN, res.data.access_token);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(res.data.customer));
  } else {
    return res.data;
  }
  return res.data.customer;
});
export const register = createAsyncThunk('users/register', async (payload, thunkAPI) => {
  const res = await userApi.register(payload);
  if (res && res.data.errCode === 0) {
    return res.data;
  } else {
    return res.data;
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    register: {},
  },
  reducers: {
    logOut: (state, action) => {
      localStorage.removeItem(StorageKeys.TOKEN);
      localStorage.removeItem(StorageKeys.USER);
      state.current = {};
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    // builder.addCase(register.fulfilled, (state, action) => {
    //   // Add user to the state array
    //   state.current = action.payload;
    // });

    builder.addCase(login.fulfilled, (state, action) => {
      // Add user to the state array
      state.current = action.payload;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      // Add user to the state array
      state.register = action.payload;
    });
  },
});

export const { actions, reducer } = userSlice;
export const { logOut } = actions;
export default reducer;
