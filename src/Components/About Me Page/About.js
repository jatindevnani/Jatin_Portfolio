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
          I am a highly passionate{" "}
          <span className="about__specialText">Backend developer who loves</span>,
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
        <br>
</br>
<br>
</br>
<br>
</br>
<br>
</br>

      <div className="techstackMarginBox">
        <img
        className="techstackMargin"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
        alt="Brand Logo"
        width="60"
        height="60"
      />
         <img
        className="techstackMargin"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
        alt="Brand Logo"
        width="60"
        height="60"
      />
         <img
        className="techstackMargin"
        src="https://design.jboss.org/hibernate/logo/final/hibernate_logo_whitebkg_stacked_256px.gif"
        alt="Brand Logo"
        width="60"
        height="60"
      />
      <img
        className="techstackMargin"
        src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg"
        alt="Brand Logo"
        width="60"
        height="60"
      />
         <img
        className="techstackMargin"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
        alt="Brand Logo"
        width="60"
        height="60"
      />
         <img
        className="techstackMargin"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
        alt="Brand Logo"
        width="60"
        height="60"
      />

<img
        className="techstackMargin"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
        alt="Brand Logo"
        width="60"
        height="60"
      />

<img
        className="techstackMargin"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
        alt="Brand Logo"
        width="60"
        height="60"
      />

<img
        className="techstackMargin"
        src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
        alt="Brand Logo"
        width="60"
        height="60"
      />
        </div>
        <div></div>
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
