import React from "react";
import DsaInfo from "../components/DsaInfo";
import DeveloperTools from "../components/DeveloperTools";

const SkillsTools = () => {
  return (
    <div className="flex skills-section justify-around gradient p-9 relative flex-col items-center lg:flex lg:flex-row xl:flex xl:flex-row 2xl:flex 2xl:flex-row md:flex md:flex-row">
      <div className="pr-4 skills-dsa">
        <DsaInfo />
      </div>
      <div className="pl-4 skills-dev">
        <DeveloperTools />
      </div>
      <div className="vertical-line"></div>
    </div>
  );
};

export default SkillsTools;
