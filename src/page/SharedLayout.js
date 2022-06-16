import { flexbox } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import Categories from "../Component/Categories";
import Subreddit from "./Subreddit";

const SharedLayout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        border: "1px solid blue",
        width: "100%",

        // marginRight: "20%",
      }}
    >
      {/* <div style={{ marginRight: "35%" }}>SharedLayout</div> */}
      <div style={{ width: "20%", minWidth: "200px", marginRight: "25%" }}>
        <Categories />
      </div>

      <Outlet />
    </div>
  );
};

export default SharedLayout;
