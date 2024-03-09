import React from "react";

const Titles = () => {
  const cardsData = [
    {
      title: "Data Structures And Algorithms",
      subtitle: "100+ Questions",
      src: "./leetcode.svg",
    },
    {
      title: "Web Development",
      subtitle: "MERN Developer",
      src: "./tiles/mern-stack.png",
    },
    {
      title: "Building Community @GDSC-NITA",
      subtitle: "Study Jams & workshops",
      src: "./tiles/gdsc.png",
    },
  ];

  return (
    <div className="flex flex-col items-center lg:flex lg:flex-row xl:flex xl:flex-row 2xl:flex 2xl:flex-row md:flex md:flex-row justify-between space-x-5 lg:px-[11rem] my-4">
      {cardsData.map((card, index) => (
        <div className="card" key={index}>
          <div className="container">
            <img src={card.src} alt="" className="w-[6.5rem] h-[]rounded-[50%]" />
          </div>
          <div className="card-header">
            <span className="">{card.title}</span>
            <span>{card.subtitle}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Titles;
