import { combineReducers } from "@reduxjs/toolkit";
import { isLoadingReducer } from "./isLoadingReducer";
import { toastReducer } from "./toastReducer";

export const reducer = combineReducers({
  isLoadingReducer,
  toastReducer
})