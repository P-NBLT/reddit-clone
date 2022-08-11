import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Subreddit.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  actionsCategory,
  getSubredditData,
} from "../Component/categoriesSlice";
import FilterBar from "../Component/FilterBar";
import arrowUpPic from "../Media/arrow-upward-pic.png";
import arrowDownPic from "../Media/arrow-downward-pic.png";
import share from "../Media/share-svg.svg";
import comment from "../Media/comment-svg.svg";
import save from "../Media/save.svg";
import dot from "../Media/dot.svg";
import { articleActions } from "../Component/ArticleSlice";
import Modal from "../Component/Modal";

const Subreddit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const topic = useSelector((state) => state.category.topic.toLowerCase());
  const data = useSelector((state) => state.category.data);
  const status = useSelector((state) => state.category.loading);
  const { permalinkId } = useParams();
  const { subId } = useParams();
  console.log("params", subId, permalinkId, data);
  // we use useState to know if the modal is open or close.
  const [isOpen, setIsOpen] = useState(false);

  const getMedia = (url) => {
    return url.replace(new RegExp(`(https://)(.)(\.*$)`), "$2");
  };

  useEffect(() => {
    const fetchData = async () => {
      if (topic) {
        dispatch(getSubredditData(topic));
      }
    };
    fetchData();
  }, [topic]);

  useEffect(() => {
    dispatch(actionsCategory.updateCategory(subId));
  }, [subId]);

  const handleClick = (e) => {
    let id = e.target.closest("a").id;
    const dataForArticle = data.data.children[Number(id)].data.permalink;
    console.log("id", id);
    dispatch(articleActions.updatePermalink(dataForArticle));
    setIsOpen(true);
  };
  console.log("pape veut voir la data ", data);
  // console.log("open", isOpen);
  if (!isOpen) {
    return (
      <div className="subredditContainerMaster">
        <div className="filterBar">
          <FilterBar />
        </div>
        {status == "succes" ? (
          <div className="subredditContainer">
            {/* <Modal onClose={() => setIsOpen(false)} open={isOpen}></Modal> */}
            {data
              ? data.data.children.map((el, idx) => {
                  let text;
                  if (el.data.selftext && el.data.selftext.length > 150) {
                    text = el.data.selftext.slice(0, 250).concat("...");
                  } else {
                    text = el.data.selftext;
                  }
                  return (
                    <Link
                      to={`${el.data.id}`}
                      className="LinkSubredditCard"
                      key={idx}
                      id={idx}
                      onClick={handleClick}
                    >
                      <div className="subbreditCard">
                        <div className="leftSubbreditCard">
                          <button
                            className="buttonScoreSubbreditCard"
                            // onClick={handleScore}
                          >
                            <img
                              className="picSubbreditCard"
                              src={arrowUpPic}
                            />
                          </button>
                          <p>{el.data.score}</p>
                          <button
                            className="buttonScoreSubbreditCard"
                            // onClick={handleScore}
                          >
                            <img
                              className="picSubbreditCard"
                              src={arrowDownPic}
                            />
                          </button>
                        </div>
                        <div className="rightSubbreditCard">
                          <p className="authorSubbreditCard">
                            Posted by u/{el.data.author}
                          </p>
                          <h4 className="titleSubbreditCard">
                            {el.data.title}
                          </h4>
                          {text ? (
                            <p className="textSubbreditCard">{text}</p>
                          ) : null}
                          {getMedia(el.data.url) == "i" ? (
                            <img
                              src={el.data.url}
                              className="picAndVidSubbreditCardBody"
                            />
                          ) : getMedia(el.data.url) == "v" ? (
                            <video
                              src={el.data.media.reddit_video.fallback_url}
                              autoPlay
                              muted
                              controls
                              webkit-playsinline
                              playsinline
                              className="picAndVidSubbreditCardBody"
                            ></video>
                          ) : null}
                          <div className="bottomSubbreditCard">
                            <img
                              className="picBottomSubbreditCard"
                              src={comment}
                            />
                            <p className="commentSubbreditCard">
                              {el.data.num_comments}
                            </p>
                            <img
                              className="picBottomSubbreditCard"
                              src={share}
                            />
                            <p className="commentSubbreditCard">Share</p>
                            <img
                              className="picBottomSubbreditCard"
                              src={save}
                            />
                            <p className="commentSubbreditCard">Save</p>
                            <img className="picBottomSubbreditCard" src={dot} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })
              : null}{" "}
          </div>
        ) : (
          <div className="imageLoading">
            <img
              src={
                "https://i.guim.co.uk/img/media/02c5fc2b42591243e6292fc83f8a97ed78807b57/198_0_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d31d7a8f045e54151b84076280aebca8"
              }
            />
            <p>Loading...</p>
          </div>
        )}
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
        ></Modal>
      </div>
    );
};

export default Subreddit;
