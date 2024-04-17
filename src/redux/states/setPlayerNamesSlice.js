import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: {
    P1: "",
    P2: "",
    P3: "",
    P4: "",
  },
};

export const setPlayerNamesSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    setPlayerNames: (state, action) => {
      const { player, name } = action.payload;
      state.players[player] = name;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPlayerNames } = setPlayerNamesSlice.actions;

export default setPlayerNamesSlice.reducer;
