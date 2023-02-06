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
            Full-Stack web app made to make it easy to find other like-minded
            people in their area who are into fitness or trying to lead a more
            healthy lifestyle so that they could match to go to the gym and help
            each other on the journey. Each user has a profile with the ability
            to hit like and unlike other users profiles when they click the
            heart icons and post comments about them to tell them or everyone
            else what kind of person they were.
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
            My game project, designed with vanilla Javascript. Example of DOM
            manipulation, using class constructors, pushing images into an
            array, using velocity, math random math floor, adjusted frames so
            each level it gets harder and also attached event listener to listen
            to our WASD press down
          </p>
          <div className="cardButton">
            <button>Click to See</button>
          </div>
        </div>
      </section>

      <section id="fourthProject">
        <div className="card">
          <h4>Wordle</h4>
          <img src="../images/wordle.jpeg" alt="" />
          <p>
            Game project using HTML, CSS, and Javascript. A clone of wordle but
            with some differences using DOM manipulation.
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
