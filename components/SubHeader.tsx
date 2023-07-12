import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface ISubHeaderProps {
  text: string;
  icon: IconDefinition;
}

export default function SubHeader({ icon, text }: ISubHeaderProps) {
  return (
    <div className="w-full border-y-4  bg-main text-3xl font-bold z-[5] relative py-8 text-center">
      <h2>
        {"<"}
        {text}
        {" />"}
        <FontAwesomeIcon icon={icon} className="ml-4 text-theme-blue" />
      </h2>
    </div>
  );
}
