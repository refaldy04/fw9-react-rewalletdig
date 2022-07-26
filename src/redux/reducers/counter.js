import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    customValue: (state, action) => {
      state.value = parseInt(action.payload);
    },
  },
});

export const { increment, decrement, customValue } = counterSlice.actions;

export default counterSlice.reducer;
