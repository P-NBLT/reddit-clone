import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const Article = () => {
  const { permalinkId } = useParams();
  console.log("permalink", permalinkId);
  return <div>Article</div>;
};

export default Article;
