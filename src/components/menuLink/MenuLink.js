import React from 'react'
import "./MenuLink.css";
import { useSelector } from "react-redux";
const MenuLink = ({ icon, text }) => {
  const name = useSelector((state) => state.user.userInfo.name);
  return (
    <>
       <div className="menulink">
        {icon}
        <span className="menuLinkText">{text}</span>
        <span className="menuLinkTextName">
          {/* {text === "Logout" && "( Mohammad )"} */}
          {text === "Logout" && `( ${name} )`}
        </span>
      </div>
    </>
  )
}

export default MenuLink;

