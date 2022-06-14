import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSubredditData } from "../Component/categoriesSlice";

const Subreddit = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const topic = useSelector((state) => state.category.topic);
  const data = useSelector((state) => state.category.data);
  const status = useSelector((state) => state.category.loading);
  const { permalinkId } = useParams();
  console.log(permalinkId);
  console.log("data", data);

  // console.log(data.data.children[0].data.created);

  useEffect(() => {
    setCategory(topic);
    const fetchData = async () => {
      if (topic) {
        dispatch(getSubredditData(topic));
      }
    };
    fetchData();
  }, [topic]);

  // console.log(new Date(1652635775 * 1000).getHours());
  return (
    <div>
      <div>Subreddit</div>
      <p>
        date creation = {permalinkId}
        {/* {new Date(data.data.children[0].data.created * 1000).getHours()} */}
      </p>
    </div>
  );
};

export default Subreddit;
