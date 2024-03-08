import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Typewritter = ({words}) => {
  return (
    <Typewriter
      words={words}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={30}
      delaySpeed={800}
    />
  );
};

export default Typewritter;
