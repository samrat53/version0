// import React from 'react'

// const ImageScroll = () => {
//   return (
//     <div>ImageScroll</div>
//   )
// }

// export default ImageScroll
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
// import { motion } from "framer-motion";

const cards = [
  {
    url: "./bird.avif",
    title: "Title 1",
    id: 1,
  },
  {
    url: "./bird.avif",
    title: "Title 2",
    id: 2,
  },
  {
    url: "./bird.avif",
    title: "Title 3",
    id: 3,
  },
  {
    url: "./bird.avif",
    title: "Title 4",
    id: 4,
  },
  {
    url: "./bird.avif",
    title: "Title 5",
    id: 5,
  },
  {
    url: "./bird.avif",
    title: "Title 6",
    id: 6,
  },
  {
    url: "./bird.avif",
    title: "Title 7",
    id: 7,
  },
];

const ImageScroll = () => {
  return (
    <div className="">
      <div className="flex mt-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Journey Timeline
        </span>
      </div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 9], ["10%", "-600%"]);

  return (
    <section ref={targetRef} className=" relative h-[300vh]">
      <div className="sticky -top-0 flex h-screen items-center overflow-hidden ">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    // <div
    //   key={card.id}
    //   className="group relative h-[200px] w-[400px] overflow-hidden"
    // >
    //   <div
    //     style={{
    //       backgroundImage: `url(${card.url})`,
    //       backgroundSize: "cover",
    //       backgroundPosition: "center",
    //     }}
    //     className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
    //   ></div>
    //   <div className="absolute inset-0 z-10 grid place-content-center">
    //     <p className="bg-gradient-to-br p-8 text-md font-black uppercase text-white backdrop-blur-lg">
    //       {card.title}
    //     </p>
    //   </div>
    // </div>
    <div
      key={card.id}
      className="group relative h-[20rem] w-[30rem] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default ImageScroll;
