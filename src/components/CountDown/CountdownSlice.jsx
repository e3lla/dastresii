import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hours: 12,
  minutes: 0,
  seconds: 0,
  isRunning: true
};

const countdownSlice = createSlice({
  name: "countdown",
  initialState,
  reducers: {
    decrementSecond: (state) => {
      if (state.seconds > 0) {
        state.seconds--;
        return;
      }
      if (state.minutes > 0) {
        state.minutes--;
        state.seconds = 59;
        return;
      }
      if (state.hours > 0) {
        state.hours--;
        state.minutes = 59;
        state.seconds = 59;
        return;
      }
      state.isRunning = false;
    }
  }
});

export const { decrementSecond } = countdownSlice.actions;
export default countdownSlice.reducer;
