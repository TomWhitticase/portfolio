import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import React from "react";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ISubHeaderProps {
  text: string;
  icon: IconDefinition;
}

export default function SubHeader({ icon, text }: ISubHeaderProps) {
  return (
    <div className="w-full bg-main shadow-lg z-[5] relative py-8 text-center">
      <h2>
        {text}
        <FontAwesomeIcon icon={icon} className="text-orange mx-1" />
      </h2>
    </div>
  );
}
