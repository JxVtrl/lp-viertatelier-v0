import React from "react";

import { midia_data } from "@/data/midia-data";

const Midia: React.FC = () => {
  return (
    <ul>
      {midia_data.map((midia) => (
        <li key={midia.id}>{midia.icon}</li>
      ))}
    </ul>
  );
};

export default Midia;
