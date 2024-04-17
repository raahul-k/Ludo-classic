import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  diceValue: 0,
};

export const diceSlice = createSlice({
  name: "diceValue",
  initialState,
  reducers: {
    setDiceValue: (state) => {
      state.diceValue = Math.floor(Math.random() * 6) + 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDiceValue } = diceSlice.actions;

export default diceSlice.reducer;
