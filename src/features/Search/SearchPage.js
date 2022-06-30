import React, { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { fetchSearchResults, selectData, selectLoad } from "./searchSlice";
import { Route, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import SearchCard from "./SearchCard";
import { Routes } from "react-router-dom";
import { useState } from "react";
import CommentsPage from "./CommentsPage";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

export default function SearchPage() {
  const dataOfSearch = useSelector(selectData);
  const [type, setType] = useState("posts");
  const load = useSelector(selectLoad);
  console.log(dataOfSearch);
  const location = useLocation();
  const [isopen, setisOpen] = useState(false);
  const navigate = useNavigate();
  const [close, setOnClose] = useState(false);

  console.log(location.search);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSearchResults(location.search));
    console.log(isopen);
  }, [location.search]);
  console.log(isopen);
  console.log(dataOfSearch);
  const handleDiv = () => {
    // setisOpen(true)
    console.log("yes");
  };
  if (load) {
    return (
      <>
        <div className="bg-gray-300">
          <div className="w-[800px] mx-auto lg:w-[700px] md:w-[600px] sm:w-[450px] xsm:w-[360px]">
            <div className="buttons flex justify-start space-x-6 pt-10 ">
              <button
                className="rounded-3xl w-16 py-[7px] bg-white font-semibold hover:bg-gray-100"
                onClick={() => {
                  setisOpen(true);
                }}
              >
                Posts
              </button>
              {/* <button className='rounded-3xl w-24 py-[7px]  font-semibold hover:bg-gray-100 active:bg-white' onClick={commentsHandler}>Comments</button>
                        <button className='rounded-3xl w-28 py-[7px]  font-semibold hover:bg-gray-100 active:bg-white'>Communities</button>
                        <button className='rounded-3xl w-16 py-[7px]  font-semibold hover:bg-gray-100 active:bg-white'>People</button> */}
            </div>
          </div>

          <div className="pt-10">
            {dataOfSearch.children &&
              dataOfSearch.children
                .map((e, i) => {
                  return (
                    <div onClick={handleDiv} key={i}>
                      <SearchCard
                        title={e.data.title}
                        ups={e.data.ups}
                        subreddit={e.data.subreddit}
                        subredditName={e.data.subreddit_name_prefixed}
                        awards={e.data.total_awards_received}
                        thumbnail={e.data.thumbnail}
                        width={e.data.thumbnail_width}
                        height={e.data.thumbnail_height}
                        per={e.data.permalink}
                      />
                    </div>
                  );
                })
                .slice(0, 10)}
          </div>
        </div>
        {isopen && <Modal setOnClose={setOnClose} setisOpen={setisOpen} />}
      </>
    );
  }
  // else {
  //     return(

  //     <div>
  //         <Modal onClose={() => {
  //

  //         }} open={isopen}>
  //         </Modal>
  //         <p>Yikesss</p>
  //     </div>
  //     )
  // }
}
