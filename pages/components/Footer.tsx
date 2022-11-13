import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="bg-black w-full text-xl text-center text-white flex flex-col justify-center gap-4">
      <div className="text-2xl p-4 flex gap-8 justify-center">
        <a href="https://www.linkedin.com/in/tom-whitticase/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </a>
        <a href="https://github.com/TomWhitticase" target="_blank">
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </a>
        <a href="mailto: tom.pe.wh@gmail.com" target="_blank">
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
        </a>
        <a href="https://www.instagram.com/tom.p.w/" target="_blank">
          <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
        </a>
      </div>
      <div className="w-auto mx-10 border-t-2 border-gray-dark"></div>
      <h4>
        <a href="#home" className="underline">
          Back to top
        </a>
      </h4>

      <h4>
        Made with <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon> by Tom
        Whitticase using NextJS and Tailwind
      </h4>
      <h4>© 2022 Tom Whitticase</h4>
    </footer>
  );
}

export default Footer;
