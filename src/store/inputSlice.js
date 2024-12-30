import {createSlice} from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: 'input',
  initialState: {value:""},
  reducers: {
    setInputValue: (state, action) => {
      state.value=action.payload;
    }
  }
});

export const inputActions = inputSlice.actions;

export default inputSlice;