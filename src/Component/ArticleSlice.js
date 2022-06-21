import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getArticleData = createAsyncThunk(
  "article/getArtcileData",
  async (permalink) => {
    console.log(permalink);
    const getData = await fetch(`https://www.reddit.com${permalink}.json`);
    const response = await getData.json();
    console.log("response", response);
    return response;
  }
);

const artcileSlice = createSlice({
  name: "article",
  initialState: { data: "", loading: "null", permalink: "" },
  reducers: {
    updatePermalink: (state, { payload }) => {
      state.permalink = payload;
    },
  },
  extraReducers: {
    [getArticleData.pending]: (state) => {
      state.loading = "loading";
    },
    [getArticleData.fulfilled]: (state, { payload }) => {
      state.loading = "success";
      state.data = payload;
    },
    [getArticleData.rejected]: (state) => {
      state.loading = "failed";
    },
  },
});

export const articleActions = artcileSlice.actions;

export default artcileSlice.reducer;
