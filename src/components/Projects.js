import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import YoutubeEmbed from "./ytEmbed"

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Professional Expirence
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                {/* <img
                  className="w-full h-full"
                  src={project.image}
                /> */}
                <div class="aspect-w-16 aspect-h-9">
                  <iframe src="https://www.youtube.com/embed/r9jwGansp1E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
              <div className="lg:w-full lg:w-full md:w-full w-full">
                <h1 className="title-font text-3xl font-lg text-white mb-3">
                  {project.title}
                </h1>
                <h1 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  {project.subtitle}
                </h1>
                {project.description.map(description => (
                  <p className="leading-relaxed text-left">{description}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
