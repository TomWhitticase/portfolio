import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faClose, faTerminal } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Terminal from "./Terminal";
import Image from "next/image";

const funnyResponses = [
  "Oh no, you've caught me off guard!",
  "Oops! Looks like you found the secret button.",
  "You're quite the explorer, aren't you?",
  "Well, this is awkward...",
  "Didn't expect you to click that!",
  "Rebooting introduction... Please stand by.",
  "Woah! An unexpected error occurred:\n UserTooCuriousException.",
  "Congratulations! You've unlocked the nsecret message!",
  "Hey, it's not polite to interrupt!",
  "Abracadabra! Your click made my info disappear!",
  "Well, this is a plot twist...",
  "That wasn't part of the script!",
  "What just happened? You're full of surprises!",
  "Ah, a rebel. I like you already!",
  "Oops! My introduction just got shy.",
  "Okay, you got me! Let's start over.",
  "Surprise! You've found the magic button!",
  "Hey, now I have to start all over again!",
  "Oh, you're a curious one, aren't you?",
  "Well, that was unexpected...",
  "Yikes! You've caught me off-guard!",
  "Hang on! Need a moment to gather my thoughts.",
  "Well, this has never happened before...",
  "You're not playing by the rules, are you?",
];

export default function About() {
  const [clickedClose, setClickedClose] = useState(false);
  const funnyResponseToClosingTheBox =
    funnyResponses[Math.floor(Math.random() * funnyResponses.length)];
  useEffect(() => {
    const icons = document.querySelectorAll(".link-icon");
    let delay = 0;

    icons.forEach((icon) => {
      setTimeout(() => {
        icon.classList.add("text-theme-blue");
        setTimeout(() => {
          icon.classList.remove("text-theme-blue");
        }, 400); // Adjust this value to control the duration the icon stays blue
      }, delay);
      delay += 100; // Adjust this value to control the animation speed
    });
  }, []);
  return (
    <div className="dark:text-white min-h-screen py-16 flex justify-center items-center  bg-[url('/images/CircuitBoard.svg')] dark:bg-[url('/images/CircuitBoard-dark.svg')] bg-no-repeat bg-cover bg-fixed w-[screen]">
      <div className="flex flex-row flex-wrap items-center justify-center gap-20 p-4">
        <div className="flex flex-col items-start gap-4 p-4 w-full desktop-only:w-[40rem]">
          <h1 className="py-4 text-4xl font-bold font-title">
            {"<About Me />"}
          </h1>
          <div className="flex flex-col items-start justify-start gap-4">
            <div className="text-4xl font-bold">Hi, I'm Tom!</div>
            <div
              className="flex flex-col items-start justify-start p-1 rounded bg-theme-gray-dark"
              onClick={() => {
                if (clickedClose) setClickedClose(false);
              }}
            >
              <div className="flex items-center justify-between w-full ">
                <div className="p-1 px-4 mx-4 text-white bg-black rounded-t">
                  <FontAwesomeIcon
                    icon={faTerminal}
                    className="pr-1 text-white "
                    onClick={() => setClickedClose(true)}
                  />{" "}
                  Who am I?
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faClose}
                    className="px-4 text-white"
                    onClick={() => setClickedClose(true)}
                  />
                </div>
              </div>
              <div className="p-2 text-xl text-white bg-black rounded border-theme-gray-dark font-body">
                <Terminal
                  text={
                    clickedClose
                      ? funnyResponseToClosingTheBox
                      : `A full Stack Software Engineer\nspecialising in React, TypeScript and Node.js\n\nCurrently working as a Software Engineer Intern \nat iManage in London`
                  }
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 text-4xl">
            <a
              className="transition-all duration-300 ease-in-out link-icon hover:text-theme-blue"
              href="https://www.linkedin.com/in/tom-whitticase/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
            <a
              href="https://github.com/TomWhitticase"
              target="_blank"
              className="transition-all duration-300 ease-in-out link-icon hover:text-theme-blue"
            >
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
            <a
              href="mailto: tom.pe.wh@gmail.com"
              target="_blank"
              className="transition-all duration-300 ease-in-out link-icon hover:text-theme-blue"
            >
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
            </a>
          </div>
        </div>
        <div className="mx-8 my-auto">
          <Image
            src={"/images/me-water-cool.png"}
            width={400}
            height={400}
            className="transition-all duration-300 bg-white border-0 rounded-full border-neutral-100 hover:scale-105 transform-gpu "
            alt={"Tom Whitticase"}
          />
        </div>
      </div>
    </div>
  );
}
