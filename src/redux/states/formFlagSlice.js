import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formFlag: false,
};

export const formFlagSlice = createSlice({
  name: "formFlag",
  initialState,
  reducers: {
    invertFormFlag: (state) => {
      state.formFlag = !state.formFlag;
    },
  },
});

// Action creators are generated for each case reducer function
export const { invertFormFlag } = formFlagSlice.actions;

export default formFlagSlice.reducer;
