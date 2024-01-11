import './App.css';
import Navbar from "./components/navbar/Navbar";
import Leftbar from "./components/leftbar/Leftbar";
import Update from "./components/update/Update";
import Rightbar from "./components/rightbar/Rightbar";
// import React, { useState } from 'react';
function App() {
  // const [name, setName] = useState("Radwa");
  return (
    <div className="App">
      <>
      {/* <Navbar name ={name} /> */}
      <Navbar />
      <div className="container">
        <Leftbar />
        <Update />
        <Rightbar />
      </div>
      
      </>
    </div>
  );
}
export default App;






