import Header from "./components/Header";
import Footer from "./components/Footer";
import SubHeader from "./components/SubHeader";
import Skill from "./components/Skill";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faEnvelope,
  faUser,
  faArrowUpRightFromSquare,
  faCogs,
  faLightbulb,
  faHandshakeSimple,
  faMessage,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Projects from "./components/Projects";
import About from "./components/About";
import Landing from "./components/Landing";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import MobileNav from "./components/MobileNav";
import React, { useState } from "react";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <main className="">
      <title>Tom Whitticase</title>
      <Header setNavOpen={setNavOpen} />
      <MobileNav navOpen={navOpen} setNavOpen={setNavOpen} />
      <div id="home"></div>
      <Landing />
      <div id="about"></div>
      <SubHeader icon={faUser} text={"About Me"} />
      <About />
      <div id="skills"></div>
      <SubHeader icon={faCogs} text={"Skills"} />
      <Skills></Skills>
      <div id="projects"></div>
      <SubHeader icon={faLightbulb} text={"Projects"} />
      <Projects></Projects>
      <div id="contact"></div>
      <SubHeader icon={faHandshakeSimple} text={"Contact Me"} />
      <Contact />
      <Footer />
    </main>
  );
}

/*
Ask Dawid:
  shadow around sub header



*/
