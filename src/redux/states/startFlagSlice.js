import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  startFlag: true,
};

export const startFlagSlice = createSlice({
  name: "startFlag",
  initialState,
  reducers: {
    invertStartFlag: (state) => {
      state.startFlag = !state.startFlag;
    },
  },
});

// Action creators are generated for each case reducer function
export const { invertStartFlag } = startFlagSlice.actions;

export default startFlagSlice.reducer;
