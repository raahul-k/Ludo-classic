import { createSlice } from "@reduxjs/toolkit";
import { STATE } from "../../../logic/constants";

const initialState = {
  diceState: STATE.DICE_NOT_ROLLED,
};

export const diceStateSlice = createSlice({
  name: "diceState",
  initialState,
  reducers: {
    setDiceState: (state) => {
      return {
        ...state,
        diceState:
          state.diceState === STATE.DICE_NOT_ROLLED
            ? STATE.DICE_ROLLED
            : STATE.DICE_NOT_ROLLED,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDiceState } = diceStateSlice.actions;

export default diceStateSlice.reducer;
