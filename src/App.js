import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import SharedLayout from "./page/SharedLayout";
import Subreddit from "./page/Subreddit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="r/:permalinkId" element={<Subreddit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
