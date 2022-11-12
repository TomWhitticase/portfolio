import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import NavButton from "./NavButton";

type mobileNavProps = {
  toggleMobileNav: any;
};

function MobileNav({ toggleMobileNav }: mobileNavProps) {
  return (
    <div
      id="mobile-nav"
      className="backdrop-blur z-[10] fixed h-screen w-screen desktop-only:hidden"
    >
      <div className="fixed right-0 left-1/2 top-0 bottom-0 bg-main font-bold font-title shadow-lg flex flex-col gap-4 p-4">
        <div className="flex justify-end">
          <button className="w-min" onClick={toggleMobileNav}>
            <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
          </button>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center child:w-min">
          <NavButton text={"Home"} href={"#home"}></NavButton>
          <NavButton text={"About"} href={"#about"}></NavButton>
          <NavButton text={"Skills"} href={"#skills"}></NavButton>
          <NavButton text={"Projects"} href={"#projects"}></NavButton>
          <NavButton text={"Contact"} href={"#contact"}></NavButton>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
