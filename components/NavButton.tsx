import React from "react";

interface INavButtonProps {
  text: string;
  href: string;
  onClick: any;
}

export default function NavButton({ text, href, onClick }: INavButtonProps) {
  return (
    <a
      onClick={onClick}
      className="transition-all duration-300 hover:text-theme-blue"
      href={href}
    >
      {text}
    </a>
  );
}
