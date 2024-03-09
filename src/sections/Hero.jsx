import React from "react";
import "../App.css";
import Typewritter from "../components/Typewritter";
import TiltComponent from "../components/TiltComponent";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:space-x-8 lg:space-y-0">
      <TiltComponent/>
      <div className="lg:w-1/2 mt-4 lg:mt-0 lg:py-[10rem] md:p-9 sm:p-6">
        <div className="introduction-container flex flex-col justify-between lg:-ml-[12rem]">
          <div className="name-top uppercase">Samrat <br/>Bhattacharya</div>
          <div className="typewritter-words">
            <Typewritter words={["Web Development", "DSA", "Photography", "Event Management"]}/>
          </div>
          <div className="mt-9 description">
            <div>Department of Computer Science & Engineering</div>
            <div>National Institute of Technology, Agartala</div>
            <div>GDSC: Web Development Team</div>
            <div>Manager: Board of Technical Council</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
