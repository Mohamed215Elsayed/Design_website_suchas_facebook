import React, { useState } from "react";
import Warning from "../warning/Warning";
import "./Update.css";
const profileImg = require("./profileImg.jpg");
function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  return (
    <>
      <div className="update">
        <div className="updateWrapper">
          <h3 className="updateTitle">Update Your Account</h3>
          <Warning />
          <button className="delete">Delete Account</button>
          <div className="updateContainer">
            <form>
              <div className="formItem">
                <label>Profile Picture</label>
                <div className="profilePic">
                  <img
                    className="avatar"
                    src={profileImg} alt=""  />
                  <span className="change">Change</span>
                </div>
              </div>
              <div className="formItem">
                <label>Username</label>
                <input className="formInput" type="text" placeholder="Mohammad" />
              </div>
              <div className="formItem">
                <label>Email</label>
                <input
                  className="formInput"
                  type="text"
                  placeholder="Mohammad@gmail.com"
                />
              </div>
              <div className="formItem">
                <label>Password</label>
                <input className="formInput" type="password" />
              </div>
              <button className="updateButton">Update</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Update;
