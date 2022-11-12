import React from "react";

type navButtonProps = {
  text: string;
  href: string;
};

function NavButton({ text, href }: navButtonProps) {
  return (
    <a className="hover-underline" href={href}>
      {text}
    </a>
  );
}

export default NavButton;
