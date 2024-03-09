import React from "react";
import Titles from "../components/Titles";

const About = () => {
  const about =
    "Greetings! I'm Samrat, a sophomore at the National Institute of Technology, Agartala, majoring in Computer Science and Engineering. From leading my school's marching contingent to serving as the School Pupil Leader, I've honed my leadership and management skills over the years. Transitioning into college, I've been actively involved in the technical community, contributing to initiatives like the Google Developer Student Clubs (GDSC) and serving as a member of the Board of Technical Council (BTC). Proficient in Data Structures and Algorithms (DSA) and adept at various development technologies, I've also organized events and explored my creative side through photography. Currently, I'm focused on enhancing my backend development skills, authentication, database management and deployment technologies, while continuing to seek new opportunities for growth. With a passion for innovation and a dedication to excellence, I'm determined to make a significant impact in the tech industry and beyond.";

  return (
    <div>
      <div className="text-center text-2xl mt-[6rem] name lg:mt-3">
        About Me
      </div>
      <Titles />
      <div className="text-center lg:px-[10rem] description pt-4 pb-[10rem]">
        {about}
      </div>
    </div>
  );
};

export default About;
