import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilteredSubredditData, actionsCategory } from "./categoriesSlice";
import categoriesSlice from "./categoriesSlice";
import "./FilterBar.css";
import hot from "../Media/hot.svg";
import hotActive from "../Media/hot-active.svg";
import top from "../Media/top.svg";
import topActive from "../Media/top-active.svg";
import newPic from "../Media/new.svg";
import newActive from "../Media/new-active.svg";
import dot from "../Media/dot.svg";

const FilterBar = () => {
  const dispatch = useDispatch();
  const topic = useSelector((state) => state.category.topic);
  const option = useSelector((state) => state.category.option);

  const handleClick = (e) => {
    const pastId = document.querySelector(".active").id;
    let id = e.target.id;

    const getSrc = document.getElementById(id).firstChild;
    const getClass = document.querySelector(".active").firstChild.src;
    document.querySelector(".active").firstChild.src =
      pastId == "hot"
        ? hot
        : pastId == "new"
        ? newPic
        : pastId == "top"
        ? top
        : pastId == "dot"
        ? dot
        : null;
    document.querySelector(".active").classList.remove("active");

    document.getElementById(id).classList.add("active");
    document.querySelector(".active").firstChild.src =
      id == "hot"
        ? hotActive
        : id == "new"
        ? newActive
        : id == "top"
        ? topActive
        : id == "dot"
        ? dot
        : null;
    dispatch(actionsCategory.updateOption(id));
  };

  useEffect(() => {
    const fetchData = async () => {
      if (topic && option) {
        dispatch(getFilteredSubredditData({ topic, option }));
      }
    };
    fetchData();
  }, [option]);

  return (
    <div className="filterBarContainer">
      <button className="filterBarButton active" id="hot" onClick={handleClick}>
        <img src={hotActive} id="hot" />
        <p id="hot">Hot</p>
      </button>

      <button className="filterBarButton" id="new" onClick={handleClick}>
        <img src={newPic} id="new" />
        <p id="new">New</p>
      </button>
      <button className="filterBarButton" id="top" onClick={handleClick}>
        <img src={top} id="top" />
        <p id="top">Top</p>
      </button>
      <button className="filterBarButton dot" onClick={handleClick} id="dot">
        <img src={dot} id="dot" />
      </button>
    </div>
  );
};

export default FilterBar;
