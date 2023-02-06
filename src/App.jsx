import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Info from "./pages/Info";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="headerContainer">
        <div className="myName">
          <h1>Julian Gabriel Rivera</h1>
        </div>
        <div className="navBar">
          <div className="navBar2">
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
            <Link
              to={"/about"}
              style={{ textDecoration: "none", color: "white" }}
            >
              About
            </Link>
            <Link
              to={"/projects"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Projects
            </Link>
            <Link to="/info" style={{ textDecoration: "none", color: "white" }}>
              Info
            </Link>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>

        <Route path="/projects" element={<Projects />}></Route>

        <Route path="/info" element={<Info />}></Route>
      </Routes>
    </div>
  );
}

export default App;
