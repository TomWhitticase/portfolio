import React from "react";

type navButtonProps = {
  text: string;
  href: string;
  onClick: any;
};

function NavButton({ text, href, onClick }: navButtonProps) {
  return (
    <a onClick={onClick} className="hover-underline" href={href}>
      {text}
    </a>
  );
}

export default NavButton;
