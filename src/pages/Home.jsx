import "./Home.css";
import { Sky, Cloud, Stars, SpotLight } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import { Link, NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <main>
      <div>{/* <p>juliangabrielriveradev@gmail.com</p> */}</div>
      <section className="pictureHere">
        <Canvas
          style={{
            borderBottomLeftRadius: "80px 80px",
          }}
        >
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
          <SpotLight
            distance={35}
            angle={3}
            position={[2, 2, 2]}
            attenuation={4.5}
            anglePower={4} // Diffuse-cone anglePower (default: 5)
          />
        </Canvas>
        {/* <img src="../images/side.png" alt="" id="julian" /> */}
        <div className="fullStack">
          <Typewriter
            options={{
              strings: ["A Full Stack Web Developer"],
              autoStart: true,

              delay: 60,
              pauseFor: 10000000000,
              cursor: "...",
            }}
          />
        </div>
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
      <div className="footerContainer">
        <p>juliangabrielriveradev@gmail.com</p>
        <p>linkedin.com/in/julian-g-rivera/</p>
      </div>
    </main>
  );
};

export default Home;
