import React from "react";

const DeveloperTools = () => {
  const data = [
    "Frameworks: React.js, Next.js (leanrning), Express.js, MongooseODM",
    "Databases: MongoDB",
    "Languagges: JavaScript, TypeScript (beginner)",
    "Version Control: Git and GitHub",
    "Bash and terminal",
    "UI libraries: Tailwind, MUI, DaisyUI, Framer Motion ",
    "Development libraries: Zod, JWT, SEO: React Helmet",
    "IDE: Visual Studio Code",
  ];
  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4 skills-heading text-center">Developer Tools Proficiency</h2>
      <ul className="list-disc description">
        {data.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default DeveloperTools;
