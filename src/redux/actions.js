import { localStorageSlice } from "./slice";
const { actions: slice } = localStorageSlice;

export const setLocalDataAction = (payload) => (dispatch) => {
  dispatch(slice.setLocalData(payload));
};

export const setCounterAction = (payload) => (dispatch) => {
  dispatch(slice.setCounter(payload));
};

export const setLocalStorageEmptyAction = () => (dispatch) => {
  dispatch(slice.setLocalStorageEmpty());
};