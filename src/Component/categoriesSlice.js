import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getHomeData = createAsyncThunk(
  "category/getHomeData",
  async () => {
    const getData = await fetch(`https://www.reddit.com/.json`);
    const response = await getData.json();
    return response;
  }
);

export const getSubredditData = createAsyncThunk(
  "category/fetchSubreddit",
  async (topic) => {
    const getData = await fetch(`https://www.reddit.com/r/${topic}.json`);
    const response = await getData.json();
    return response;
  }
);

export const getFilteredSubredditData = createAsyncThunk(
  "category/getFilteredSubredditData",
  async (obj) => {
    const getData = await fetch(
      `https://www.reddit.com/r/${obj.topic}/${obj.option}.json`
    );
    const response = await getData.json();
    return response;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: { topic: "", data: "", loading: "null", option: "" },
  reducers: {
    updateCategory: (state, { payload }) => {
      state.topic = payload;
    },
    updateOption: (state, { payload }) => {
      state.option = payload;
    },
    resetLoading: (state) => {
      state.loading = "null";
    },
  },
  extraReducers: {
    [getHomeData.pending]: (state) => {
      state.loading = "lodaing";
    },
    [getHomeData.fulfilled]: (state, { payload }) => {
      state.loading = "succes";
      state.data = payload;
    },
    [getHomeData.rejected]: (state) => {
      state.loading = "failed";
    },
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
    [getFilteredSubredditData.pending]: (state) => {
      state.loading = "loading";
    },
    [getFilteredSubredditData.fulfilled]: (state, { payload }) => {
      state.loading = "succes";
      state.data = payload;
    },
    [getFilteredSubredditData.rejected]: (state) => {
      state.loading = "failed";
    },
  },
});

export const actionsCategory = categorySlice.actions;

export default categorySlice.reducer;
