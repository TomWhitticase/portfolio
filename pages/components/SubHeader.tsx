import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import React from "react";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type subHeaderProps = {
  text: string;
  icon: IconDefinition;
};

function SubHeader({ icon, text }: subHeaderProps) {
  return (
    <div className="w-full bg-main shadow-lg z-[5] relative py-8 text-center">
      <h2>
        {text}
        <FontAwesomeIcon icon={icon} className="text-orange mx-1" />
      </h2>
    </div>
  );
}

export default SubHeader;
