import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import categoriesSlice from "../Component/categoriesSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    category: categoriesSlice,
  },
});
