import React from "react";
import Titles from "../components/Titles";

const About = () => {
  const about ="Greetings! I'm Samrat, a sophomore pursuing Computer Science and Engineering at the National Institute of Technology, Agartala. Since my school days, I've been honing my leadership and management skills, from leading my school's marching contingent to serving as the School Pupil Leader. Transitioning into college life, I've immersed myself in the vibrant technical community, where I've been an integral part of initiatives like the Google Developer Student Clubs (GDSC) and the Board of Technical Council (BTC). As a member of GDSC, I've contributed to web development projects and facilitated events like the decembothon, leveraging my expertise in technologies like MERN stack. Alongside, my academic journey has equipped me with a strong foundation in subjects like Data Structures and Algorithms (DSA) and Object-Oriented Programming (OOP). Beyond technical realms, I've also delved into event management, orchestrating initiatives like orientation programs and technical fests. Moreover, my passion for photography adds another dimension to my persona, allowing me to capture moments and perspectives with creativity and finesse. Currently, I'm focused on expanding my backend development skills, mastering authentication, database management, and deployment strategies. With a blend of technical prowess, leadership acumen, and creative flair, I strive to make meaningful contributions to the world of technology and beyond.";
  
  return (
    <div>
      <div className="text-center underline text-2xl mt-6">About</div>
      <Titles />
      <div className="text-center lg:px-[10rem] my-4">{about}</div>
    </div>
  );
};

export default About;
