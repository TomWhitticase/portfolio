import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full gap-4 text-xl text-center text-white bg-black">
      <div className="flex justify-center gap-8 p-4 text-2xl">
        <a href="https://www.linkedin.com/in/tom-whitticase/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </a>
        <a href="https://github.com/TomWhitticase" target="_blank">
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </a>
        <a href="mailto: tom.pe.wh@gmail.com" target="_blank">
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
        </a>
      </div>
      <div className="w-full mx-10 border-t-2 max-w-7xl border-neutral-700"></div>
      <h4>
        <a href="#about" className="underline">
          Back to top
        </a>
      </h4>

      <h4>©2023 Tom Whitticase</h4>
    </footer>
  );
}
