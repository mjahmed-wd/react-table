import { createSlice } from "@reduxjs/toolkit";

const initState = {
  localData: [],
  counter: 0,
};

export const localStorageSlice = createSlice({
  name: "localStorage",
  initialState: initState,
  reducers: {
    setLocalStorageEmpty: (state, action) => {
      return initState;
    },
    setCounter: (state, action) => {
      const { payload } = action;
      state.counter = payload;
    },
    setLocalData: (state, action) => {
      const { payload } = action;
      state.localData = payload;
    },

  },
});
