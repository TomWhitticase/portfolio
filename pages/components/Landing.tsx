import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Landing() {
  return (
    <div className="h-screen flex justify-center items-center  bg-[url('/images/CircuitBoard.svg')] dark:bg-[url('/images/CircuitBoard-dark.svg')] bg-no-repeat bg-cover bg-fixed w-[screen]">
      <div className="flex flex-row p-4 gap-20 flex-wrap justify-center items-center">
        <div className="w-auto p-4 flex flex-col items-start">
          <h1 className="">Hello there!</h1>
          <h1 className="text-green-light">I'm Tom.</h1>

          <h2 className="text-3xl text-left text-gray-light">
            I am a <span className="text-orange">full stack</span> developer
            <span className="">|</span>
          </h2>

          <div className="flex flex-col">
            <a href="#about" className="m-4">
              <button className="btn-1 rounded-full">
                About Me <FontAwesomeIcon icon={faArrowDown} />
              </button>
            </a>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/tom-whitticase/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} className="icon" />
              </a>
              <a href="https://github.com/TomWhitticase" target="_blank">
                <FontAwesomeIcon icon={faGithub} className="icon" />
              </a>
              <a href="mailto: tom.pe.wh@gmail.com" target="_blank">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
              </a>
              <a href="https://www.instagram.com/tom.p.w/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} className="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="my-auto mx-8">
          <img
            className="rounded-2xl shadow-lg object-cover w-72"
            src="images/tombeachmalaga.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
