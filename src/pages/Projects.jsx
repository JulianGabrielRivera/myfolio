import "./Home.css";
import "./Project.css";

const Projects = () => {
  return (
    <>
      <section id="projects">
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          MY LATEST WORK
        </p>
        <div className="card">
          <h4>Numinous</h4>
          <img src="../images/numious.jpeg" alt="" />
          <p>
            Has two roles, one admin and one guest. Only admins can create new
            places and only admins can delete places. If guests want more info
            they have to sign up in order to see more details.Numinous made with
            HTML,CSS, Javascript , Mongoose, MongoDB, AXIOS, Bootstrap, React,
            Express.js, Node.js.
          </p>
          <div className="cardButton">
            <button>Click to See</button>
          </div>
        </div>
      </section>
      <section id="secondProject">
        <div className="card">
          <h4>Fitnessa</h4>
          <img src="../images/fitnessa.png" alt="" />
          <p>
            Has two roles, one admin and one guest. Only admins can create new
            places and only admins can delete places. If guests want more info
            they have to sign up in order to see more details.Numinous made with
            HTML,CSS, Javascript , Mongoose, MongoDB, AXIOS, Bootstrap, React,
            Express.js, Node.js.
          </p>
          <div className="cardButton">
            <button>Click to See</button>
          </div>
        </div>
      </section>

      <section id="thirdProject">
        <div className="card">
          <h4>Space Between</h4>
          <img src="../images/spacebetween.png" alt="" />
          <p>
            Has two roles, one admin and one guest. Only admins can create new
            places and only admins can delete places. If guests want more info
            they have to sign up in order to see more details.Numinous made with
            HTML,CSS, Javascript , Mongoose, MongoDB, AXIOS, Bootstrap, React,
            Express.js, Node.js.
          </p>
          <div className="cardButton">
            <button>Click to See</button>
          </div>
        </div>
      </section>

      <section id="fourthProject">
        <div className="card">
          <h4>Space Between</h4>
          <img src="../images/wordle.jpeg" alt="" />
          <p>
            Has two roles, one admin and one guest. Only admins can create new
            places and only admins can delete places. If guests want more info
            they have to sign up in order to see more details.Numinous made with
            HTML,CSS, Javascript , Mongoose, MongoDB, AXIOS, Bootstrap, React,
            Express.js, Node.js.
          </p>
          <div className="cardButton">
            <button>Click to See</button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Projects;
