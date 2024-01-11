// import React, { useState } from "react";
// import Warning from "../warning/Warning";
// import { useSelector , useDispatch} from "react-redux";
// import "./Update.css";
// import { update, remove ,addHelloToName} from "../../redux/userSlice";
// // import {updateStart, updateSuccess, updateFailure} from "../../redux/userSlice";
// const profileImg = require("./profileImg.jpg");
// function Update() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   // console.log(name, email, password);
//   const user = useSelector((state) => state.user.userInfo);
//   const dispatch = useDispatch();
//   const userobj ={
//     name: name,
//     email: email,
//     password: password,
//   };
//   const handleupdate =(e)=>{
//     e.preventDefault();
//     dispatch(addHelloToName({name, email, password}));
//     // dispatch(update(userobj));
//   }
//   const handleDelete = (e)=>{
//     e.preventDefault();
//     dispatch(remove());
//   }
//   return (
//     <>
//       <div className="update">
//         <div className="updateWrapper">
//           <h3 className="updateTitle">Update Your Account</h3>
//           <Warning />
//           <button className="delete" onClick={() => dispatch(handleDelete())}>Delete Account</button>
//           <div className="updateContainer">
//             <form>
//               <div className="formItem">
//                 <label>Profile Picture</label>
//                 <div className="profilePic">
//                   <img
//                     className="avatar"
//                     src={profileImg} alt=""  />
//                   <span className="change">Change</span>
//                 </div>
//               </div>
//               <div className="formItem">
//                 <label>Username</label>
//                 <input className="formInput" type="text" value={name} placeholder = {user.name} onChange={(e) => setName(e.target.value)} />
//               </div>
//               <div className="formItem">
//                 <label>Email</label>
//                 <input
//                   className="formInput"
//                   type="text"
//                   placeholder={user.email} value={email} onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div className="formItem">
//                 <label>Password</label>
//                 <input className="formInput" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//               </div>
//               <button className="updateButton" onClick={() => dispatch(handleupdate())}>Update</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Update;




// import React, { useContext } from "react";
import Warning from "../warning/Warning";
import "./Update.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { updateUser2 } from "../../redux/userSlice";
const profileImg = require("./profileImg.jpg");
export default function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    // without API
    // dispatch(update({ name, email }));
    // with API
    dispatch(updateUser2({ name, email }));
  };

  return (
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
                  src={profileImg}
                  alt=""
                />
                <span className="change">Change</span>
              </div>
            </div>
            <div className="formItem">
              <label>Username</label>
              <input
                className="formInput"
                type="text"
                placeholder={user.userInfo.name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Email</label>
              <input
                className="formInput"
                type="text"
                placeholder={user.userInfo.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Password</label>
              <input className="formInput" type="password" />
            </div>
            <button
              disabled={user.pending}
              className="updateButton"
              onClick={handleClick}
            >
              Update
            </button>
            {user.error && <span className="error">Something went wrong!</span>}
            {user.pending === false && (
              <span className="success">Account has been updated!</span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

