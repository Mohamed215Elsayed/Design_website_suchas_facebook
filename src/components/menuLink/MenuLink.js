import React from 'react'
import "./MenuLink.css";
const MenuLink = ({ icon, text }) => {
  return (
    <>
       <div className="menulink">
        {icon}
        <span className="menuLinkText">{text}</span>
        <span className="menuLinkTextName">
          {text === "Logout" && "( Mohammad )"}
        </span>
      </div>
    </>
  )
}

export default MenuLink;

