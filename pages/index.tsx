import Header from "../components/Header";
import Footer from "../components/Footer";
import SubHeader from "../components/SubHeader";

//font awesome
import {
  faSun,
  faMoon,
  faUser,
  faCogs,
  faLightbulb,
  faHandshakeSimple,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";
import Projects from "../components/Projects";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import MobileNav from "../components/MobileNav";
import React, { useEffect, useState } from "react";
import Experience from "../components/Experience";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <main className="">
      <title>Tom Whitticase</title>
      <Header setNavOpen={setNavOpen} />
      <MobileNav navOpen={navOpen} setNavOpen={setNavOpen} />
      <div id="about"></div>
      <About />
      <div id="experience"></div>
      <SubHeader icon={faBriefcase} text={"Experience"} />
      <Experience />
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
