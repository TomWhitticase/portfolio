import React from "react";

interface INavButtonProps {
  text: string;
  href: string;
  onClick: any;
}

export default function NavButton({ text, href, onClick }: INavButtonProps) {
  return (
    <a onClick={onClick} className="hover-underline" href={href}>
      {text}
    </a>
  );
}
