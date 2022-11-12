import React from "react";
import Project from "./Project";

//useSWR allows the use of SWR inside function components
import useSWR from "swr";
import { time } from "console";

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url: string) => fetch(url).then((res) => res.json());

function Projects() {
  //Set up SWR to run the fetcher function when calling "/api/staticdata"
  //There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data
  const { data, error } = useSWR("/api/staticdata", fetcher);

  //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return <div>Loading...</div>;

  const projects = JSON.parse(data);

  let uniqueId = 0;
  function getUniqueId(): number {
    uniqueId++;
    return uniqueId;
  }

  let projectElements: any = [];
  projects.forEach(
    (project: {
      title: string;
      description: string;
      date: string;
      site: string;
      code: string;
      image: string;
      tags: string[];
    }) => {
      projectElements.push(
        <Project
          key={getUniqueId()}
          title={project.title}
          description={project.description}
          date={project.date}
          site={project.site}
          code={project.code}
          imageSrc={project.image}
          tags={project.tags}
        ></Project>
      );
    }
  );

  //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
  return (
    <div className="bg-[url('/images/Hexagon.svg')] dark:bg-[url('/images/Hexagon-dark.svg')] bg-fixed bg-cover bg-no-repeat w-screen">
      <div className="flex flex-wrap gap-8 p-8 justify-center">
        {projectElements}
      </div>
    </div>
  );
}

export default Projects;
