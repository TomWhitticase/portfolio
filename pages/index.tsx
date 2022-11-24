import Header from "./components/Header";
import Footer from "./components/Footer";
import SubHeader from "./components/SubHeader";

//font awesome
import {
  faSun,
  faMoon,
  faUser,
  faCogs,
  faLightbulb,
  faHandshakeSimple,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";
import Projects from "./components/Projects";
import About from "./components/About";
import Landing from "./components/Landing";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import MobileNav from "./components/MobileNav";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  const [theme, setTheme] = useState("light");

  function dark() {
    console.log("switching to dark");
    document.getElementsByTagName("html")[0].className = "dark";
    setTheme("dark");
  }
  function light() {
    console.log("switching to light");
    document.getElementsByTagName("html")[0].className = "light";
    setTheme("light");
  }

  function toggleDark() {
    if (document.getElementsByTagName("html")[0].className == "dark") {
      light();
    } else {
      dark();
    }
  }
  //detect light/dark mode preference changes
  useEffect(function mount() {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", function (e) {
        let colorScheme = e.matches ? "dark" : "light";
        if (colorScheme === "dark") {
          dark();
        } else {
          light();
        }
      });
    //detect dark/light mode preference
    if (window.matchMedia) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        dark();
      } else {
        light();
      }
    } else {
      light();
    }
  }, []);

  const [navOpen, setNavOpen] = useState(false);
  return (
    <main className="">
      <button
        className={`fixed z-[100] bottom-4 left-4 w-8 h-8 flex justify-center items-center rounded shadow-lg bg-white dark:bg-gray-dark text-black dark:text-white`}
        onClick={() => {
          toggleDark();
        }}
      >
        {(theme === "dark" && <FontAwesomeIcon icon={faMoon} />) ||
          (theme === "light" && <FontAwesomeIcon icon={faSun} />)}
      </button>
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
