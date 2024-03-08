import React from "react";
import Titles from "../components/Titles";

const About = () => {
  const about =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, assumenda cupiditate. Exercitationem ipsum necessitatibus autem molestias deleniti eveniet cumque nobis accusamus aperiam obcaecati atque soluta, praesentium alias harum aliquid similique.";
  return (
    <div>
      <div className="text-center underline text-2xl mt-6">About</div>
      <Titles />
      <div className="text-center lg:px-[10rem] my-4">{about}</div>
    </div>
  );
};

export default About;
