import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Component/NavBar/NavBar";
import Card from "./features/Search/Card";
import MaineSearchPage from "./features/Search/MaineSearchPage";
import SearchPage from "./features/Search/SearchPage";
import Home from "./page/Home";
import SharedLayout from "./page/SharedLayout";
import Subreddit from "./page/Subreddit";
import Article from "./page/Article";
import Error from "./Error";

function App() {

  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="r/:subId" element={<Subreddit />}>
            <Route path=":permalinkId" element={<Article />} />
          </Route>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
=======
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
            {/* <Route path="/" element={<SharedLayout />} />  */}
            <Route index element={<Home />} />
            <Route path="r/:permalinkId" element={<Subreddit />} />
            <Route  path="search/" element={<SearchPage />} />
            <Route path='/r/:id1/comments/:id2/:id3/' element={<Card />} />
          </Routes>
        
      </BrowserRouter>

    </ChakraProvider>
>>>>>>> 9d0faa4f48940de623c5c6a4712f582f8b16ca34
  );
}

export default App;
