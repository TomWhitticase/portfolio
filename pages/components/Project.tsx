import {
  faArrowUpRightFromSquare,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface IProjectProps {
  title: string;
  description: string;
  site: string;
  code: string;
  imageSrc: string;
  date: string;
  tags: string[];
}

export default function Project({
  title,
  description,
  site,
  code,
  imageSrc,
  date,
  tags,
}: IProjectProps) {
  return (
    <div className="card shadow-lg rounded-lg relative overflow-hidden mobile-only:w-64 desktop-only:w-96 h-80">
      <img src={imageSrc} className="object-cover w-full h-[80%]" alt="" />
      <div className="absolute top-0">
        <div className="flex p-2 gap-2 flex-wrap child:text-xs child:z-[3] child:shadow-lg child:rounded-md child:p-2">
          {tags?.map((el, i) => (
            <span key={i} className="tag bg-green-light text-white font-bold">
              {el}
            </span>
          ))}
        </div>
      </div>
      <div className=""></div>
      <div className="card__overlay">
        <div className="card__header">
          <div className="card__header-text">
            <h3 className="text-left ">{date}</h3>
            <h2 className="text-left text-green-light">{title}</h2>
          </div>
        </div>
        <p className="text-left px-4 text-xs font-body">{description}</p>
        <div className="flex justify-between child:flex-1 gap-8 p-4">
          {site && (
            <a
              className="rounded-lg bg-gray-veryLight p-2 text-center"
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
              className="rounded-lg bg-gray-veryLight p-2 text-center"
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
