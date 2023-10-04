//counter slice

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      console.log("before increment");
      state.count += 1;
      console.log("after increment");
    },
    decrement: (state, action) => {
      console.log("before decrement");
      state.count -= 1;
      console.log("after decrement");
    },
  },
});


export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
