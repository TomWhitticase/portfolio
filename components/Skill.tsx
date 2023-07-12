import Link from "next/link";
import React from "react";

interface ISkillProps {
  text: string;
  imageSrc: string;
  link: string;
}

export default function Skill({ text, imageSrc, link }: ISkillProps) {
  return (
    <Link href={link}>
      <div
        className={`flex flex-col items-center justify-center w-24 h-24 gap-2 transition-all duration-300 rounded-lg cursor-pointer hover:border-4 hover:scale-110 transform-gpu hover:rotate-[10deg] bg-slate-100 bg-green-dark`}
      >
        <img src={imageSrc} className="w-10 h-auto drop-shadow-lg" />
        <div className="text-sm font-bold text-center text-gray-veryLight font-title">
          {text}
        </div>
      </div>
    </Link>
  );
}
