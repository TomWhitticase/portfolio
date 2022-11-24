import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function About() {
  return (
    <div className="w-full bg-[url('/images/mountains.svg')] dark:bg-[url('/images/mountains-dark.svg')]  bg-no-repeat bg-cover bg-fixed">
      <div className="flex flex-row gap-10 flex-wrap justify-center">
        <div className="flex desktop-only:flex-row mobile-only:flex-col gap-10 py-16">
          <img
            className="object-cover w-64 rounded-lg m-auto"
            src="images/topofmountain.jpg"
          />
          <div className="flex flex-col justify-between items-between gap-4 p-4 w-full">
            <div className="flex flex-col gap-4 desktop-only:max-w-[20rem]">
              <p>
                I am a second year undergraduate Computer Science student
                studying at
                <a
                  href="https://www.lboro.ac.uk/"
                  target="_blank"
                  className="text-green-light font-bold mx-1"
                >
                  Loughborough University
                </a>
                in the UK. I am passionate about programming and I am always
                teaching myself new skills. I am currently looking for a
                placement year starting summer 2023.
              </p>
              <p>
                I love making and playing electric guitars. I enjoy skiing and
                archery.
              </p>
            </div>

            <a
              target="_blank"
              href="https://docs.google.com/document/d/1VDgQEV572j5iIcepGR9uKMEozhZUkPmv02rsyr3mDLI/edit?usp=sharing"
            >
              <button className="btn-1">
                Resume
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="mx-1"
                ></FontAwesomeIcon>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
