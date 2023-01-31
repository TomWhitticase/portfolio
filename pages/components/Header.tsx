import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import NavButton from "./NavButton";

interface IHeaderProps {
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ setNavOpen }: IHeaderProps) {
  return (
    <header className="dark:text-white fixed top-0 w-screen shadow-lg p-4 h-16 bg-main/80 dark:bg-gray-dark/80 backdrop-blur-lg z-10">
      <div className="flex justify-between mx-8">
        <a
          href=""
          className="font-bold text-xl hover:text-green-light font-title transition duration-300 flex gap-2 items-center"
        >
          <img src="images/logo.png" className="w-8 align-bottom inline" />
          Tom Whitticase
        </a>
        <div className="flex justify-center items-center gap-8 font-bold font-title mobile-only:hidden">
          {[
            { text: "Home", href: "#home" },
            { text: "About", href: "#about" },
            { text: "Skills", href: "#skills" },
            { text: "Projects", href: "#projects" },
            { text: "Contact", href: "#contact" },
          ].map(({ text, href }, index) => {
            return (
              <NavButton
                key={index}
                onClick={() => setNavOpen(false)}
                text={text}
                href={href}
              ></NavButton>
            );
          })}
        </div>
        <button
          className="desktop-only:hidden"
          onClick={() => setNavOpen(true)}
        >
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </button>
      </div>
    </header>
  );
}
