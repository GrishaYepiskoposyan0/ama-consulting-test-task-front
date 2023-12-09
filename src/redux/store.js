import { configureStore } from "@reduxjs/toolkit";
import recordReducer from "./recordSlice.jsx";
export const store = configureStore({
  reducer: {
    records: recordReducer,
  },
});
