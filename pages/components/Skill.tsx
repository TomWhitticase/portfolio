import React from "react";

interface ISkillProps {
  text: string;
  imageSrc: string;
}

export default function Skill({ text, imageSrc }: ISkillProps) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center bg-green-dark w-24 h-24 rounded-lg">
      <img src={imageSrc} className="w-10 h-auto drop-shadow-lg" />
      <div className="text-gray-veryLight text-center font-title font-bold text-sm">
        {text}
      </div>
    </div>
  );
}
