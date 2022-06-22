import { configureStore } from "@reduxjs/toolkit";

import categoriesSlice from "../Component/categoriesSlice";
import { CardsSlice } from "../features/Search/CardsSlice";
import { searchSlice } from "../features/Search/searchSlice";

export const store = configureStore({
  reducer: {
    category: categoriesSlice,
    search:searchSlice.reducer,
    card:CardsSlice.reducer
  },
});
