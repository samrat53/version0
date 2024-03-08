import React, { useState } from "react";
import Navigations from "../components/Navigations";
import Verify from "../components/Verify";

const Contacts = () => {
  const [human, setHuman] = useState(false);
  return (
    <div>
      <h2 className="text-2xl font-bold my-4 text-center">Contacts</h2>
      <Navigations />
    </div>
  );
};

export default Contacts;
