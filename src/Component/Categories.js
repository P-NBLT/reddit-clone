import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionsCategory } from "./categoriesSlice";
import categoriesSlice from "./categoriesSlice";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import "./Categories.css";
import newsPic from "../Media/news-icon.png";
import homePic from "../Media/house-pic.png";
import cutePic from "../Media/cute-pic.png";
import funnyPic from "../Media/funny-pic.png";
import foodPic from "../Media/food-pic.png";
import gamingPic from "../Media/gaming-pic.png";
import memesPic from "../Media/memes-pic.png";
import moviesPic from "../Media/movies-pic.png";
import sciencePic from "../Media/science-pic.png";
import spacePic from "../Media/space-pic.png";
import sportsPic from "../Media/sports-pic.png";
import techPic from "../Media/tech-pic.png";

const Categories = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location);
  const handleClick = (e) => {
    let word = e.target.parentElement
      .getElementsByTagName("p")[0]
      .textContent.toLowerCase();

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
    <Box
      bg="white"
      w="100%"
      p={4}
      color="white"
      display="flex"
      flexWrap="wrap"
      justifyContent="space-around"
      flexBasis="100%"
      borderRadius="4px"
      border="1px solid #ccc"
    >
      <Box
        width="80px"
        textAlign="center"
        className="categoryTopicContainer"
        onClick={handleClick}
      >
        <Link to="r/home" className="link">
          <img src={homePic} className="categoryPic" />
          <p className="categoryTextTitle">Home</p>
        </Link>
      </Box>

      <Box
        width="80px"
        textAlign="center"
        className="categoryTopicContainer"
        onClick={handleClick}
      >
        <Link to="r/funny" className="link">
          <img src={funnyPic} className="categoryPic" />
          <p className="categoryTextTitle">Enterta</p>
        </Link>
      </Box>
      <Box
        width="80px"
        textAlign="center"
        className="categoryTopicContainer"
        onClick={handleClick}
      >
        <Link to="r/worldnews" className="link">
          <img src={newsPic} className="categoryPic" />
          <p className="categoryTextTitle">World News</p>
        </Link>
      </Box>

      <Box
        width="80px"
        textAlign="center"
        className="categoryTopicContainer"
        onClick={handleClick}
      >
        <Link to="r/gaming" className="link">
          <img src={gamingPic} className="categoryPic" />
          <p className="categoryTextTitle">Gaming</p>
        </Link>
      </Box>
      <Box
        width="80px"
        textAlign="center"
        className="categoryTopicContainer"
        onClick={handleClick}
      >
        <Link to="r/aww" className="link">
          <img src={cutePic} className="categoryPic" />
          <p className="categoryTextTitle">Cute Pics</p>
        </Link>
      </Box>

      <Box
        width="80px"
        textAlign="center"
        className="categoryTopicContainer"
        onClick={handleClick}
      >
        <Link to="r/memes" className="link">
          <img src={memesPic} className="categoryPic" />
          <p className="categoryTextTitle">Memes</p>
        </Link>
      </Box>
      <Box
        width="80px"
        textAlign="center"
        className="categoryTopicContainer"
        onClick={handleClick}
      >
        <Link to="r/movies" className="link">
          <img src={moviesPic} className="categoryPic" />
          <p className="categoryTextTitle">Movies</p>
        </Link>
      </Box>

      <Box
        width="80px"
        textAlign="center"
        className="categoryTopicContainer"
        onClick={handleClick}
      >
        <Link to="r/science" className="link">
          <img src={sciencePic} className="categoryPic" />
          <p className="categoryTextTitle">Science</p>
        </Link>
      </Box>
      <Box
        width="80px"
        textAlign="center"
        className="categoryTopicContainer"
        onClick={handleClick}
      >
        <Link to="r/space" className="link">
          <img src={spacePic} className="categoryPic" />
          <p className="categoryTextTitle">Space</p>
        </Link>
      </Box>

      <Box
        width="80px"
        textAlign="center"
        className="categoryTopicContainer"
        onClick={handleClick}
      >
        <Link to="r/technology" className="link">
          <img src={techPic} className="categoryPic" />
          <p className="categoryTextTitle">Technology</p>
        </Link>
      </Box>
      <Box
        width="80px"
        textAlign="center"
        className="categoryTopicContainer"
        onClick={handleClick}
      >
        <Link to="r/sports" className="link">
          <img src={sportsPic} className="categoryPic" />
          <p className="categoryTextTitle">Sports</p>
        </Link>
      </Box>

      <Box
        width="80px"
        textAlign="center"
        className="categoryTopicContainer"
        onClick={handleClick}
      >
        <Link to="r/food" className="link">
          <img src={foodPic} className="categoryPic" />
          <p className="categoryTextTitle">Food</p>
        </Link>
      </Box>
    </Box>
  );
};

export default Categories;
