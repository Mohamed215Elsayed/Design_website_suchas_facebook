import React from 'react'
import { MdArrowDropDown }from 'react-icons/md';
import "./Navbar.css";
import { useSelector } from "react-redux";
const logo = require("./logo.jpg");
// const Navbar = (props) => {
// const Navbar = ({name}) => {
const Navbar = () => {
  const name = useSelector((state) => state.user.name);
  return (
    <>
      <div className="navbar">
        <div className="navbarWrapper">
          <div className="navbarLeft">
            <span className="logo">logo</span>
            <span className="navbarLink">Home</span>
            <span className="navbarLink">About</span>
            <span className="navbarLink">Contact</span>
          </div>
          <div className="navbarCenter">
            <div className="search">
              <input
                type="text"
                placeholder="search for something..."
                className="searchInput"
              />
            </div>
          </div>
          <div className="navbarRight">
            <img className="avatar" src={logo} alt="" />
            {/* <span className="navbarName">Mohammad</span> */}
            {/* <span className="navbarName">{props.name}</span> */}
            <span className="navbarName">{name}</span>
            <MdArrowDropDown size={32} color="blue" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;