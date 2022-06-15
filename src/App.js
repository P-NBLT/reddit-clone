import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Component/NavBar/NavBar";
import Home from "./page/Home";
import SharedLayout from "./page/SharedLayout";
import Subreddit from "./page/Subreddit";

function App() {
  
  return (
    <ChakraProvider>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="r/:permalinkId" element={<Subreddit />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
