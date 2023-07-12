import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { textVariant } from "../utils/motion";

interface ExperienceType {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

const experiences: ExperienceType[] = [
  {
    title: "BSc Computer Science",
    company_name: "Loughborough University",
    icon: "/images/lboro.jpg",
    iconBg: "#330067",
    date: "October 2021 - Present",
    points: [
      "Studying a broad range of topics in computer science including algorithms, data structures, web development, and software engineering.",
      "Working on a number of projects, both individually and in teams, that emphasize real-world application of computer science principles.",
      "Applying practical programming skills in languages such as Java, Python, and JavaScript.",
      "Gaining understanding of databases, networking, and computer systems architecture.",
      "Completing coursework that reinforces concepts learned in lectures and labs.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "iManage, London",
    icon: "https://stspartner.com/wp-content/uploads/2022/02/imanage-logo-vertical-color.png",
    iconBg: "#ffffff",
    date: "June 2023 - Present",
    points: [
      "Developing and maintaining web applications using Next.JS and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Writing unit and integration tests to ensure code quality.",
    ],
  },
];

interface ExperienceCardProps {
  experience: ExperienceType;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <VerticalTimelineElement
      iconClassName="bg-blue-500 "
      contentStyle={{
        background: "white",
        borderRadius: "10px",
        boxShadow: "0px 0px 0px 4px #35BDE8",
        color: "#222",
      }}
      contentArrowStyle={{
        borderRight: "14px solid  #35BDE8",
      }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        boxShadow: "#35BDE8 0px 0px 0px 4px",
      }}
      icon={
        <div className="flex items-center justify-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 ml-5 space-y-2 list-disc">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div
      className="bg-slate-100"
      style={{
        backgroundImage: "url('/images/mountains.svg')",

        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col">
        <VerticalTimeline lineColor={"#35BDE8"}>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};
export default Experience;
