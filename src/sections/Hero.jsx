import React from "react";
import "../App.css";
import Typewritter from "../components/Typewritter";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:space-x-8 lg:space-y-0">
      <div className="lg:w-1/2 lg:mr-4">
        <div className="image-container lg:p-[10rem] md:p-9 sm:p-6">
          <img
            src="./bird.avif"
            alt="Samrat's Image"
            className="object-cover w-full h-full lg:w-auto md:w-full sm:w-full"
          />
        </div>
      </div>
      <div className="lg:w-1/2 mt-4 lg:mt-0 lg:p-[10rem] md:p-9 sm:p-6">
        <div className="introduction-container flex flex-col justify-between">
          <div className="name">Samrat Bhattacharya</div>
          <div>
            <Typewritter words={["Web Development", "DSA", "Photography", "Event Management"]}/>
          </div>
          <div className="mt-5">
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
