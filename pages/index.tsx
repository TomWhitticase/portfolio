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

function toggleMobileNav() {
  const mobNav = document.getElementById("mobile-nav");
  mobNav?.classList.contains("hidden") //toggle hidden class
    ? mobNav.classList.remove("hidden")
    : mobNav?.classList.add("hidden");
}

function closeNav() {
  const mobNav = document.getElementById("mobile-nav");
  mobNav?.classList.add("hidden");
}
function showNav() {
  const mobNav = document.getElementById("mobile-nav");
  mobNav?.classList.remove("hidden");
}

export default function Home() {
  return (
    <main className="">
      <title>Tom Whitticase</title>
      <Header showNav={showNav}></Header>
      <MobileNav closeNav={closeNav}></MobileNav>
      <div id="home"></div>
      <Landing></Landing>
      <div id="about"></div>
      <SubHeader icon={faUser} text={"About Me"}></SubHeader>
      <About></About>
      <div id="skills"></div>
      <SubHeader icon={faCogs} text={"Skills"}></SubHeader>
      <Skills></Skills>
      <div id="projects"></div>
      <SubHeader icon={faLightbulb} text={"Projects"}></SubHeader>
      <Projects></Projects>
      <div id="contact"></div>
      <SubHeader icon={faHandshakeSimple} text={"Contact Me"}></SubHeader>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
}

/*
Ask Dawid:
  shadow around sub header



*/
