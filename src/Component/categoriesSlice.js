import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getSubredditData = createAsyncThunk(
  "category/fetchSubreddit",
  async (topic) => {
    const getData = await fetch(`https://www.reddit.com/r/${topic}.json`);
    const response = await getData.json();
    return response;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: { topic: "", data: "", loading: "null" },
  reducers: {
    updateCategory: (state, { payload }) => {
      state.topic = payload;
    },
  },
  extraReducers: {
    [getSubredditData.pending]: (state) => {
      state.loading = "loading";
    },
    [getSubredditData.fulfilled]: (state, { payload }) => {
      state.loading = "succes";
      state.data = payload;
    },
    [getSubredditData.rejected]: (state) => {
      state.loading = "failed";
    },
  },
});

export const actionsCategory = categorySlice.actions;

export default categorySlice.reducer;
