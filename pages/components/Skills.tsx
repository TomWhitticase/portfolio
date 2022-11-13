import React from "react";
import Skill from "./Skill";

function Skills() {
  return (
    <div className="bg-green-light py-16 px-4 w-full">
      <h2 className="text-center p-4 pt-8 text-white">Languages</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <Skill text={"HTML"} imageSrc={"images/html-5.png"}></Skill>
        <Skill text={"CSS"} imageSrc={"images/css-3.png"}></Skill>
        <Skill text={"JavaScript"} imageSrc={"images/js.png"}></Skill>
        <Skill text={"TypeScript"} imageSrc={"images/typescript.png"}></Skill>
        <Skill text={"PHP"} imageSrc={"images/php.png"}></Skill>
        <Skill text={"SQL"} imageSrc={"images/database.png"}></Skill>
        <Skill text={"Python"} imageSrc={"images/python.png"}></Skill>
        <Skill text={"Java"} imageSrc={"images/java.webp"}></Skill>
        <Skill text={"C#"} imageSrc={"images/c-sharp.png"}></Skill>
      </div>

      <h2 className="text-center p-4 pt-8 text-white">Frameworks</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <Skill text={"NodeJS"} imageSrc={"images/node-js.png"}></Skill>
        <Skill text={"NextJS"} imageSrc={"images/nextjs.png"}></Skill>
        <Skill text={"ReactJS"} imageSrc={"images/react.png"}></Skill>
        <Skill text={"JQuery"} imageSrc={"images/jquery.png"}></Skill>
        <Skill text={"TailwindCSS"} imageSrc={"images/tailwind.png"}></Skill>
        <Skill text={"Bootstrap"} imageSrc={"images/bootstrap.png"}></Skill>
      </div>

      <h2 className="text-center p-4 pt-8 text-white">Tools</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <Skill text={"VS Code"} imageSrc={"images/vscode.png"}></Skill>
        <Skill
          text={"Visual Studio"}
          imageSrc={"images/visualstudio.png"}
        ></Skill>
        <Skill text={"Unity"} imageSrc={"images/unity.png"}></Skill>
        <Skill text={"Github"} imageSrc={"images/github.png"}></Skill>
        <Skill text={"Git"} imageSrc={"images/git.png"}></Skill>
        <Skill text={"Figma"} imageSrc={"images/figma.png"}></Skill>
      </div>
    </div>
  );
}

export default Skills;
