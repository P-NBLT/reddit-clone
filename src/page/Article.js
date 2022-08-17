import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getArticleData } from "../Component/ArticleSlice";
import "./Article.css";
import arrowUpPic from "../Media/arrow-upward-pic.png";
import arrowDownPic from "../Media/arrow-downward-pic.png";
import share from "../Media/share-svg.svg";
import comment from "../Media/comment-svg.svg";
import save from "../Media/save.svg";
import dot from "../Media/dot.svg";
import arrowDown from "../Media/arrow-down.svg";
import arrowUp from "../Media/arrow-up.svg";
import report from "../Media/report.svg";
import hide from "../Media/hide.svg";
import bell from "../Media/bell.svg";
import Categories from "../Component/Categories";
import ModalLogin from "../Component/ModalLogin";

const Article = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const { permalinkId } = useParams();
  const permalink = useSelector((state) => state.article.permalink);
  const data = useSelector((state) => state.article.data);
  const status = useSelector((state) => state.article.loading);
  const [isOpen, setIsOpen] = useState(false);
  let img, result;
  console.log("permalink", permalink, open);

  const getMedia = (url) => {
    return url.replace(new RegExp(`(https://)(.)(\.*$)`), "$2");
  };

  const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    const fetchData = async () => {
      if (open) {
        console.log("article it pass");
        dispatch(getArticleData(permalink));
      }
    };
    fetchData();
  }, [open]);

  useEffect(() => {
    if (data) {
      img = data[0].data.children[0].data.media_metadata
        ? Object.values(
            data[0].data.children[0].data.media_metadata
          )[0].p[0].u.replace(/amp;/g, "")
        : null;
      console.log(img);

      const renderTime = () => {
        const year =
          new Date().getFullYear() -
          new Date(data[0].data.children[0].data.created * 1000).getFullYear();
        const month =
          new Date().getMonth() -
          new Date(data[0].data.children[0].data.created * 1000).getMonth();
        const day =
          new Date().getDay() -
          new Date(data[0].data.children[0].data.created * 1000).getDay();
        const hour =
          new Date().getHours() -
          new Date(data[0].data.children[0].data.created * 1000).getHours();
        const minute =
          new Date().getMinutes() -
          new Date(data[0].data.children[0].data.created * 1000).getMinutes();
        console.log(year, month, day, hour, minute);

        if (year > 1) return (result = year.toString() + " years ago");
        else if (year > 0) return (result = year.toString() + " year ago");
        else if (month > 1) return (result = month.toString() + " months ago");
        else if (month > 0) return (result = month.toString() + " month ago");
        else if (day > 1) return (result = day.toString() + " days ago");
        else if (day > 0) return (result = day.toString() + "day ago");
        else if (hour > 1) return (result = hour.toString() + " hours ago");
        else if (hour > 0) return (result = hour.toString() + " hour ago");
        else if (minute > 1)
          return (result = minute.toString() + " minutes ago");
        else if (minute > 0)
          return (result = minute.toString() + " minute ago");
        else return "now";
      };
      renderTime();
    }
  }, [data]);
  //   console.log("opennnnnn", open);
  if (!isOpen) {
    return (
      <>
        {status == "success" ? (
          <>
            {data ? (
              <div className="fullContainerArticleCard">
                <div className="headerArticleCard">
                  <div className="leftHeaderArticleCard">
                    <div className="separatorHeaderArticleCard"></div>
                    <button
                      onClick={() => setIsOpen(true)}
                      className="arrowHeaderArticleCard"
                    >
                      <img src={arrowUp} />
                    </button>
                    <p className="scoreHeaderArticleCard">
                      {data[0].data.children[0].data.score}
                    </p>
                    <button
                      onClick={() => setIsOpen(true)}
                      className="arrowHeaderArticleCard"
                    >
                      <img src={arrowDown} />
                    </button>
                    <div className="separatorHeaderArticleCard"></div>
                    {data[0].data.children[0].data.title ? (
                      <p className="titleHeaderArticleHeader">
                        {data[0].data.children[0].data.title.slice(0, 40)}
                      </p>
                    ) : null}
                  </div>
                  <button className="rightHeaderArticleCard" onClick={onClose}>
                    <p className="crossCloseArticleCard">X</p>
                    <p>Close</p>
                  </button>
                </div>
                <div className="articleAndCommentsContainerMaster">
                  <div className="articleAndCommentsContainer">
                    <div className="articleCard">
                      <div className="leftArticleCard">
                        <button
                          onClick={() => setIsOpen(true)}
                          className="buttonArrow buttonUpScoreArticleCard small"
                        >
                          <img className="arrow" src={arrowUpPic} />
                        </button>
                        <p className="scoreArticleCard">
                          {data[0].data.children[0].data.score}
                        </p>
                        <button
                          onClick={() => setIsOpen(true)}
                          className=" buttonArrow buttonDownScoreArticleCard small"
                        >
                          <img className="arrow" src={arrowDownPic} />
                        </button>
                      </div>
                      <div className="righttArticleCard">
                        <div className="upArticleCard">
                          <div className="upLeftArticleCard">
                            <p className="subredditArticleCard">
                              r/{data[0].data.children[0].data.subreddit}
                            </p>
                            <p className="authorArticleCard">
                              · Posted by u/
                              {data[0].data.children[0].data.author} {result}.
                            </p>
                          </div>
                          <div className="upRightArticleCard">
                            <button
                              onClick={() => setIsOpen(true)}
                              className="bellArticleCard smallNoHover"
                            >
                              <img src={bell} />
                            </button>
                          </div>
                        </div>
                        <div className="middleArticleCard">
                          <h3 className="titleArticleCard">
                            {data[0].data.children[0].data.title}
                          </h3>
                          {data[0].data.children[0].data.selftext ? (
                            <p className="textArtcileCard">
                              {data[0].data.children[0].data.selftext}
                            </p>
                          ) : null}
                          {getMedia(data[0].data.children[0].data.url) ==
                          "i" ? (
                            <img
                              src={data[0].data.children[0].data.url}
                              className="picArticleCard"
                            />
                          ) : getMedia(data[0].data.children[0].data.url) ==
                            "v" ? (
                            <video
                              src={
                                data[0].data.children[0].data.media
                                  ? data[0].data.children[0].data.media
                                      .reddit_video.fallback_url
                                  : null
                              }
                              autoPlay
                              muted
                              controls
                              style={{
                                width: "300px",
                                height: "300px",
                              }}
                            ></video>
                          ) : null}
                        </div>
                        <div className="bottomArticleCard">
                          <div className="bottomLeftArticleCard">
                            <div>
                              <button
                                onClick={() => setIsOpen(true)}
                                className="buttonBottomArticleCard big"
                              >
                                <img scr={comment} />
                                <p>
                                  {data[0].data.children[0].data.num_comments}{" "}
                                  {parseInt(
                                    data[0].data.children[0].data.num_comments
                                  ) > 1
                                    ? "Comments"
                                    : "Comment"}
                                </p>
                              </button>
                            </div>
                            <div>
                              <button
                                onClick={() => setIsOpen(true)}
                                className="buttonBottomArticleCard big"
                              >
                                <img src={share} />
                                <p>Share</p>
                              </button>
                            </div>
                            <div>
                              <button
                                onClick={() => setIsOpen(true)}
                                className="buttonBottomArticleCard big"
                              >
                                <img src={save} />
                                <p>Save</p>
                              </button>
                            </div>
                            <div>
                              <button
                                onClick={() => setIsOpen(true)}
                                className="buttonBottomArticleCard hide"
                              >
                                <img src={hide} />
                                <p>Hide</p>
                              </button>
                            </div>
                            <div>
                              <button
                                onClick={() => setIsOpen(true)}
                                className="buttonBottomArticleCard report"
                              >
                                <img src={report} />
                                <p>Report</p>
                              </button>
                            </div>
                          </div>
                          <div className="buttomRightArticleCard upvoted">
                            <p>
                              {data[0].data.children[0].data.upvote_ratio * 100}
                              % Upvoted
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="logginForCommentsContainer">
                      <p>Login or sign up to leave a comment</p>
                      <div className="loggingForCommentsButton">
                        <button
                          onClick={() => setIsOpen(true)}
                          className="login"
                        >
                          Log in
                        </button>
                        <button
                          onClick={() => setIsOpen(true)}
                          className="signup"
                        >
                          Sign Up
                        </button>
                      </div>
                    </div>
                    <div className="commentArticleCard">
                      {data[1].data.children.length != 0 ? (
                        data[1].data.children.map((el, idx) => {
                          let time;
                          const year =
                            new Date().getFullYear() -
                            new Date(el.data.created * 1000).getFullYear();
                          const month =
                            new Date().getMonth() -
                            new Date(el.data.created * 1000).getMonth();
                          const day =
                            new Date().getDay() -
                            new Date(el.data.created * 1000).getDay();
                          const hour =
                            new Date().getHours() -
                            new Date(el.data.created * 1000).getHours();
                          const minute =
                            new Date().getMinutes() -
                            new Date(el.data.created * 1000).getMinutes();

                          if (year > 1) {
                            time = year.toString() + " years ago";
                          } else if (year > 0) {
                            time = year.toString() + " year ago";
                          } else if (month > 1) {
                            time = month.toString() + " months ago";
                          } else if (month > 0) {
                            time = month.toString() + " month ago";
                          } else if (day > 1) {
                            time = day.toString() + " days ago";
                          } else if (day > 0) {
                            time = day.toString() + "day ago";
                          } else if (hour > 1) {
                            time = hour.toString() + " hours ago";
                          } else if (hour > 0) {
                            time = hour.toString() + " hour ago";
                          } else if (minute > 1) {
                            time = minute.toString() + " minutes ago";
                          } else if (minute > 0) {
                            time = minute.toString() + " minute ago";
                          } else {
                            time = "now";
                          }

                          return (
                            <div key={idx} className="commentCard">
                              <div>
                                <div className="topCommentCard">
                                  <p>{el.data.author}</p>
                                  <p className="timeCommentCard">· {time}</p>
                                </div>
                                <p className="commentBodyAnswer">
                                  {el.data.body}
                                </p>
                                <div className="bottomCommentCard">
                                  <div>
                                    <button
                                      onClick={() => setIsOpen(true)}
                                      className="buttonCommentCard"
                                    >
                                      <img src={arrowUp} />
                                    </button>
                                  </div>
                                  <p className="scoreCommentCard">
                                    {el.data.score}
                                  </p>
                                  <div>
                                    <button
                                      onClick={() => setIsOpen(true)}
                                      className="buttonCommentCard"
                                    >
                                      <img src={arrowDown} />
                                    </button>
                                  </div>
                                  <div className="bottomLeftButtonCard">
                                    <div>
                                      <button
                                        onClick={() => setIsOpen(true)}
                                        className="buttonCommentCard"
                                      >
                                        {" "}
                                        <img src={comment} />
                                        <p> Reply</p>
                                      </button>
                                    </div>
                                    <div>
                                      <button
                                        onClick={() => setIsOpen(true)}
                                        className="buttonCommentCard"
                                      >
                                        <p>Save</p>
                                      </button>
                                    </div>
                                    <div>
                                      <button
                                        onClick={() => setIsOpen(true)}
                                        className="buttonCommentCard"
                                      >
                                        <p>Hide</p>
                                      </button>
                                    </div>
                                    <div>
                                      <button
                                        onClick={() => setIsOpen(true)}
                                        className="buttonCommentCard"
                                      >
                                        <p>Report</p>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <div className="noComment">
                          <p>No comment</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="articleCategoryCard">
                    <Categories />
                  </div>
                  <div className="moveToTopArticleCard">
                    <button onClick={backToTop}>Back to Top</button>
                  </div>
                </div>
              </div>
            ) : (
              "loading..."
            )}
          </>
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
      </>
    );
  } else {
    return (
      <>
        {data ? (
          <div className="fullContainerArticleCard">
            <div className="headerArticleCard">
              <div className="leftHeaderArticleCard">
                <div className="separatorHeaderArticleCard"></div>
                <button
                  onClick={() => setIsOpen(true)}
                  className="arrowHeaderArticleCard"
                >
                  <img src={arrowUp} />
                </button>
                <p className="scoreHeaderArticleCard">
                  {data[0].data.children[0].data.score}
                </p>
                <button
                  onClick={() => setIsOpen(true)}
                  className="arrowHeaderArticleCard"
                >
                  <img src={arrowDown} />
                </button>
                <div className="separatorHeaderArticleCard"></div>
                {data[0].data.children[0].data.title ? (
                  <p className="titleHeaderArticleHeader">
                    {data[0].data.children[0].data.title.slice(0, 40)}
                  </p>
                ) : null}
              </div>
              <button className="rightHeaderArticleCard" onClick={onClose}>
                <p className="crossCloseArticleCard">X</p>
                <p>Close</p>
              </button>
            </div>
            <div className="articleAndCommentsContainerMaster">
              <div className="articleAndCommentsContainer">
                <div className="articleCard">
                  <div className="leftArticleCard">
                    <button
                      onClick={() => setIsOpen(true)}
                      className="buttonArrow buttonUpScoreArticleCard small"
                    >
                      <img className="arrow" src={arrowUpPic} />
                    </button>
                    <p className="scoreArticleCard">
                      {data[0].data.children[0].data.score}
                    </p>
                    <button
                      onClick={() => setIsOpen(true)}
                      className=" buttonArrow buttonDownScoreArticleCard small"
                    >
                      <img className="arrow" src={arrowDownPic} />
                    </button>
                  </div>
                  <div className="righttArticleCard">
                    <div className="upArticleCard">
                      <div className="upLeftArticleCard">
                        <p className="subredditArticleCard">
                          r/{data[0].data.children[0].data.subreddit}
                        </p>
                        <p className="authorArticleCard">
                          · Posted by u/{data[0].data.children[0].data.author}{" "}
                          {result}.
                        </p>
                      </div>
                      <div className="upRightArticleCard">
                        <button
                          onClick={() => setIsOpen(true)}
                          className="bellArticleCard smallNoHover"
                        >
                          <img src={bell} />
                        </button>
                      </div>
                    </div>
                    <div className="middleArticleCard">
                      <h3 className="titleArticleCard">
                        {data[0].data.children[0].data.title}
                      </h3>
                      {data[0].data.children[0].data.selftext ? (
                        <p className="textArtcileCard">
                          {data[0].data.children[0].data.selftext}
                        </p>
                      ) : null}
                      {img ? (
                        <img src={img} className="picArticleCard" />
                      ) : null}
                    </div>
                    <div className="bottomArticleCard">
                      <div className="bottomLeftArticleCard">
                        <div>
                          <button
                            onClick={() => setIsOpen(true)}
                            className="buttonBottomArticleCard big"
                          >
                            <img scr={comment} />
                            <p>
                              {data[0].data.children[0].data.num_comments}{" "}
                              {parseInt(
                                data[0].data.children[0].data.num_comments
                              ) > 1
                                ? "Comments"
                                : "Comment"}
                            </p>
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={() => setIsOpen(true)}
                            className="buttonBottomArticleCard big"
                          >
                            <img src={share} />
                            <p>Share</p>
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={() => setIsOpen(true)}
                            className="buttonBottomArticleCard big"
                          >
                            <img src={save} />
                            <p>Save</p>
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={() => setIsOpen(true)}
                            className="buttonBottomArticleCard hide"
                          >
                            <img src={hide} />
                            <p>Hide</p>
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={() => setIsOpen(true)}
                            className="buttonBottomArticleCard report"
                          >
                            <img src={report} />
                            <p>Report</p>
                          </button>
                        </div>
                      </div>
                      <div className="buttomRightArticleCard upvoted">
                        <p>
                          {data[0].data.children[0].data.upvote_ratio * 100}%
                          Upvoted
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="logginForCommentsContainer">
                  <p>Login or sign up to leave a comment</p>
                  <div className="loggingForCommentsButton">
                    <button onClick={() => setIsOpen(true)} className="login">
                      Log in
                    </button>
                    <button onClick={() => setIsOpen(true)} className="signup">
                      Sign Up
                    </button>
                  </div>
                </div>
                <div className="commentArticleCard">
                  {data[1].data.children.length != 0 ? (
                    data[1].data.children.map((el, idx) => {
                      let time;
                      const year =
                        new Date().getFullYear() -
                        new Date(el.data.created * 1000).getFullYear();
                      const month =
                        new Date().getMonth() -
                        new Date(el.data.created * 1000).getMonth();
                      const day =
                        new Date().getDay() -
                        new Date(el.data.created * 1000).getDay();
                      const hour =
                        new Date().getHours() -
                        new Date(el.data.created * 1000).getHours();
                      const minute =
                        new Date().getMinutes() -
                        new Date(el.data.created * 1000).getMinutes();

                      if (year > 1) {
                        time = year.toString() + " years ago";
                      } else if (year > 0) {
                        time = year.toString() + " year ago";
                      } else if (month > 1) {
                        time = month.toString() + " months ago";
                      } else if (month > 0) {
                        time = month.toString() + " month ago";
                      } else if (day > 1) {
                        time = day.toString() + " days ago";
                      } else if (day > 0) {
                        time = day.toString() + "day ago";
                      } else if (hour > 1) {
                        time = hour.toString() + " hours ago";
                      } else if (hour > 0) {
                        time = hour.toString() + " hour ago";
                      } else if (minute > 1) {
                        time = minute.toString() + " minutes ago";
                      } else if (minute > 0) {
                        time = minute.toString() + " minute ago";
                      } else {
                        time = "now";
                      }

                      return (
                        <div key={idx} className="commentCard">
                          <div>
                            <div className="topCommentCard">
                              <p>{el.data.author}</p>
                              <p className="timeCommentCard">· {time}</p>
                            </div>
                            <p className="commentBodyAnswer">{el.data.body}</p>
                            <div className="bottomCommentCard">
                              <div>
                                <button
                                  onClick={() => setIsOpen(true)}
                                  className="buttonCommentCard"
                                >
                                  <img src={arrowUp} />
                                </button>
                              </div>
                              <p className="scoreCommentCard">
                                {el.data.score}
                              </p>
                              <div>
                                <button
                                  onClick={() => setIsOpen(true)}
                                  className="buttonCommentCard"
                                >
                                  <img src={arrowDown} />
                                </button>
                              </div>
                              <div className="bottomLeftButtonCard">
                                <div>
                                  <button
                                    onClick={() => setIsOpen(true)}
                                    className="buttonCommentCard"
                                  >
                                    {" "}
                                    <img src={comment} />
                                    <p> Reply</p>
                                  </button>
                                </div>
                                <div>
                                  <button
                                    onClick={() => setIsOpen(true)}
                                    className="buttonCommentCard"
                                  >
                                    <p>Save</p>
                                  </button>
                                </div>
                                <div>
                                  <button
                                    onClick={() => setIsOpen(true)}
                                    className="buttonCommentCard"
                                  >
                                    <p>Hide</p>
                                  </button>
                                </div>
                                <div>
                                  <button
                                    onClick={() => setIsOpen(true)}
                                    className="buttonCommentCard"
                                  >
                                    <p>Report</p>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="emptyComment">
                      <p>No comment yet.</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="articleCategoryCard">
                <Categories />
              </div>
              <div className="moveToTopArticleCard">
                <button onClick={backToTop}>Back to Top</button>
              </div>
            </div>
          </div>
        ) : (
          "loading..."
        )}
        <ModalLogin open={isOpen} onClose={() => setIsOpen(false)} />
      </>
    );
  }
};

export default Article;
