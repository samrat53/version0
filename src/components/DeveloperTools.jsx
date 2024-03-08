import React from 'react'

const DeveloperTools = () => {
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
        <div className=''>
          <h2 className="text-2xl font-bold mb-4">Developer Tools Proficiency</h2>
          <ul className="list-disc ml-6">
            {data.map((item, index) => {
              return (
                <li key={index}>{item}</li>
              );
            })}
          </ul>
        </div>
      );
}

export default DeveloperTools