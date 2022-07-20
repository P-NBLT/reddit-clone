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
import image_not_available from '../../Media/image_not_available.jpg'

export default function SearchPage() {
  const dataOfSearch = useSelector(selectData);
  const [type, setType] = useState("posts");
  const load = useSelector(selectLoad);
  const location = useLocation();

  const navigate = useNavigate();

  // console.log(location.search);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSearchResults(location.search));
  }, [location.search]);

  // console.log(dataOfSearch);

  if (load) {
    return (
      <>
        <div className=" ml-[15%] mt-[1.5%] ">
          

          <div className=" ">
            {dataOfSearch.children &&
              dataOfSearch.children
                .map((e, i) => {
                  return (
                    <div key={i}>
                      <SearchCard
                        title={e.data.title}
                        ups={e.data.ups}
                        subreddit={e.data.subreddit}
                        subredditName={e.data.subreddit_name_prefixed}
                        awards={e.data.total_awards_received}
                        thumbnail={e.data.thumbnail!='self' && e.data.thumbnail!='default'?e.data.thumbnail:image_not_available}
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
      </>
    );
  }
}
