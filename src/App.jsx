import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <div className="sideBar">
        <>
          <a
            href="https://github.com/JulianGabrielRivera"
            style={{
              color: "white",
              marginTop: "50px",
              marginBottom: "40px",
            }}
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
        <div>
          {show ? (
            <div
              class="dropdown"
              onClick={() => {
                setShow(!show);
              }}
            >
              <button class="dropDownButton">Explore</button>
              <ul class="dropdown-menu">
                <li>
                  <button class="dropdown-item" type="button">
                    <Link to="/" class="item">
                      Home
                    </Link>
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    <Link to="/about" class="item">
                      About
                    </Link>
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    <Link to="/Projects" class="item">
                      Projects
                    </Link>
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <button
              class="dropDownButton "
              onClick={() => {
                setShow(!show);
              }}
            >
              Explore
            </button>
          )}
        </div>
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
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>

        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </div>
  );
}

export default App;
