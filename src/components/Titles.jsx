import React from "react";

const Titles = () => {
  const cardsData = [
    {
      title: "Data Structures And Algorithms",
      subtitle: "100+ Questions",
      src: "./bird.avif",
    },
    {
      title: "Web Development",
      subtitle: "MERN Developer",
      src: "./bird.avif",
    },
    {
      title: "Building Community @GDSC-NITA",
      subtitle: "Study Jams & workshops",
      src: "./bird.avif",
    },
  ];

  return (
    <div className="lg:flex md:flex sm:flex md:justify-between lg:justify-between space-x-5 lg:px-[11rem] my-4">
      {cardsData.map((card, index) => (
        <div className="card" key={index}>
          <div className="container">
            <img src={card.src} alt="" className="w-[6.5rem] rounded-[50%]" />
          </div>
          <div className="card-header">
            <span>{card.title}</span>
            <span>{card.subtitle}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Titles;
