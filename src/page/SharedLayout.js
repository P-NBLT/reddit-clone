import { flexbox } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import Categories from "../Component/Categories";
import Subreddit from "./Subreddit";
import "./SharedLayout.css";
import NavBar from "../Component/NavBar/NavBar";

const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          width: "100%",
          // marginTop: "20px",
          backgroundColor: "#dae0e6",
        }}
      >
        <div
          className="categorySharedLayout"
          // style={
          //   {
          //     // width: "20%",
          //     // minWidth: "0px",
          //     // marginTop: "20px",
          //   }
          // }
        >
          <Categories />
        </div>
        {/* <div className="outlet"> */}
        <Outlet />
        {/* </div> */}
      </div>
    </>
  );
};

export default SharedLayout;
