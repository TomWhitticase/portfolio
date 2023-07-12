import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import NavButton from "./NavButton";

interface IHeaderProps {
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const navLinks = [
  { text: "About", href: "#about" },
  { text: "Experience", href: "#experience" },
  { text: "Projects", href: "#projects" },
  { text: "Skills", href: "#skills" },
  { text: "Contact", href: "#contact" },
];

export default function Header({ setNavOpen }: IHeaderProps) {
  return (
    <header className="fixed top-0 z-10 w-screen h-16 p-4 text-white bg-black shadow-lg">
      <div className="flex justify-between mx-8">
        <a
          href=""
          className="flex items-center gap-2 text-xl font-bold transition duration-300 hover:text-green-light font-title"
        >
          <img src="images/logo.png" className="inline w-8 align-bottom" />
          Tom Whitticase
        </a>
        <div className="flex items-center justify-center gap-8 font-bold font-title mobile-only:hidden">
          {navLinks.map(({ text, href }, index) => {
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
