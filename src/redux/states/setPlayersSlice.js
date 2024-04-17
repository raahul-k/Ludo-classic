import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numPlayers: 0,
};

export const setPlayersSlice = createSlice({
  name: "numPlayers",
  initialState,
  reducers: {
    setVal: (state, action) => {
      state.numPlayers = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setVal } = setPlayersSlice.actions;

export default setPlayersSlice.reducer;
