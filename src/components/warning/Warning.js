import React from 'react';
import "./Warning.css";
import { useSelector } from "react-redux";
function Warning() {
  const name = useSelector((state) => state.user.userInfo.name);
  return (
    <>
    <div className="warning">
      {/* Deleting account cannot be undone <b>Mohammad</b>! You should confirm your
      password to delete your account. */}
      Deleting account cannot be undone <b>{name}</b>! You should confirm your
      password to delete your account.

    </div>
    </>
  );
}
export default Warning;
