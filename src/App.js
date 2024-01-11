import './App.css';
import Navbar from "./components/navbar/Navbar";
import Leftbar from "./components/leftbar/Leftbar";
import Update from "./components/update/Update";
import Rightbar from "./components/rightbar/Rightbar";
function App() {
  return (
    <div className="App">
      <>
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






