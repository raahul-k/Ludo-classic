import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playerPiecesElements: {
    P1: [],
    P2: [],
    P3: [],
    P4: [],
  },
};

export const selectPlayersSlice = createSlice({
  name: "playerPiecesElements",
  initialState,
  reducers: {
    setPlayerArray: (state, action) => {
      const { player, array } = action.payload;
      state.playerPiecesElements[player] = array;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPlayerArray } = selectPlayersSlice.actions;

export default selectPlayersSlice.reducer;
