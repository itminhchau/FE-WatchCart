import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    clickProductHeader: false,
  },
  reducers: {
    setClickProductHeader: (state) => {
      state.clickProductHeader = !state.clickProductHeader;
    },
  },
});

export const { actions, reducer } = productSlice;
export const { setClickProductHeader } = actions;
export default reducer;
