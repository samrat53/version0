import React from "react";
import NextButton from "../components/NextButton";

const Projects = () => {
  const data = [
    {
      name: "Personalised Chatbot",
      description:
        "Trained on my own data, the chatbot responds to questions specifically related to me. It showcases my interest in exploring emerging technologies and leveraging them to create practical solutions.",
      techstacks: ["Google gemini", "Express.js", "React.js"],
      link: "https://github.com/samrat53/genAI-bot.git",
    },
    {
      name: "Full Stack Todo",
      description:
        "App seamlessly integrates Express for backend routing, React for dynamic front-end interactions, and MongoDB with Mongoose for efficient data storage and management. Users can effortlessly add, update, and remove tasks, experiencing a smooth and responsive interface that enhances productivity.",
      techstacks: ["MongoDB", "Express.js", "React.js"],
      link: "https://github.com/samrat53/deep-dive-web/tree/main/5week",
    },
    {
      name: "Decembothon UI",
      description: "A user-friendly and intuitive interface designed for facilitating the 21 days development challenge. As a part of the GDSC NITA web development team, I contributed to crafting this interface, which served as the platform for students to submit their tasks and track their progress throughout the competition.",
      techstacks: ["React.js", "TailwindCSS", "DaisyUI"],
      link: "https://github.com/samrat53/dcc-gdsc-21days-december",
    },
  ];

  return (
    <div>
      <div className="text-center name font-bold text-2xl my-9">
        Projects & Skills
      </div>
      <div className="project-container flex flex-col items-center lg:flex lg:flex-row xl:flex xl:flex-row 2xl:flex 2xl:flex-row md:flex md:flex-row justify-around  lg:justify-between space-x-5 lg:px-[11rem] my-4">
        {data.map((project, index) => {
          return (
            <div className="card1" key={index}>
              <div className="content1">
                <p className="heading1 w-full">{project.name}</p>
                <p className="para1 ">{project.description}</p>
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
