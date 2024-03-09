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
    url: "./scroll/video.png",
    title: "Recording Video for Lead",
    id: 1,
  },
  {
    url: "./scroll/host.jpg",
    title: "Hosting at orientation",
    id: 2,
  },
  {
    url: "./scroll/session.png",
    title: "Praparing for session",
    id: 3,
  },
  {
    url: "./scroll/students.jpg",
    title: "Students at a introduction session",
    id: 4,
  },
  {
    url: "./scroll/club.jpg",
    title: "With Club member",
    id: 5,
  },
  {
    url: "./scroll/bird.JPG",
    title: "my random wildlife capture",
    id: 6,
  },
  {
    url: "./scroll/concert.JPG",
    title: "capture at my college fest",
    id: 7,
  },
  {
    url: "./scroll/marchpast.JPG",
    title: "Marchpast runner's up",
    id: 8,
  },
];

const ImageScroll = () => {
  return (
    <div className="">
      <div className="flex mt-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500 name">
          A glimpse into my life
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

  const x = useTransform(scrollYProgress, [0, 9], ["15%", "-800%"]);

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
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8  font-black uppercase text-white backdrop-blur-sm text-xl">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default ImageScroll;
