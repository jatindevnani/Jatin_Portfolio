import LightWave from "../Waves/LightWave";
import { NavHashLink } from "react-router-hash-link";
import { useEffect } from "react";
import Aos from "aos";
import "./About.css";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="about" className="about">
      <div data-aos="fade-right" className="about__text">
        <h2 className="about__heading">About Me</h2>
        <p className="about__body">
          Hello! My name is Jatin Devnani and I am a Bootcamp graduate
          from {" "}
          <span className="about__specialText">Masai School, Bengaluru.</span>{" "}
          I am very interested in{" "}
          <span className="about__specialText">Backend development</span>,
          creating APIs, and working with databases. As well, I am extremely
          interested in creating elegant solutions, more specifically on<span className="about__specialText"> System Design </span> and <span className="about__specialText">High performance solutions.</span>
        </p>
        <br />
        <p className="about__body">
          You can reach out to me on my{" "}
          <NavHashLink className="about__specialText" smooth to="#contact">
            contact
          </NavHashLink>{" "}
          page
        </p>
      </div>
      <img
        className="about__headshot"
        src="https://media-exp1.licdn.com/dms/image/C4E03AQGYs-oJQ1xtmA/profile-displayphoto-shrink_800_800/0/1649077129852?e=1656547200&v=beta&t=aAzjgz60ij9p97363j7gORb_toolfBqVI4-FXjw4OF8"
        alt="Brand Logo"
        width="300"
        height="300"
      />
      <LightWave />
    </section>
  );
}

export default About;
