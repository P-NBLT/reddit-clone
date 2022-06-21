import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import SharedLayout from "./page/SharedLayout";
import Subreddit from "./page/Subreddit";
import Article from "./page/Article";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="r/:subId" element={<Subreddit />}>
            <Route path=":permalinkId" element={<Article />} />
          </Route>
          <Route path="test" element={<Article />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
