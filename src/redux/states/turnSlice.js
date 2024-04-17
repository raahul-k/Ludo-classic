import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTurn: 0,
};

export const turnSlice = createSlice({
  name: "turn",
  initialState,
  reducers: {
    incrementTurn: (state, action) => {
      const numPlayers = action.payload.numPlayers;
      let nextTurn = state.currentTurn + 1;
      if (nextTurn >= numPlayers) {
        nextTurn = 0;
      }
      state.currentTurn = nextTurn;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementTurn } = turnSlice.actions;

export default turnSlice.reducer;
