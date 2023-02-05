import "./Home.css";
import { Sky, Cloud } from "@react-three/drei";
import { Canvas } from "react-three-fiber";

const Home = () => {
  return (
    <>
      <div className="headerContainer">
        <div className="myName">
          <h1>Julian Gabriel Rivera</h1>
        </div>
        <div className="navBar">
          <nav>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Info</li>
          </nav>
        </div>
      </div>

      <section className="pictureHere">
        <Canvas style={{ borderBottomLeftRadius: "80px 80px" }}>
          <ambientLight intensity={1} />
          <pointLight intensity={2} position={[0, 0, -1000]} />
          {/* <Cloud
            position={[40, -10, -25]}
            speed={1}
            opacity={1.2}
            width={30} // Width of the full cloud
            depth={1.5}
          />
          <Cloud
            position={[35, 1, -20]}
            speed={1}
            opacity={1.2}
            width={30} // Width of the full cloud
            depth={1.5}
          /> */}
          <Cloud
            position={[-15, -5, -2]}
            speed={2}
            opacity={1}
            width={0} // Width of the full cloud
            depth={1}
            segments={15} // Number of particles
          />
        </Canvas>
        <img src="../images/sidepic2.png" alt="" />
        <p style={{ position: "absolute" }}>A Full Stack Web Developer</p>
        {/* <p>A Full Stack Web Developer</p>
        <p className="aboutMe">
          Julian Gabriel Rivera, born in Puerto Rico but raised in Florida. My
          top hobbies are going to the gym, coding, and sometimes gaming. I
          started my journey as a junior developer on March 2022 by taking the
          IronHack Bootcamp where I learned how to create Full Stack
          applications and graduated on May 2022. One month after I got hired at
          IronHack as a Web Developer Teaching Assistant and have been helping
          students graduate and create Full Stack applications for 8 months now.
          Now my dream is to work with a group of other developers with
          experience, especially Senior developers so that I can continue
          growing and learning as a Junior Developer.
        </p> */}
      </section>
    </>
  );
};

export default Home;
