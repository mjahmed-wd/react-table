import { combineReducers } from "@reduxjs/toolkit";
import { localStorageSlice } from "./slice";

export const rootReducer = combineReducers({
  localStorage: localStorageSlice.reducer
});
