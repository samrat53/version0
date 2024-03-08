import React from "react";

const DsaInfo = () => {
  const data = [
    "Programming language C++",
    "Arrays",
    "Standard Template Library",
    "Binary Search",
    "Sorting and Searching Techniques",
    "Single and Doubly Linked list",
    "String Manipulation",
    "Bit Manipulation",
    "Recursion",
  ];
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Data Structures & Algorithms Proficiency</h2>
      <ul className="list-disc ml-6">
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
