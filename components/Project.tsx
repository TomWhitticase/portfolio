import {
  faArrowUpRightFromSquare,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface IProjectProps {
  index: number;
  title: string;
  description: string;
  site: string;
  code: string;
  imageSrc: string;
  date: string;
  tags: string[];
  width: string;
}

export default function Project({
  index,
  title,
  description,
  site,
  code,
  imageSrc,
  date,
  tags,
  width,
}: IProjectProps) {
  return (
    <div
      className={`card transition-all duration-500 hover:translate-y-10 dark:bg-gray-medium shadow-lg rounded-lg relative overflow-hidden h-80 mobile-only:max-w-[15rem]`}
      style={{ width: width }}
    >
      <img src={imageSrc} className="object-cover w-full h-[80%]" alt="" />
      <div className="absolute top-0">
        <div className="flex p-2 gap-2 flex-wrap child:text-xs child:z-[3] child:shadow-lg child:rounded-md child:p-2">
          {tags?.map((el, i) => (
            <span key={i} className="font-bold text-white tag bg-green-light">
              {el}
            </span>
          ))}
        </div>
      </div>
      <div className=""></div>
      <div className="card__overlay dark:bg-gray-dark">
        <div className="card__header dark:bg-gray-dark">
          <div className="card__header-text">
            <h3 className="text-left dark:text-gray-light">{date}</h3>
            <h2 className="text-left text-green-light">{title}</h2>
          </div>
        </div>
        <p className="px-4 text-xs text-left font-body">{description}</p>
        <div className="flex justify-between gap-8 p-4 child:flex-1">
          {site && (
            <a
              className="p-2 text-center rounded-lg bg-gray-veryLight dark:bg-gray-medium dark:text-gray-veryLight"
              href={site}
            >
              View{" "}
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="mx-1"
              ></FontAwesomeIcon>
            </a>
          )}
          {code && (
            <a
              className="p-2 text-center rounded-lg bg-gray-veryLight dark:bg-gray-medium dark:text-gray-veryLight"
              href={code}
            >
              Code{" "}
              <FontAwesomeIcon icon={faCode} className="mx-1"></FontAwesomeIcon>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
