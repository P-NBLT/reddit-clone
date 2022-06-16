import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Subreddit.css";
import { Link, useParams } from "react-router-dom";
import { getSubredditData } from "../Component/categoriesSlice";
import FilterBar from "../Component/FilterBar";
import arrowUpPic from "../Media/arrow-upward-pic.png";
import arrowDownPic from "../Media/arrow-downward-pic.png";
import share from "../Media/share-svg.svg";
import comment from "../Media/comment-svg.svg";
import save from "../Media/save.svg";
import dot from "../Media/dot.svg";

const Subreddit = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const topic = useSelector((state) => state.category.topic);
  const data = useSelector((state) => state.category.data);
  const status = useSelector((state) => state.category.loading);
  const { subId } = useParams();
  const test = data.data.children[0].data.subreddit;
  const pattern = `/(^.*)(${test}\/)(.*$)/`;
  const modifiedPermalink = data.data.children[0].data.permalink.replace(
    new RegExp(pattern),
    "$3"
  );
  console.log("pattern", pattern);
  console.log("modified", modifiedPermalink);

  console.log("subId", subId);

  console.log("data", data);

  const handleScore = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    setCategory(topic);
    const fetchData = async () => {
      if (topic) {
        dispatch(getSubredditData(topic));
      }
    };
    fetchData();
  }, [topic]);

  return (
    <div className="subredditContainer">
      <div>Subreddit</div>
      <FilterBar />
      {data
        ? data.data.children.map((el, idx) => {
            let text;
            if (el.data.selftext && el.data.selftext.length > 150) {
              console.log("text is long");
              text = el.data.selftext.slice(0, 250).concat("...");
            } else text = el.data.selftext;
            return (
              <Link to={`${el.data.permalink}`} className="LinkSubredditCard">
                <div className="subbreditCard" key={idx}>
                  <div className="leftSubbreditCard">
                    <button
                      className="buttonScoreSubbreditCard"
                      onClick={handleScore}
                    >
                      <img className="picSubbreditCard" src={arrowUpPic} />
                    </button>
                    <p>{el.data.score}</p>
                    <button
                      className="buttonScoreSubbreditCard"
                      onClick={handleScore}
                    >
                      <img className="picSubbreditCard" src={arrowDownPic} />
                    </button>
                  </div>
                  <div className="rightSubbreditCard">
                    <p className="authorSubbreditCard">
                      Posted by u/{el.data.author}
                    </p>
                    <h4 className="titleSubbreditCard">{el.data.title}</h4>
                    {text ? <p className="textSubbreditCard">{text}</p> : null}
                    <div className="bottomSubbreditCard">
                      <img className="picBottomSubbreditCard" src={comment} />
                      <p className="commentSubbreditCard">
                        {el.data.num_comments}
                      </p>
                      <img className="picBottomSubbreditCard" src={share} />
                      <p className="commentSubbreditCard">Share</p>
                      <img className="picBottomSubbreditCard" src={save} />
                      <p className="commentSubbreditCard">Save</p>
                      <img className="picBottomSubbreditCard" src={dot} />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })
        : null}
    </div>
  );
};

export default Subreddit;
