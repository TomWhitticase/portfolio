import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import NavButton from "./NavButton";

type mobileNavProps = {
  closeNav: any;
};

function MobileNav({ closeNav }: mobileNavProps) {
  return (
    <div
      id="mobile-nav"
      className="backdrop-blur z-[10] fixed h-screen w-screen desktop-only:hidden hidden"
    >
      <div className="fixed right-0 left-1/2 top-0 bottom-0 bg-main font-bold font-title shadow-lg flex flex-col gap-4 p-4">
        <div className="flex justify-end">
          <button className="w-min px-4" onClick={closeNav}>
            <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
          </button>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center child:w-min">
          <NavButton
            onClick={closeNav}
            text={"Home"}
            href={"#home"}
          ></NavButton>
          <NavButton
            onClick={closeNav}
            text={"About"}
            href={"#about"}
          ></NavButton>
          <NavButton
            onClick={closeNav}
            text={"Skills"}
            href={"#skills"}
          ></NavButton>
          <NavButton
            onClick={closeNav}
            text={"Projects"}
            href={"#projects"}
          ></NavButton>
          <NavButton
            onClick={closeNav}
            text={"Contact"}
            href={"#contact"}
          ></NavButton>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
