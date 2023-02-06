import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <>
          <a
            href="https://github.com/JulianGabrielRivera"
            style={{ color: "white", marginTop: "50px", marginBottom: "40px" }}
          >
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/julian-g-rivera"
            style={{ color: "white" }}
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </>
      </div>
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
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>

        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </div>
  );
}

export default App;
