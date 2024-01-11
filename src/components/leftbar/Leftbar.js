import React from 'react';
import { FaHome, FaList, FaShoppingBasket, FaUserFriends, FaCopy, FaRegImages, FaFilm, FaCalendarAlt, FaHeadphones, FaCog, FaSignOutAlt } from 'react-icons/fa';
import MenuLink from '../menuLink/MenuLink';
import './Leftbar.css';
export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <MenuLink icon={<FaHome />} text="Homepage" />
        <MenuLink icon={<FaList />} text="Lists" />
        <MenuLink icon={<FaShoppingBasket />} text="Products" />
        <MenuLink icon={<FaUserFriends />} text="Groups" />
        <MenuLink icon={<FaCopy />} text="Pages" />
        <MenuLink icon={<FaRegImages />} text="Photos" />
        <MenuLink icon={<FaFilm />} text="Videos" />
        <MenuLink icon={<FaCalendarAlt />} text="Schedule" />
        <MenuLink icon={<FaHeadphones />} text="Wishlist" />
        <MenuLink icon={<FaCog />} text="Settings" />
        <MenuLink icon={<FaSignOutAlt />} text="Logout" />
      </div>
    </div>
  );
}