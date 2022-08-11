import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import FilterBar from "../Component/FilterBar";
import {
  actionsCategory,
  getSubredditData,
  getHomeData,
} from "../Component/categoriesSlice";
import { useSelector, useDispatch } from "react-redux";
import { articleActions } from "../Component/ArticleSlice";
import Modal from "../Component/Modal";
import arrowUpPic from "../Media/arrow-upward-pic.png";
import arrowDownPic from "../Media/arrow-downward-pic.png";
import share from "../Media/share-svg.svg";
import comment from "../Media/comment-svg.svg";
import save from "../Media/save.svg";
import dot from "../Media/dot.svg";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.category.data);
  const navigate = useNavigate();
  const { subId } = useParams();
  // we use useState to know if the modal is open or close.
  const [isOpen, setIsOpen] = useState(false);

  const getMedia = (url) => {
    return url.replace(new RegExp(`(https://)(.)(\.redd)(\.*$)`), "$2");
  };

  const handleScore = (e) => {
    e.stopPropagation();
  };

  const handleClick = (e) => {
    e.preventDefault();
    let id = e.target.closest("a").id;
    const dataForArticle = data.data.children[Number(id)].data.permalink;
    dispatch(articleActions.updatePermalink(dataForArticle));
    setIsOpen(true);
  };

  useEffect(() => {
    const fetchData = (async) => {
      dispatch(getHomeData());
    };
    fetchData();
  }, []);

  console.log("data", data, "prams", subId);
  if (!isOpen) {
    return (
      <div className="homeContainer">
        <Modal onClose={() => setIsOpen(false)} open={isOpen}></Modal>
        <FilterBar />

        {data
          ? data.data.children.map((el, idx) => {
              let text;
              if (el.data.selftext && el.data.selftext.length > 150) {
                text = el.data.selftext.slice(0, 250).concat("...");
              } else text = el.data.selftext;
              return (
                <Link
                  id={idx}
                  onClick={handleClick}
                  to={`test`}
                  className="LinkHomeCard"
                  key={idx}
                >
                  <div className="homeCard">
                    <div className="leftHomeCard">
                      <button
                        className="buttonScoreHomeCard"
                        // onClick={handleScore}
                      >
                        <img className="picHomeCard" src={arrowUpPic} />
                      </button>
                      <p>{el.data.score}</p>
                      <button
                        className="buttonScoreHomeCard"
                        // onClick={handleScore}
                      >
                        <img className="picHomeCard" src={arrowDownPic} />
                      </button>
                    </div>
                    <div className="rightHomeCard">
                      <p className="authorHomeCard">
                        Posted by u/{el.data.author}
                      </p>
                      <h4 className="titleHomeCard">{el.data.title}</h4>
                      {text ? <p className="textHomeCard">{text}</p> : null}
                      {getMedia(el.data.url) == "i" ? (
                        <img
                          src={el.data.url}
                          className="picAndVidHomeCardBody"
                        />
                      ) : getMedia(el.data.url) == "v" ? (
                        <video
                          src={el.data.media.reddit_video.fallback_url}
                          autoPlay
                          muted
                          controls
                          webkit-playsinline
                          playsinline
                          className="picAndVidHomeCardBody"
                        ></video>
                      ) : null}
                      <div className="bottomHomeCard">
                        <img className="picBottomHomeCard" src={comment} />
                        <p className="commentHomeCard">
                          {el.data.num_comments}
                        </p>
                        <img className="picBottomHomeCard" src={share} />
                        <p className="commentHomeCard">Share</p>
                        <img className="picBottomHomeCard" src={save} />
                        <p className="commentHomeCard">Save</p>
                        <img className="picBottomHomeCard" src={dot} />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })
          : null}
      </div>
    );
  } else
    return (
      <div className="subredditContainer">
        <Modal
          onClose={() => {
            setIsOpen(false);
            navigate("");
          }}
          open={isOpen}
        />
        <div>Subreddit</div>
        <FilterBar />
      </div>
    );
};

export default Home;
