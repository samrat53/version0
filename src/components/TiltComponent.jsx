import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
// import { FiMousePointer } from "react-icons/fi";

const TiltComponent = () => {
  return (
    <div className="grid w-full place-content-center">
      <TiltCard />
    </div>
  );
};

const ROTATION_RANGE = 50.5;
const HALF_ROTATION_RANGE = 45 / 2;

const TiltCard = () => {
  const ref = useRef(null);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rY = mouseX / width - HALF_ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      className="relative lg:h-96 lg:w-80 md:h-96 md:w-72 sm:h-96 sm:w-72 h-[15rem] w-[15rem] rounded-xl tilt-bg-border "
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl tilt-bg"
      >
            <img
            src="./samrat-coat.png"
            alt="Samrat's Image"
            className="object-cover lg:h-[22rem] md:h-[22rem] sm:h-[22rem] lg:w-auto md:w-full sm:w-full place-content-center"
            />
      </div>
    </motion.div>
  );
};

export default TiltComponent;
