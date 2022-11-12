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
    <footer className="w-screen bg-black text-white font-body">
      <div className="w-full flex flex-col p-4 pb-8 gap-4 justify-center items-center">
        <div className="flex gap-8 text-3xl">
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
        <div className="border-t-2 border-gray-dark h-4 w-[80%]"></div>

        <a href="#home" className="underline">
          Back to top
        </a>

        <div className="">
          Made with <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon> by Tom
          Whitticase using NextJS and Tailwind
        </div>
      </div>
      <div className="text-white p-4">@tomwhitticase.com 2022</div>
    </footer>
  );
}

export default Footer;
