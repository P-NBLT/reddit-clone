import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionsCategory } from "./categoriesSlice";
import categoriesSlice from "./categoriesSlice";

const Categories = () => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    let word = e.target.textContent.toLowerCase();
    console.log(word);
    let test;
    switch (word) {
      case "entertainement":
        word = "funny";
        break;
      case "world news":
        word = "worldnews";
        break;
      case "cute pics":
        word = "aww";
        break;
      default:
        word = word;
        break;
    }
    dispatch(actionsCategory.updateCategory(word));
  };
  return (
    <div>
      <div>
        <p onClick={handleClick}>Home</p>
        <p onClick={handleClick}>World News</p>
        <p onClick={handleClick}>Entertainement</p>
        <p onClick={handleClick}>Gaming</p>
        <p onClick={handleClick}>Cute Pics</p>
        <p onClick={handleClick}>Memes</p>
        <p onClick={handleClick}>Movies</p>
        <p onClick={handleClick}>Technology</p>
        <p onClick={handleClick}>Science</p>
        <p onClick={handleClick}>Space</p>
        <p onClick={handleClick}>Sports</p>
        <p onClick={handleClick}>Food</p>
      </div>
    </div>
  );
};

export default Categories;
