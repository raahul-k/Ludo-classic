import { configureStore } from "@reduxjs/toolkit";
import startFlagSlice from "./states/startFlagSlice";
import formFlagSlice from "./states/formFlagSlice";
import setPlayerNamesSlice from "./states/setPlayerNamesSlice";
import setPlayersSlice from "./states/setPlayersSlice";
import diceSlice from "./states/diceSlice";
import diceStateSlice from "./states/diceStateSlice";
import turnSlice from "./states/turnSlice";
import selectPlayersSlice from "./states/selectPlayersSlice";

export const store = configureStore({
  reducer: {
    startFlag: startFlagSlice,
    formFlag: formFlagSlice,
    players: setPlayerNamesSlice,
    numPlayers: setPlayersSlice,
    diceValue: diceSlice,
    diceState: diceStateSlice,
    currentTurn: turnSlice,
    playerPiecesElements: selectPlayersSlice,
  },
});
