import React from "react";

const DsaInfo = () => {
  const data = [
    "C++ and Standard Template Library",
    "Arrays",
    "Binary Search",
    "Sorting and Searching Techniques",
    "Single and Doubly Linked list",
    "String Manipulation",
    "Bit Manipulation",
    "Recursion",
  ];
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 skills-heading text-center">Data Structures & Algorithms  Proficiency</h2>
      <ul className="list-disc list-disc-dsa ml-6 description ">
        {data.map((item, index) => {
          return (
            <li key={index}>{item}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default DsaInfo;
