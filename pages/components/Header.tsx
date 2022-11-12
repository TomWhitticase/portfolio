import React from "react";

function Header() {
  return (
    <header className="fixed top-0 w-screen shadow-lg p-4 h-16 bg-main/80 backdrop-blur-sm z-10">
      <a
        id="title"
        href=""
        className="font-bold text-xl hover:text-green-light font-title transition duration-300 flex gap-2 items-center"
      >
        <img src="images/logo.png" className="w-8 align-bottom inline" />
        TomWhitticase
      </a>
    </header>
  );
}

export default Header;
