import React from "react";
import DsaInfo from "../components/DsaInfo";
import DeveloperTools from "../components/DeveloperTools";

const SkillsTools = () => {
  return (
    <div className="flex justify-around gradient p-9 relative">
      <div className="pr-4">
        <DsaInfo />
      </div>
      <div className="pl-4">
        <DeveloperTools />
      </div>
      <div className="vertical-line"></div>
    </div>
  );
};

export default SkillsTools;
