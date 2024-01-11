import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import "./Rightbar.css";
import Recommendation from "../recommendation/Recommendation";
const Rightbar = () => {
  return (
    <>
      <div className="rightbar">
        <div className="rightbarWrapper">
          <Recommendation type="user" />
          <Recommendation type="popular" />
          <Recommendation type="editor" />
          <button className="rightButton">
            See More
            <MdArrowDropDown />
          </button>
        </div>
      </div>
    </>
  );
};
export default Rightbar;
