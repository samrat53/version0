import React from "react";
import NextButton from "../components/NextButton";

const Projects = () => {
  const data = [
    {
      name: "Personalised Chatbot",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus odio sed similique fugiat harum nostrum tenetur, illo doloribus ad maiores consequatur adipisci placeat perspiciatis expedita atque architecto praesentium! Praesentium, omnis?",
      techstacks: ["Google gemini", "Express.js", "React.js"],
      link: "https://github.com",
    },
    {
      name: "Personalised Chatbot",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus odio sed similique fugiat harum nostrum tenetur, illo doloribus ad maiores consequatur adipisci placeat perspiciatis expedita atque architecto praesentium! Praesentium, omnis?",
      techstacks: ["Google gemini", "Express.js", "React.js"],
      link: "https://github.com",
    },
    {
      name: "Personalised Chatbot",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus odio sed similique fugiat harum nostrum tenetur, illo doloribus ad maiores consequatur adipisci placeat perspiciatis expedita atque architecto praesentium! Praesentium, omnis?",
      techstacks: ["Google gemini", "Express.js", "React.js"],
      link: "https://github.com",
    },
  ];

  return (
    <div>
      <div className="text-center underline font-bold text-2xl my-9">
        Projects & Skills
      </div>
      <div className="project-container lg:flex md:flex sm:flex md:justify-between lg:justify-between space-x-5 lg:px-[11rem] my-4">
        {data.map((project, index) => {
          return (
            <div className="card1" key={index}>
              <div className="content1">
                <p className="heading1 w-full">{project.name}</p>
                <p className="para1">{project.description}</p>
                <div className="flex space-x-1 my-8">
                  {project.techstacks.map((item, index) => {
                    return (
                      <div key={index} className="tech-stacks text-sm">
                        {item}
                      </div>
                    );
                  })}
                </div>
                <a href={project.link}>
                  <button className="absolute bottom-0 right-0 mt-6 -mb- ml-2 w-full nextbutton Btn">
                    Check it out
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16rem"
                      height="16rem"
                      fill="currentColor"
                      class="bi bi-arrow-right-circle"
                      viewBox="0 0 16 16"
                      className="svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
